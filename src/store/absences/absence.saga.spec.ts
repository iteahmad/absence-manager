import assert from "assert";
import { call, put, select } from "redux-saga/effects";
import { absences } from "../../api/api";
import Response from "../../common/types/api/response";
import { RequestWithPaginationState } from "../../common/types/states-types";
import { fetchAbsences } from "./absence.saga";
import { absencePagination, absenceSelector } from "./absence.slice";

describe("Test fetchAbsences saga", () => {
  it("when data are fetched", () => {
    const gen = fetchAbsences();
    const stateMock: RequestWithPaginationState<any> = {
      data: [],
      error: null,
      isLoading: false,
      page: 0,
      pageSize: 5,
      filter: {},
      totalPageCount: 5,
      totalEntries: 0,
    };

    assert.deepEqual(
      gen.next().value,
      put(absencePagination.requested("REQUESTED")),
      "it dipsatch an absencePagination.requested"
    );

    assert.deepEqual(gen.next().value, select(absenceSelector));

    assert.deepEqual(gen.next(stateMock).value, call(absences, 0, 5, {}));

    const mockResponse: Response<any> = {
      data: [],
      page: 0,
      totalEntries: 10,
      totalPageCount: 2,
      pageSize: 5,
    };

    assert.deepEqual(
      gen.next(mockResponse).value,
      put(absencePagination.fullfilled(mockResponse))
    );
  });

  it("when an error is thrown", () => {
    const gen = fetchAbsences();

    assert.deepEqual(
      gen.next().value,
      put(absencePagination.requested("REQUESTED"))
    );

    assert.deepEqual(gen.next().value, select(absenceSelector));
    const stateMock: RequestWithPaginationState<any> = {
      data: [],
      error: null,
      isLoading: false,
      page: 0,
      pageSize: 5,
      filter: {},
      totalPageCount: 5,
      totalEntries: 0,
    };
    assert.deepEqual(gen.next(stateMock).value, call(absences, 0, 5, {}));

    const e = new Error();
    assert.deepEqual(gen.throw(e).value, put(absencePagination.rejected(e)));
  });
});
