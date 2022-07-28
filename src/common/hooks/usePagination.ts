import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestWithPaginationAction } from "../types/action-types";
import { Filter, RequestWithPaginationState } from "../types/states-types";

const usePagination = (
  selector: (state: any) => RequestWithPaginationState<any>,
  paginationActions: RequestWithPaginationAction<any>
) => {
  const dispatch = useDispatch();
  const state = useSelector(selector);

  useEffect(() => {
    dispatch(paginationActions.action(null));
  }, [paginationActions, dispatch]);

  const goToPage = (page: number) => {
    dispatch(paginationActions.setPage(page));
    dispatch(paginationActions.action(null));
  };

  const setPageSize = (pageSize: number) => {
    dispatch(paginationActions.setPageSize(pageSize));
    dispatch(paginationActions.action(null));
  };

  const setFilter = (filter: Filter) => {
    dispatch(paginationActions.setFilter(filter));
    dispatch(paginationActions.action(null));
  };
  return {
    data: state.data,
    totalPages: state.totalPageCount,
    page: state.page,
    setPage: goToPage,
    filter: state.filter,
    setFilter: setFilter,
    pageSize: state.pageSize,
    setPageSize,
    totalEntries: state.totalEntries,
    isLoading: state.isLoading,
  };
};

export default usePagination;
