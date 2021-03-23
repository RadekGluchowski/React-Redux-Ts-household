import { Investment } from "../../../interfaces/investment.interface";

export const ADD_INVESTMENT = "ADD_INVESTMENT"
export const DONE_INVESTMENT = "DONE_INVESTMENT";

type AddInvestmentAction = { type: typeof ADD_INVESTMENT, payload: object }
type DoneInvestmentAction = { type: typeof DONE_INVESTMENT, payload: Investment }

export const addInvestment = (investnemt: object): AddInvestmentAction => ({
    type: ADD_INVESTMENT,
    payload: investnemt
});

export const doneInvestment = (investment: Investment): DoneInvestmentAction => ({
    type: DONE_INVESTMENT,
    payload: investment
})

export type InvestmentActions = AddInvestmentAction | DoneInvestmentAction