import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoal } from "../../Store/Actions/GoalsActions/goals.actions";
import { CreateGoalForm } from "./Form/CreateGoalForm";
import { AppState } from "../../Store/Reducers/root-reducer";
import { ListOfGoals } from "./List/ListOfGoals";
import { EditGoal } from "./EditGoal/EditGoal";
import { selectGoals } from "../../Store/Selectors/Selectors";
import { Goal } from "../../interfaces/goal.interface";
import { ADD_GOAL, MODAL_ADD_LABEL } from "./Assets/constants";
import { ModalPopup } from "../../Components/Popup/ModalPopup";
import { smallPopup } from "../../Components/Popup/DefaultPopupStyles/DefaultPopupStyles";
import './Goals.css';

function Goals() {
  const goals = useSelector<AppState, Goal[]>(selectGoals);

  const [goalToEdit, setGoalToEdit] = useState<object>();
  const [isModalOpen, setModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOpenPopup = useCallback(() => {
    setModal(true)
  }, [])
  const handleClosePopup = useCallback(() => {
    setModal(false)
  }, []);

  const onSaveGoal = useCallback(
    (goal: Goal) => {
      dispatch(addGoal(goal));
      handleClosePopup()
    },
    [dispatch, handleClosePopup]
  );

  const handleEditGoal = useCallback((goal: object, index: number) => {
    setGoalToEdit({ index, goal });
  }, []);

  return (
    <div>
      <div className="add-goal-btn">
        <button onClick={handleOpenPopup}> {ADD_GOAL} </button>
      </div>
      <ModalPopup
        isModalOpen={isModalOpen}
        handleClosePopup={handleClosePopup}
        contentLabel={MODAL_ADD_LABEL}
        customStyles={smallPopup}
      >
        <CreateGoalForm saveGoal={onSaveGoal} />
      </ModalPopup>
      <ListOfGoals goals={goals} editGoal={handleEditGoal} />
      <EditGoal goalToEdit={goalToEdit} setGoalToEdit={setGoalToEdit} />
    </div>
  );
}

export default Goals;
