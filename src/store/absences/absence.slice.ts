import { createSlice } from "@reduxjs/toolkit";
import { Absence } from "../../common/types/api/absence";
import { RequestWithPaginationState } from "../../common/types/states-types";
import {
  generateBuilderForRequestActionWithPagination,
  generateRequestActionWithPagination,
} from "../utils/helper";

const sliceName = "absence";

const initalState: RequestWithPaginationState<Absence> = {
  isLoading: false,
  data: [],
  filter: {},
  page: 0,
  totalEntries: 0,
  totalPageCount: 0,
  error: null,
  pageSize: 10,
};

export const absencePagination =
  generateRequestActionWithPagination("absence/pagination");

export const slice = createSlice({
  name: sliceName,
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    generateBuilderForRequestActionWithPagination(builder, absencePagination);
  },
});

export const absenceSelector = (
  state: any
): RequestWithPaginationState<any> => {
  return state.absence;
};

export default slice.reducer;
