import { Event } from "../../../interfaces/history.interface";

export const ADD_TO_HISTORY = "ADD_TO_HISTORY"

export type AddToHistory = { type: typeof ADD_TO_HISTORY, payload: Event }


export const addToHistory = (event: Event): AddToHistory => ({
    type: ADD_TO_HISTORY,
    payload: event
});

export type HistoryActions = AddToHistory