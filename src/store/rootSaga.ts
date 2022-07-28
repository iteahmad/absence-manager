import { all, fork } from "redux-saga/effects";
import abscenseWatcher from "./absences/absence.saga";

export default function* rootSaga() {
  yield all([fork(abscenseWatcher)]);
}
