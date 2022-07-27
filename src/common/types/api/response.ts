export default interface Response<T> {
  data?: T;
  page: number;
  error?: any;
  totalPageCount: number;
  totalEntries: number;
  pageSize: number;
}
