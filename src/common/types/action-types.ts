import { PayloadActionCreator } from "@reduxjs/toolkit";
import Response from "./api/response";
import { Filter } from "./states-types";

export interface RequestAction<T> {
  action: PayloadActionCreator<T | undefined>;
  requested: PayloadActionCreator<T | undefined>;
  fullfilled: PayloadActionCreator<Response<T> | undefined>;
  rejected: PayloadActionCreator<T | undefined>;
}

export interface RequestWithPaginationAction<T> extends RequestAction<T> {
  setFilter: PayloadActionCreator<Filter | undefined>;
  setPage: PayloadActionCreator<number>;
  setPageSize: PayloadActionCreator<T | undefined>;
}
