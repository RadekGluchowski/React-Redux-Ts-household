import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputsWithButton } from "../../Components/Inputs/InputsWithButton";
import { addToBudget } from "../../Store/Actions/budget.actions";
import { BudgetState } from "../../Store/Reducers/budget.reducer";

function Dashboard() {
  const resources = useSelector<BudgetState, BudgetState["resources"]>(
    (state) => state.resources
  );

  const dispatch = useDispatch();
  const onAddToBudget = (resources: number) => {
    dispatch(addToBudget(resources));
  };
  return (
    <div>
      <InputsWithButton
        onButtonClick={onAddToBudget}
        buttonText="Add Resources"
        inputName="resources"
        inputType="number"
        inputPlaceHolder="...1504"
      />
      <pre>{resources}</pre>
    </div>
  );
}

export default Dashboard;
