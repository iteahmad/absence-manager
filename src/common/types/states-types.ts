export interface Filter {
  key: string;
  value: string;
}
export interface RequestState<T> {
  isLoading: boolean;
  data?: T | T[];
  error: object | string | null;
}

export interface RequestWithPaginationState<T> extends RequestState<T> {
  totalEntries: number;
  filter: { [k: string]: string };
  page: number;
  totalPageCount: number;
  pageSize: number;
}
