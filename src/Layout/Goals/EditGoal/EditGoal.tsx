import React, { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { InputWithButton } from "../../../Components/Inputs/InputWithButton";
import { subtractFromBudget } from "../../../Store/Actions/BudgetActions/budget.actions";
import {
  chargeGoal,
  doneGoal,
} from "../../../Store/Actions/GoalsActions/goals.actions";
import { BudgetState } from "../../../Store/Reducers/BudgetReducer/budget.reducer";
import { AppState } from "../../../Store/Reducers/root-reducer";
import { DisplayGoals } from "../DisplayGoals/DisplayGoals";

interface EditGoalProps {
  goalToEdit: any;
  setGoalToEdit(goalToEdit: undefined): void;
}

export const EditGoal: React.FC<EditGoalProps> = ({
  goalToEdit,
  setGoalToEdit,
}) => {
  const resources = useSelector<AppState, BudgetState["resources"]>(
    (state) => state.budgetReducer.resources
  );
  const [isModalOpen, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    typeof goalToEdit !== "undefined" ? setModal(true) : setModal(false);
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
      alert("You don't have money for this operation!");
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
        alert("You don't have money for this operation!");
      }
    },
    [dispatch, goalToEdit, handleDoneGoal, resources, setGoalToEdit]
  );

  return (
    <>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleClosePopup}
          contentLabel="Edit Goal"
        >
          {typeof goalToEdit !== "undefined" ? (
            <DisplayGoals
              goalDescription={goalToEdit.goal.goalDescription}
              goalNeededResources={goalToEdit.goal.goalNeededResources}
            />
          ) : null}
          <button onClick={handleDoneGoal}> Done Goal </button>
          <InputWithButton
            onButtonClick={handleChargeGoal}
            buttonText={"Spend on goal"}
            inputType={"number"}
            inputPlaceHolder={"150"}
            inputName={"Spend on goal"}
          />
          <button onClick={handleClosePopup}>close</button>
        </Modal>
      </div>
    </>
  );
};
