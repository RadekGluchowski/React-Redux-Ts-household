import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { DisplayGoals } from "../DisplayGoals/DisplayGoals";

interface EditGoalProps {
  goalToEdit: any;
  setGoalToEdit(goalToEdit: undefined): void;
}

export const EditGoal: React.FC<EditGoalProps> = ({
  goalToEdit,
  setGoalToEdit,
}) => {
  const [isModalOpen, setModal] = useState(false);

  useEffect(() => {
    typeof goalToEdit !== "undefined" ? setModal(true) : setModal(false);
  }, [goalToEdit]);

  return (
    <>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setGoalToEdit(undefined)}
          contentLabel="Edit Goal"
        >
          <button onClick={() => setGoalToEdit(undefined)}>close</button>
          {typeof goalToEdit !== "undefined" ? (
            <DisplayGoals
              goalDescription={goalToEdit.goal.goalDescription}
              goalNeededResources={goalToEdit.goal.goalNeededResources}
            />
          ) : null}
        </Modal>
      </div>
    </>
  );
};
