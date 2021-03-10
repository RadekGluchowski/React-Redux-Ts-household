export const ADD_GOAL = "ADD_GOAL"
export const DONE_GOAL = "DONE_GOAL";

type AddGoalAction = { type: typeof ADD_GOAL, payload: object }
type DoneGoalAction = { type: typeof DONE_GOAL, payload: any }

export const addGoal = (goal: object): AddGoalAction => ({
    type: ADD_GOAL,
    payload: goal
});

export const doneGoal = (goal: any): DoneGoalAction => ({
    type: DONE_GOAL,
    payload: goal
})

export type GoalsActions = AddGoalAction | DoneGoalAction