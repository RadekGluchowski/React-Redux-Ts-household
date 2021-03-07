export const ADD_GOAL = "ADD_GOAL"

type AddGoalAction = { type: typeof ADD_GOAL, payload: object }

export const addGoal = (goal: object): AddGoalAction => ({
    type: ADD_GOAL,
    payload: goal
});

export type GoalsActions = AddGoalAction