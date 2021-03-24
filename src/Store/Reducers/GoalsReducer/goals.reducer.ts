import { ADD_GOAL, GoalsActions, DONE_GOAL, CHARGE_GOAL } from "../../Actions/GoalsActions/goals.actions"
import produce, { Draft } from 'immer';
import { Goals } from "../../../interfaces/goal.interface";

const initialState = {
    goals: []
}

export const goalReducer = (state: Goals = initialState, action: GoalsActions) => {
    return produce(state, (draft: Draft<Goals>) => {
        switch (action.type) {
            case ADD_GOAL:
                draft.goals = [...draft.goals, action.payload];
                break;
            case DONE_GOAL:
                draft.goals = draft.goals.filter((value: any, index: number) => index !== action.payload.index);
                break;
            case CHARGE_GOAL:
                draft.goals[action.payload.goalIndex].goalNeededResources = state.goals[action.payload.goalIndex].goalNeededResources - action.payload.charge
                break;
            default:
                return draft;
        }
    })
}

