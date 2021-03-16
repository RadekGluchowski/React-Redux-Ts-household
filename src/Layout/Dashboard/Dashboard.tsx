import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputWithButton } from "../../Components/Inputs/InputWithButton";
import {
  addToBudget,
  subtractFromBudget,
} from "../../Store/Actions/BudgetActions/budget.actions";
import { BudgetState } from "../../Store/Reducers/BudgetReducer/budget.reducer";
import { AppState } from "../../Store/Reducers/root-reducer";

function Dashboard() {
  const resources = useSelector<AppState, BudgetState["resources"]>(
    (state) => state.budgetReducer.resources
  );

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
      <pre>{resources}</pre>
    </div>
  );
}

export default Dashboard;
