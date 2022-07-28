export type Status = "all" | "confirmed" | "rejected" | "requested";

const filterData = (data: any[], dateFilter = "", status: Status): any[] => {
  let filteredData = data;
  if (dateFilter) {
    const date = new Date(Date.parse(dateFilter));

    filteredData = data.filter(
      (item) => item.createdAt.getTime() === date.getTime()
    );
  }
  if (status === "rejected") {
    filteredData = data.filter((item) => item.rejectedAt);
  }

  if (status === "confirmed") {
    filteredData = data.filter((item) => item.confirmedAt);
  }
  if (status === "requested") {
    filteredData = data.filter(
      (item) => !(item.confirmedAt || item.rejectedAt)
    );
  }
  return filteredData;
};

export default filterData;
