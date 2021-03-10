import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoalsState } from "../../Store/Reducers/GoalsReducer/goals.reducer";
import { addGoal } from "../../Store/Actions/GoalsActions/goals.actions";
import { CreateGoalForm } from "./Form/CreateGoalForm";
import { AppState } from "../../Store/Reducers/root-reducer";
import { ListOfGoals } from "./List/ListOfGoals";
import { EditGoal } from "./EditGoal/EditGoal";

function Goals() {
  const goals = useSelector<AppState, GoalsState["goals"]>(
    (state) => state.goalReducer.goals
  );

  const [goalToEdit, setGoalToEdit] = useState<object>();

  const dispatch = useDispatch();
  const onSaveGoal = (goal: object) => {
    dispatch(addGoal(goal));
  };

  const handleEditGoal = (goal: object, index: number) => {
    setGoalToEdit({ index, goal });
  };

  return (
    <div>
      <CreateGoalForm saveGoal={onSaveGoal} />
      <ListOfGoals goals={goals} editGoal={handleEditGoal} />
      <EditGoal goalToEdit={goalToEdit} setGoalToEdit={setGoalToEdit} />
    </div>
  );
}

export default Goals;
