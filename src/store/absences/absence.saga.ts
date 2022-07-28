import { absencePagination, absenceSelector } from "./absence.slice";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { RequestWithPaginationState } from "../../common/types/states-types";
import { absences } from "../../api/api";
import Response from "../../common/types/api/response";
import { Absence } from "../../common/types/api/absence";

export function* fetchAbsences() {
  try {
    yield put(absencePagination.requested("REQUESTED"));

    const abscenseState: RequestWithPaginationState<any> = yield select(
      absenceSelector
    );

    const filter = abscenseState.filter;

    const response: Response<any> = yield call(
      absences,
      abscenseState.page,
      abscenseState.pageSize,
      filter
    );

    yield put(absencePagination.fullfilled(response));
  } catch (e) {
    yield put(absencePagination.rejected(e));
  }
}
export default function* abscenseWatcher() {
  yield takeLatest([absencePagination.action.type], fetchAbsences);
}
