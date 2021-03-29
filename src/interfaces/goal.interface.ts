export interface Goals {
    goals: Array<Goal>
}

export interface Goal {
    goalNeededResources: number,
    goalDescription: string
}

export interface GoalToEdit {
    index: number,
    goal: Goal
}

export interface ChargeGoal {
    charge: number,
    goalIndex: number
}