import { takeEvery, all, fork, put } from "redux-saga/effects";
import { ADD_TO_BUDGET, SUBTRACT_FROM_BUDGET } from "../Actions/BudgetActions/budget.actions";
import { addToHistory } from "../Actions/HistoryActions/history.actions";

type AddToHistoryAction = { type: any, payload: any }

function* addToHistorySaga(action: AddToHistoryAction) {
  yield put(addToHistory({
    type: action.type,
    payload: action.payload,
    time: new Date()
  }));
}

function* watchOnHistorySaga() {
  yield takeEvery([ADD_TO_BUDGET, SUBTRACT_FROM_BUDGET], addToHistorySaga);
}

export default function* historySaga() {
  yield all([fork(watchOnHistorySaga)]);
}
