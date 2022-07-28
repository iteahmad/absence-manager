import { Absence } from "../common/types/api/absence";
import Response from "../common/types/api/response";
import { convertAbsence } from "./helper/conveters";
import filterData, { Status } from "./helper/filter";
import { pagination } from "./helper/pagination";
import absences_json from "./json_files/absences.json";
import members_json from "./json_files/members.json";

const ABSENCES_PATH = "absences";
const MEMBERS_PATH = "members";

const readJsonFile = (path: string): Promise<any[]> =>
  new Promise((resolve) => {
    if (path === "absences") return resolve(absences_json);
    return resolve(members_json);
  }).then((data: any) => {
    if (path === "absences") {
      return data.payload.map((item: any): Absence => {
        return convertAbsence(item);
      });
    }
    return data.payload;
  });

export const absences = async (
  pageNumber = 0,
  pageSize = 10,
  filter: any
): Promise<Response<Absence[]>> => {
  const absences = await readJsonFile(ABSENCES_PATH);
  const members = await readJsonFile(MEMBERS_PATH);

  const data = absences.map((absence: Absence) => {
    const relatedMember = members.find(
      (item: any) => item.userId === absence.userId
    );
    return { ...absence, member: { ...relatedMember } };
  });

  let dateFilter = "";
  if (filter && filter["date"]) {
    dateFilter = filter["date"];
  }

  let status = "";
  if (filter && filter["status"]) {
    status = filter["status"];
  }

  let filteredData = filterData(data, dateFilter, status as Status);

  const { page, totalPageCount } = pagination(
    filteredData,
    pageNumber,
    pageSize
  );
  return {
    data: page,
    page: pageNumber,
    pageSize,
    error: null,
    totalPageCount,
    totalEntries: filteredData.length,
  };
};
