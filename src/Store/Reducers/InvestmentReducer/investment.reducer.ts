import { ADD_INVESTMENT, InvestmentActions, DONE_INVESTMENT } from "../../Actions/InvestmentActions/investment.actions"
import produce, { Draft } from 'immer';
import { Investment } from "../../../interfaces/investment.interface";

export interface InvestmentState {
    investments: Array<object>
}

const initialState = {
    investments: []
}

export const investmentReducer = (state: InvestmentState = initialState, action: InvestmentActions) => {
    return produce(state, (draft: Draft<InvestmentState>) => {
        switch (action.type) {
            case ADD_INVESTMENT:
                draft.investments = [...draft.investments, action.payload];
                break;
            case DONE_INVESTMENT:
                draft.investments = draft.investments.filter((investment: Investment,) => investment.id !== action.payload.id);
                break;
            default:
                return draft;
        }
    })
}

