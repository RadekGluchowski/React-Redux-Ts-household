import { ADD_GOAL, GoalsActions, DONE_GOAL, CHARGE_GOAL } from "../../Actions/GoalsActions/goals.actions"
import produce, { Draft } from 'immer';

export interface GoalsState {
    goals: any
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
                draft.goals = draft.goals.filter((value: any, index: any) => index !== action.payload.index);
                break;
            case CHARGE_GOAL:
                draft.goals[action.payload.goalIndex].goalNeededResources = state.goals[action.payload.goalIndex].goalNeededResources - action.payload.charge
                break;
            default:
                return draft;
        }
    })
}

