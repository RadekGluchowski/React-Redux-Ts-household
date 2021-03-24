import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputWithButton } from "../../Components/Inputs/InputWithButton";
import { Budget } from "../../interfaces/budget.interface";
import {
  addToBudget,
  subtractFromBudget,
} from "../../Store/Actions/BudgetActions/budget.actions";
import { AppState } from "../../Store/Reducers/root-reducer";
import { selectBudget } from "../../Store/Selectors/Selectors";

function Dashboard() {
  const resources = useSelector<AppState, Budget["resources"]>(selectBudget);

  const dispatch = useDispatch();

  const onAddToBudget = useCallback(
    (inputValue) => {
      dispatch(addToBudget(Number(inputValue)));
    },
    [dispatch]
  );

  const onSubtractFromBudget = useCallback(
    (inputValue: number) => {
      const resourcesToSubtract = Number(inputValue);

      if (resourcesToSubtract < resources) {
        dispatch(subtractFromBudget(Number(resourcesToSubtract)));
      } else {
        alert("You don't have enought resources to spend!!");
      }
    },
    [dispatch, resources]
  );

  return (
    <div>
      <InputWithButton
        onButtonClick={onAddToBudget}
        buttonText="Add Resources"
        inputName="addResources"
        inputType="number"
        inputPlaceHolder="1504..."
      />
      <InputWithButton
        onButtonClick={onSubtractFromBudget}
        buttonText="Subtract Resources"
        inputName="subtractResources"
        inputType="number"
        inputPlaceHolder="150..."
      />
    </div>
  );
}

export default Dashboard;
