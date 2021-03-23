import { createSelector } from "reselect"
import { GoalsState } from "../Reducers/GoalsReducer/goals.reducer";
import { AppState } from "../Reducers/root-reducer";

const selectGoalsState = (state: AppState) => state.goalReducer;

export const selectGoals = createSelector(
    selectGoalsState,
    (state: GoalsState) => state.goals
)