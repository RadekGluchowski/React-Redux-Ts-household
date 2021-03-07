import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoalsState } from "../../Store/Reducers/GoalsReducer/goals.reducer";
import { addGoal } from "../../Store/Actions/GoalsActions/goals.actions";
import { GoalsForm } from "../../Components/Forms/GoalsForm";
import { AppState } from "../../Store/Reducers/root-reducer";

function Goals() {
  const goals = useSelector<AppState, GoalsState["goals"]>(
    (state) => state.goalReducer.goals
  );

  const dispatch = useDispatch();
  const onSaveGoal = (goal: object) => {
    dispatch(addGoal(goal));
  };

  return (
    <div>
      <GoalsForm saveGoal={onSaveGoal} />
    </div>
  );
}

export default Goals;
