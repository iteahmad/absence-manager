export type Status = "all" | "confirmed" | "rejected" | "requested";

const filterData = (data: any[], dateFilter = "", status: Status): any[] => {
  let filteredData = data;
  if (dateFilter) {
    const date = new Date(Date.parse(dateFilter));

    filteredData = data.filter(
      (item) => item.startDate.getTime() === date.getTime()
    );
  }
  if (status === "rejected") {
    filteredData = filteredData.filter((item) => item.rejectedAt);
  }

  if (status === "confirmed") {
    filteredData = filteredData.filter((item) => item.confirmedAt);
  }
  if (status === "requested") {
    filteredData = filteredData.filter(
      (item) => !(item.confirmedAt || item.rejectedAt)
    );
  }
  return filteredData;
};

export default filterData;
