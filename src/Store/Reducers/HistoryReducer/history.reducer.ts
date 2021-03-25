import { ADD_TO_HISTORY, HistoryActions } from "../../Actions/HistoryActions/history.actions"
import produce, { Draft } from 'immer';
import { History } from "../../../interfaces/history.interface";

const initialState = {
    events: []
}

export const historyReducer = (state: History = initialState, action: HistoryActions) => {
    return produce(state, (draft: Draft<History>) => {
        switch (action.type) {
            case ADD_TO_HISTORY:
                draft.events = [...draft.events, action.payload]
                break;
            default:
                return draft;
        }
    })
}

