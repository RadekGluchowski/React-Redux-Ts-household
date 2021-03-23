/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import React from "react";
import { Goal } from "../../../interfaces/goal.interface";
import { DisplayGoals } from "../DisplayGoals/DisplayGoals";

interface ListOfGoalsProps {
  goals: Goal[];
  editGoal(goal: object, index: number): void;
}

export const ListOfGoals: React.FC<ListOfGoalsProps> = ({
  goals,
  editGoal,
}) => {
  const handleGoalClick = (
    goal: Goal,
    index: number
  ) => {
    editGoal(goal, index);
  };

  return (
    <>
      {goals.map((goal, index) => (
        <div key={index}>
          <div onClick={() => handleGoalClick(goal, index)}>
            <DisplayGoals
              goalDescription={goal.goalDescription}
              goalNeededResources={goal.goalNeededResources}
            />
          </div>
        </div>
      ))}
    </>
  );
};
