import { ChargeGoal, Goal, GoalToEdit } from "../../../interfaces/goal.interface";

export const ADD_GOAL = "ADD_GOAL"
export const DONE_GOAL = "DONE_GOAL";
export const CHARGE_GOAL = "CHARGE_GOAL";

type AddGoalAction = { type: typeof ADD_GOAL, payload: Goal }
type DoneGoalAction = { type: typeof DONE_GOAL, payload: GoalToEdit }
type ChargeGoalAction = { type: typeof CHARGE_GOAL, payload: ChargeGoal }


export const addGoal = (goal: Goal): AddGoalAction => ({
    type: ADD_GOAL,
    payload: goal
});

export const chargeGoal = (charge: number, goalIndex: number): ChargeGoalAction => ({
    type: CHARGE_GOAL,
    payload: { charge, goalIndex }
})

export const doneGoal = (goal: GoalToEdit): DoneGoalAction => ({
    type: DONE_GOAL,
    payload: goal
})

export type GoalsActions = AddGoalAction | DoneGoalAction | ChargeGoalAction