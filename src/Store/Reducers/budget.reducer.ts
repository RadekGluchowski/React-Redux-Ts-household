import { ADD_TO_BUDGET, BudgetActions, SUBTRACT_FROM_BUDGET } from "../Actions/budget.actions"
import produce, { Draft } from 'immer';

export interface BudgetState {
    resources: number
}

const initialState = {
    resources: 0
}

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
    return produce(state, (draft: Draft<BudgetState>) => {
        switch (action.type) {
            case ADD_TO_BUDGET:
                draft.resources += action.payload;
                break;
            case SUBTRACT_FROM_BUDGET:
                draft.resources -= action.payload;
                break;
            default:
                return draft;
        }
    })
}

