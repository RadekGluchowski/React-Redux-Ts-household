export const ADD_GOAL = "ADD_GOAL"
export const DONE_GOAL = "DONE_GOAL";
export const CHARGE_GOAL = "CHARGE_GOAL";

type AddGoalAction = { type: typeof ADD_GOAL, payload: object }
type DoneGoalAction = { type: typeof DONE_GOAL, payload: any }
type ChargeGoalAction = { type: typeof CHARGE_GOAL, payload: any }


export const addGoal = (goal: object): AddGoalAction => ({
    type: ADD_GOAL,
    payload: goal
});

export const chargeGoal = (charge: number, goalIndex: number) => ({
    type: CHARGE_GOAL,
    payload: { charge, goalIndex }
})

export const doneGoal = (goal: any): DoneGoalAction => ({
    type: DONE_GOAL,
    payload: goal
})

export type GoalsActions = AddGoalAction | DoneGoalAction | ChargeGoalAction