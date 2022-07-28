export const pagination = (
  data: any[],
  pageNumber: number,
  pageSize: number
) => {
  if (pageSize === 0) {
    throw new Error("pageSize cannot be 0");
  }
  const totalPageCount = Math.ceil(data.length / pageSize);

  if (pageNumber > totalPageCount) {
    throw new RangeError("pageNumber is out of range");
  }
  const start = pageNumber * pageSize;
  const end = start + pageSize;
  const page = data.slice(start, end);
  return { page, totalPageCount };
};
