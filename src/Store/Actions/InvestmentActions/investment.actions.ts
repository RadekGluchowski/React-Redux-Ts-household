import { InvestmentInterface } from "../../../interfaces/investment.interface";

export const ADD_INVESTMENT = "ADD_INVESTMENT"
export const DONE_INVESTMENT = "DONE_INVESTMENT";

type AddInvestmentAction = { type: typeof ADD_INVESTMENT, payload: InvestmentInterface }
type DoneInvestmentAction = { type: typeof DONE_INVESTMENT, payload: InvestmentInterface }

export const addInvestment = (investment: InvestmentInterface): AddInvestmentAction => ({
    type: ADD_INVESTMENT,
    payload: investment
});

export const doneInvestment = (investment: InvestmentInterface): DoneInvestmentAction => ({
    type: DONE_INVESTMENT,
    payload: investment
})

export type InvestmentActions = AddInvestmentAction | DoneInvestmentAction