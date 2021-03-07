export const ADD_TO_BUDGET = "ADD_TO_BUDGET"

type AddToBudgetAction = { type: typeof ADD_TO_BUDGET, payload: number }

export const addToBudget = (resources: number): AddToBudgetAction => ({
    type: ADD_TO_BUDGET,
    payload: resources
});

export type BudgetActions = AddToBudgetAction