import { ADD_TO_BUDGET, BudgetActions, SUBTRACT_FROM_BUDGET } from "../../Actions/BudgetActions/budget.actions"
import produce, { Draft } from 'immer';
import { Budget } from "../../../interfaces/budget.interface";

const initialState = {
    resources: 0
}

export const budgetReducer = (state: Budget = initialState, action: BudgetActions) => {
    return produce(state, (draft: Draft<Budget>) => {
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

