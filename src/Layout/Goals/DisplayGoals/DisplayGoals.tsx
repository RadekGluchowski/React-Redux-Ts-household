import React from "react";

interface DisplayGoalsProps {
  goalDescription: string;
  goalNeededResources: number;
}

export const DisplayGoals: React.FC<DisplayGoalsProps> = ({
  goalDescription,
  goalNeededResources,
}) => {
  return (
    <>
      <div> {goalDescription} </div>
      <div> {goalNeededResources}</div>
    </>
  );
};
