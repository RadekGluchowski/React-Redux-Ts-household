import { all, fork } from "redux-saga/effects";
import budgetSaga from "./budget.saga";

export default function* rootSaga() {
  yield all([fork(budgetSaga)]);
}
