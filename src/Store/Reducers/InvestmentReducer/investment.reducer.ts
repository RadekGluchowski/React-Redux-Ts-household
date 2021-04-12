import { ADD_INVESTMENT, InvestmentActions, DONE_INVESTMENT } from "../../Actions/InvestmentActions/investment.actions"
import produce, { Draft } from 'immer';
import { InvestmentInterface } from "../../../interfaces/investment.interface";

const initialState = {
    typeOfInvestment: '',
    investmentAmount: 0
}

export const investmentReducer = (state: InvestmentInterface = initialState, action: InvestmentActions) => {
    return produce(state, (draft: Draft<InvestmentInterface>) => {
        switch (action.type) {
            case ADD_INVESTMENT:
                draft.typeOfInvestment = action.payload.typeOfInvestment;
                draft.investmentAmount = action.payload.investmentAmount;
                break;
            case DONE_INVESTMENT:
                draft.typeOfInvestment = ''
                draft.investmentAmount = 0
                break;
            default:
                return draft;
        }
    })
}

