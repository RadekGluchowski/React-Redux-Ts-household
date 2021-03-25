export const ADD_TO_HISTORY = "ADD_TO_HISTORY"

export type AddToHistory = { type: typeof ADD_TO_HISTORY, payload: object }


export const addToBudget = (event: object): AddToHistory => ({
    type: ADD_TO_HISTORY,
    payload: event
});

export type HistoryActions = AddToHistory