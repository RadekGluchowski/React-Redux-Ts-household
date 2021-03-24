import { createSelector } from "reselect"
import { Budget } from "../../interfaces/budget.interface";
import { GoalsState } from "../Reducers/GoalsReducer/goals.reducer";
import { AppState } from "../Reducers/root-reducer";

const selectGoalsState = (state: AppState) => state.goalReducer;
const selectBudgetState = (state: AppState) => state.budgetReducer;

export const selectGoals = createSelector(
    selectGoalsState,
    (state: GoalsState) => state.goals
)

export const selectBudget = createSelector(
    selectBudgetState,
    (state: Budget) => state.resources
)