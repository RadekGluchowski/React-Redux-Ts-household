import { createSelector } from "reselect"
import { Budget } from "../../interfaces/budget.interface";
import { Goals } from "../../interfaces/goal.interface";
import { Investment } from "../../interfaces/investment.interface";
import { AppState } from "../Reducers/root-reducer";

const selectGoalsState = (state: AppState) => state.goals;
const selectBudgetState = (state: AppState) => state.budget;
const selectInvestmentState = (state: AppState) => state.investment;

export const selectGoals = createSelector(
    selectGoalsState,
    (state: Goals) => state.goals
)

export const selectBudget = createSelector(
    selectBudgetState,
    (state: Budget) => state.resources
)

export const selectInvestment = createSelector(
    selectInvestmentState,
    (state: Investment) => state
)