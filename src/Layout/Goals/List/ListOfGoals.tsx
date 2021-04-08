/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import React from "react";
import { Goal } from "../../../interfaces/goal.interface";
import { LIST_OF_GOALS_LABEL } from "../Assets/constants";
import { DisplayGoals } from "../DisplayGoals/DisplayGoals";
import './ListOfGoals.css';

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
      <p className="list-of-goals__label">{LIST_OF_GOALS_LABEL}</p>
      <div className="list-of-goals">
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
      </div>
    </>
  );
};
