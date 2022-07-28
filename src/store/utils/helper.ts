import { ActionReducerMapBuilder, createAction } from "@reduxjs/toolkit";
import {
  RequestAction,
  RequestWithPaginationAction,
} from "../../common/types/action-types";
import Response from "../../common/types/api/response";
import {
  Filter,
  RequestWithPaginationState,
} from "../../common/types/states-types";

export const generateRequestAction = <T>(
  actionKey: string
): RequestAction<T | undefined> => {
  const action = createAction<T | undefined>(actionKey);
  const requested = createAction<T | undefined>(actionKey + ".requested");
  const fullfilled = createAction<Response<any>>(actionKey + ".fullfilled");
  const rejected = createAction<T | undefined>(actionKey + ".rejected");
  return {
    action,
    requested,
    fullfilled,
    rejected,
  };
};

export const generateBuilderForRequestAction = <T>(
  builder: ActionReducerMapBuilder<T>,
  action: RequestAction<any>
) => {
  builder
    .addCase(action.requested, (state: any) => {
      console.log("requested");
      state.isLoading = true;
    })
    .addCase(
      action.fullfilled,
      (state: any, { payload }: { payload: Response<any> }) => {
        state.data = payload.data;
        state.pageSize = payload.pageSize;
        state.totalPageCount = payload.totalPageCount;
        state.totalEntries = payload.totalEntries;
        state.isLoading = false;
      }
    )
    .addCase(
      action.rejected,
      (state: any, { payload }: { payload: string }) => {
        state.data = [];
        state.totalPageCount = 0;
        state.isLoading = false;
        state.error = payload;
      }
    );
};

export const generateRequestActionWithPagination = <T>(
  actionKey: string
): RequestWithPaginationAction<T | undefined> => {
  const setFilter = createAction<Filter | undefined>(actionKey + ".setFilter");
  const setPage = createAction<number>(actionKey + ".setPage");
  const setPageSize = createAction<T | undefined>(actionKey + ".setPageSize");

  return {
    ...generateRequestAction(actionKey),
    setFilter,
    setPage,
    setPageSize,
  };
};

export const generateBuilderForRequestActionWithPagination = <T>(
  builder: ActionReducerMapBuilder<T>,
  action: RequestWithPaginationAction<any>
) => {
  generateBuilderForRequestAction(builder, action);

  builder
    .addCase(action.setPage, (state: any, { payload }: { payload: number }) => {
      state.page = payload;
    })
    .addCase(
      action.setFilter,
      (state: any, { payload }: { payload: Filter | undefined }) => {
        if (payload) state.filter[payload.key] = payload.value;
        console.log(state);
      }
    )
    .addCase(action.setPageSize, (state: any, { payload }) => {
      state.pageSize = payload;
    });
};

export const getInitialRequestWithPaginationState = <
  T
>(): RequestWithPaginationState<T> => {
  const initalState: RequestWithPaginationState<T> = {
    isLoading: false,
    data: [],
    filter: {},
    page: 0,
    totalEntries: 0,
    totalPageCount: 0,
    error: null,
    pageSize: 10,
  };

  return initalState;
};
