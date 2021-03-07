export const ADD_TO_BUDGET = "ADD_TO_BUDGET"
export const SUBTRACT_FROM_BUDGET = "SUBTRACT_FROM_BUDGET"

type AddToBudgetAction = { type: typeof ADD_TO_BUDGET, payload: number }
type SubtractFromBudgetAction = { type: typeof SUBTRACT_FROM_BUDGET, payload: number }

export const subtractFromBudget = (resources: number): SubtractFromBudgetAction => ({
    type: SUBTRACT_FROM_BUDGET,
    payload: resources
})

export const addToBudget = (resources: number): AddToBudgetAction => ({
    type: ADD_TO_BUDGET,
    payload: resources
});

export type BudgetActions = AddToBudgetAction | SubtractFromBudgetAction