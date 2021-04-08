import React from "react";
import { Card } from "../../../Components/Card/Card";
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
    <Card>
      <div className="goal-info-container">
        <div>  {goalDescription} </div>
        <div> {goalNeededResources}</div>
      </div>
    </Card>
  );
};
