import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputsWithButton } from "../../Components/Inputs/InputsWithButton";
import {
  addToBudget,
  subtractFromBudget,
} from "../../Store/Actions/budget.actions";
import { BudgetState } from "../../Store/Reducers/budget.reducer";

function Dashboard() {
  const resources = useSelector<BudgetState, BudgetState["resources"]>(
    (state) => state.resources
  );

  const dispatch = useDispatch();
  const onAddToBudget = (inputValue: number) => {
    dispatch(addToBudget(Number(inputValue)));
  };

  const onSubtractFromBudget = (inputValue: number) => {
    const resourcesToSubtract = Number(inputValue);

    if (resourcesToSubtract < resources) {
      dispatch(subtractFromBudget(Number(resourcesToSubtract)));
    } else {
      alert("You don't have enought resources to spend!!");
    }
  };

  return (
    <div>
      <InputsWithButton
        onButtonClick={onAddToBudget}
        buttonText="Add Resources"
        inputName="addResources"
        inputType="number"
        inputPlaceHolder="1504..."
      />
      <InputsWithButton
        onButtonClick={onSubtractFromBudget}
        buttonText="Subtract Resources"
        inputName="subtractResources"
        inputType="number"
        inputPlaceHolder="150..."
      />
      <pre>{resources}</pre>
    </div>
  );
}

export default Dashboard;
