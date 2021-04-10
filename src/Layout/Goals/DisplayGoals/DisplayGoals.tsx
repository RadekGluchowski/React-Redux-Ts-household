import React from "react";
import './DisplayGoal.css';

interface DisplayGoalsProps {
  goalDescription: string;
  goalNeededResources: number;
}

export const DisplayGoals: React.FC<DisplayGoalsProps> = ({
  goalDescription,
  goalNeededResources,
}) => {
  return (
      <div className="goal-info-container">
        <div>  {goalDescription} </div>
        <div> {goalNeededResources}</div>
      </div>
  );
};
