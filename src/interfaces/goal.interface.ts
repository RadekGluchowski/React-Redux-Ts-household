export interface Goals {
    goals: Array<Goal>
}

export interface Goal {
    goalNeededResources: number,
    goalDescription: string
}

export interface GoalToEdit {
    index: number,
    goal: {
        goalNeededResources: number,
        goalDescription: string
    }
}

export interface ChargeGoal {
    charge: number,
    goalIndex: number
}