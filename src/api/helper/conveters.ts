import { Absence } from "../../common/types/api/absence";

export const convertAbsence = (json: any): Absence => {
  return {
    ...json,
    confirmedAt: json.confirmedAt
      ? new Date(Date.parse(json.confirmedAt))
      : null,
    rejectedAt: json.rejectedAt ? new Date(Date.parse(json.rejectedAt)) : null,
    createdAt: json.createdAt ? new Date(Date.parse(json.createdAt)) : null,
    endDate: new Date(Date.parse(json.endDate)),
    startDate: new Date(Date.parse(json.startDate)),
  };
};
