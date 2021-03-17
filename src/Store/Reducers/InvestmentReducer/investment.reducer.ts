import { ADD_INVESTMENT, InvestmentActions, DONE_INVESTMENT } from "../../Actions/InvestmentActions/investment.actions"
import produce, { Draft } from 'immer';

export interface InvestmentState {
    investment: Array<object>
}

const initialState = {
    investment: []
}

export const investmentReducer = (state: InvestmentState = initialState, action: InvestmentActions) => {
    return produce(state, (draft: Draft<InvestmentState>) => {
        switch (action.type) {
            case ADD_INVESTMENT:
                draft.investment = [...draft.investment, action.payload];
                break;
            case DONE_INVESTMENT:

                break;
            default:
                return draft;
        }
    })
}

