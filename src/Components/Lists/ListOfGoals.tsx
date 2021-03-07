import React from "react";

interface ListOfGoalsProps {
  goals: any[];
}

export const ListOfGoals: React.FC<ListOfGoalsProps> = ({ goals }) => {
  console.log(goals);
  return (
    <>
      {goals.map((goal, index) => (
        <div key={index}>
          <div>
            {goal.goalDescription}
            {goal.goalNeededResources}
          </div>
        </div>
      ))}
    </>
  );
};
