import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { subtractFromBudget } from "../../../Store/Actions/BudgetActions/budget.actions";
import { doneGoal } from "../../../Store/Actions/GoalsActions/goals.actions";
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

  const handleClosePopup = () => {
    setGoalToEdit(undefined);
  };

  const handleDoneGoal = () => {
    if (resources > goalToEdit.goal.goalNeededResources) {
      dispatch(doneGoal(goalToEdit));
      dispatch(subtractFromBudget(goalToEdit.goal.goalNeededResources));
      setGoalToEdit(undefined);
    } else {
      alert("You don't have money for this operation!");
    }
  };

  return (
    <>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleClosePopup}
          contentLabel="Edit Goal"
        >
          <button onClick={handleClosePopup}>close</button>
          {typeof goalToEdit !== "undefined" ? (
            <DisplayGoals
              goalDescription={goalToEdit.goal.goalDescription}
              goalNeededResources={goalToEdit.goal.goalNeededResources}
            />
          ) : null}
          <button onClick={handleDoneGoal}> Done Goal </button>
        </Modal>
      </div>
    </>
  );
};
