export const ADD_INVESTMENT = "ADD_INVESTMENT"
export const DONE_INVESTMENT = "DONE_INVESTMENT";

type AddInvestmentAction = { type: typeof ADD_INVESTMENT, payload: object }
type DoneInvestmentAction = { type: typeof DONE_INVESTMENT, payload: any }

export const addInvestnemt = (investnemt: object): AddInvestmentAction => ({
    type: ADD_INVESTMENT,
    payload: investnemt
});

export const doneInvestment = (investment: any): DoneInvestmentAction => ({
    type: DONE_INVESTMENT,
    payload: investment
})

export type InvestmentActions = AddInvestmentAction | DoneInvestmentAction