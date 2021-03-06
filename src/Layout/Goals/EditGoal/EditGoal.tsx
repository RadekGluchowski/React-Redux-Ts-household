import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputWithButton } from "../../../Components/Inputs/InputWithButton/InputWithButton";
import { Budget } from "../../../interfaces/budget.interface";
import { subtractFromBudget } from "../../../Store/Actions/BudgetActions/budget.actions";
import {
  chargeGoal,
  doneGoal,
} from "../../../Store/Actions/GoalsActions/goals.actions";
import { AppState } from "../../../Store/Reducers/root-reducer";
import { selectBudget } from "../../../Store/Selectors/Selectors";
import { EDIT_GOAL } from "../Assets/constants";
import {
  NO_RESOURCES_ALERT_MSG,
  UNDEFINED_STRING,
} from "../../../Assets/globalConstants";
import { ModalPopup } from "../../../Components/Popup/ModalPopup";
import { smallPopup } from "../../../Components/Popup/DefaultPopupStyles/DefaultPopupStyles";
import './EditGoal.css';

interface EditGoalProps {
  goalToEdit: any;
  setGoalToEdit(goalToEdit: undefined): void;
}

export const EditGoal: React.FC<EditGoalProps> = ({
  goalToEdit,
  setGoalToEdit,
}) => {
  const resources = useSelector<AppState, Budget["resources"]>(selectBudget);
  const [isModalOpen, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    typeof goalToEdit !== UNDEFINED_STRING ? setModal(true) : setModal(false);
  }, [goalToEdit]);

  const handleClosePopup = useCallback(() => {
    setGoalToEdit(undefined);
  }, [setGoalToEdit]);

  const handleDoneGoal = useCallback(() => {
    if (resources > goalToEdit.goal.goalNeededResources) {
      dispatch(doneGoal(goalToEdit));
      dispatch(subtractFromBudget(goalToEdit.goal.goalNeededResources));
      setGoalToEdit(undefined);
    } else {
      alert(NO_RESOURCES_ALERT_MSG);
    }
  }, [dispatch, goalToEdit, resources, setGoalToEdit]);

  const handleChargeGoal = useCallback(
    (value) => {
      if (resources >= value) {
        if (goalToEdit.goal.goalNeededResources === Number(value)) {
          handleDoneGoal();
        } else {
          dispatch(subtractFromBudget(value));
          dispatch(chargeGoal(value, goalToEdit.index));
        }
        setGoalToEdit(undefined);
      } else {
        alert(NO_RESOURCES_ALERT_MSG);
      }
    },
    [dispatch, goalToEdit, handleDoneGoal, resources, setGoalToEdit]
  );

  return (
    <>
      <div>
        <ModalPopup
          isModalOpen={isModalOpen}
          handleClosePopup={handleClosePopup}
          contentLabel={EDIT_GOAL.MODAL_CONTENT_LABEL}
          customStyles={smallPopup}
        >
          <div className="edit-goal-container">
            <InputWithButton
              onButtonClick={handleChargeGoal}
              buttonText={EDIT_GOAL.CHARGE_BTN.BUTTON_TEXT}
              inputType={EDIT_GOAL.CHARGE_BTN.INPUT_TYPE}
              inputPlaceHolder={EDIT_GOAL.CHARGE_BTN.INPUT_PLACEHOLDER}
              inputName={EDIT_GOAL.CHARGE_BTN.INPUT_NAME}
            />
            <button className="edit-goal__done" onClick={handleDoneGoal}>{EDIT_GOAL.DONE_GOAL}</button>
          </div>
        </ModalPopup>
      </div>
    </>
  );
};
