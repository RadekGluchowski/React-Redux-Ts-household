import {takeEvery, all, fork } from "redux-saga/effects";
import { AddToBudgetAction, ADD_TO_BUDGET } from "../Actions/BudgetActions/budget.actions";

function* addToBudgetSaga(action: AddToBudgetAction) {
  // TODO: dispatch history action
  // yield put();
}

function* watchOnBudgetSaga() {
  yield takeEvery(ADD_TO_BUDGET, addToBudgetSaga);
}

export default function* budgetSaga() {
  yield all([fork(watchOnBudgetSaga)]);
}
