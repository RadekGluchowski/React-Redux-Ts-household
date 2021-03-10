import React from "react";

interface ListOfGoalsProps {
  goals: any[];
  editGoal(goal: object, index: number): void;
}

export const ListOfGoals: React.FC<ListOfGoalsProps> = ({
  goals,
  editGoal,
}) => {
  const handleGoalClick = (
    goal: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    editGoal(goal, index);
  };

  return (
    <>
      {goals.map((goal, index) => (
        <div key={index}>
          <div onClick={() => handleGoalClick(goal, index)}>
            {goal.goalDescription}
            {goal.goalNeededResources}
          </div>
        </div>
      ))}
    </>
  );
};
