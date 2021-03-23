import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoal } from "../../Store/Actions/GoalsActions/goals.actions";
import { CreateGoalForm } from "./Form/CreateGoalForm";
import { AppState } from "../../Store/Reducers/root-reducer";
import { ListOfGoals } from "./List/ListOfGoals";
import { EditGoal } from "./EditGoal/EditGoal";
import { selectGoals } from "../../Store/Selectors/Selectors";
import { Goal } from "../../interfaces/goal.interface";

function Goals() {
  const goals = useSelector<AppState, Goal[]>(selectGoals);

  const [goalToEdit, setGoalToEdit] = useState<object>();
  const dispatch = useDispatch();

  const onSaveGoal = useCallback(
    (goal: object) => {
      dispatch(addGoal(goal));
    },
    [dispatch]
  );

  const handleEditGoal = useCallback((goal: object, index: number) => {
    setGoalToEdit({ index, goal });
  }, []);

  return (
    <div>
      <CreateGoalForm saveGoal={onSaveGoal} />
      <ListOfGoals goals={goals} editGoal={handleEditGoal} />
      <EditGoal goalToEdit={goalToEdit} setGoalToEdit={setGoalToEdit} />
    </div>
  );
}

export default Goals;
