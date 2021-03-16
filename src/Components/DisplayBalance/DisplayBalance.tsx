import { useSelector } from "react-redux";
import { BudgetState } from "../../Store/Reducers/BudgetReducer/budget.reducer";
import { AppState } from "../../Store/Reducers/root-reducer";

function DisplayBalance() {
  const resources = useSelector<AppState, BudgetState["resources"]>(
    (state) => state.budgetReducer.resources
  );

  return (
    <div>
      <span>Balans: {resources}</span>
    </div>
  );
}

export default DisplayBalance;
