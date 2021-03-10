import { ADD_GOAL, GoalsActions, DONE_GOAL } from "../../Actions/GoalsActions/goals.actions"
import produce, { Draft } from 'immer';

export interface GoalsState {
    goals: object[]
}

const initialState = {
    goals: []
}

export const goalReducer = (state: GoalsState = initialState, action: GoalsActions) => {
    return produce(state, (draft: Draft<GoalsState>) => {
        switch (action.type) {
            case ADD_GOAL:
                draft.goals = [...draft.goals, action.payload];
                break;
            case DONE_GOAL:
                draft.goals = draft.goals.filter((value, index) => index !== action.payload.index);
                break;
            default:
                return draft;
        }
    })
}

