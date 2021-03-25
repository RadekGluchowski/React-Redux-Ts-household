import { takeEvery, all, fork, put } from "redux-saga/effects";
import { AddToBudgetAction, ADD_TO_BUDGET } from "../Actions/BudgetActions/budget.actions";
import { addToHistory } from "../Actions/HistoryActions/history.actions";

function* addToBudgetSaga(action: AddToBudgetAction) {
  yield put(addToHistory({
    type: action.type,
    payload: action.payload,
    time: new Date()
  }));
}

function* watchOnBudgetSaga() {
  yield takeEvery(ADD_TO_BUDGET, addToBudgetSaga);
}

export default function* budgetSaga() {
  yield all([fork(watchOnBudgetSaga)]);
}
