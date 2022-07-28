import Response from "../../common/types/api/response";
import { RequestWithPaginationState } from "../../common/types/states-types";
import reducer, { absencePagination } from "./absence.slice";

import { getInitialRequestWithPaginationState } from "../utils/helper";
describe("testing the reducers in absence slice", () => {
  it("should return the initial state", () => {
    const initalState = getInitialRequestWithPaginationState<any>();
    expect(reducer(undefined, { type: undefined })).toEqual(initalState);
  });
  it("dispatching  absencePagination.requested", () => {
    const initalState = getInitialRequestWithPaginationState<any>();

    const expectedState: RequestWithPaginationState<any> = {
      isLoading: true,
      data: [],
      filter: {},
      page: 0,
      totalEntries: 0,
      totalPageCount: 0,
      error: null,
      pageSize: 10,
    };

    const newState = reducer(
      initalState,
      absencePagination.requested("REQUESTED")
    );
    expect(newState).toEqual(expectedState);
  });

  it("dispatching  absencePagination.fullfilled", () => {
    const initalState = getInitialRequestWithPaginationState<any>();

    const expectedState: RequestWithPaginationState<number> = {
      isLoading: false,
      data: [1, 2, 3, 4, 5],
      filter: {},
      page: 0,
      totalEntries: 10,
      totalPageCount: 2,
      error: null,
      pageSize: 5,
    };

    const payload: Response<number[]> = {
      data: [1, 2, 3, 4, 5],
      page: 0,
      totalEntries: 10,
      totalPageCount: 2,
      pageSize: 5,
    };
    const newState = reducer(
      initalState,
      absencePagination.fullfilled(payload)
    );

    expect(newState).toEqual(expectedState);
  });

  it("dispatching  absencePagination.rejected", () => {
    const initalState = getInitialRequestWithPaginationState<any>();

    const expectedState: RequestWithPaginationState<any> = {
      isLoading: false,
      data: [],
      filter: {},
      page: 0,
      totalEntries: 0,
      totalPageCount: 0,
      error: "dipatched error",
      pageSize: 10,
    };

    const newState = reducer(
      initalState,
      absencePagination.rejected("dipatched error")
    );
    expect(newState).toEqual(expectedState);
  });
  it("dispatching  absencePagination.setFilter", () => {
    const initalState = getInitialRequestWithPaginationState<any>();

    const expectedState: RequestWithPaginationState<any> = {
      isLoading: false,
      data: [],
      filter: { name: "anyname" },
      page: 0,
      totalEntries: 0,
      totalPageCount: 0,
      error: null,
      pageSize: 10,
    };

    const newState = reducer(
      initalState,
      absencePagination.setFilter({ key: "name", value: "anyname" })
    );
    expect(newState).toEqual(expectedState);
  });
});
