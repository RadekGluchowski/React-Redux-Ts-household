import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoalsState } from "../../Store/Reducers/GoalsReducer/goals.reducer";
import { addGoal } from "../../Store/Actions/GoalsActions/goals.actions";
import { GoalsForm } from "../../Components/Forms/GoalsForm";

function Goals() {
  const test = useSelector<GoalsState, GoalsState["goals"]>(
    (state) => state.goals
  );

  const dispatch = useDispatch();
  const onSaveGoal = (goal: object) => {
    dispatch(addGoal(goal));
  };

  console.log(test);

  return (
    <div>
      <GoalsForm saveGoal={onSaveGoal} />
      <pre>{test}</pre>
    </div>
  );
}

export default Goals;
