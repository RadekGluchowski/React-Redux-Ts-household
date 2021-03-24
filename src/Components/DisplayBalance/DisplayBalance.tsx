import { useSelector } from "react-redux";
import { Budget } from "../../interfaces/budget.interface";
import { AppState } from "../../Store/Reducers/root-reducer";
import { selectBudget } from "../../Store/Selectors/Selectors";

function DisplayBalance() {
  const resources = useSelector<AppState, Budget["resources"]>(selectBudget);

  return (
    <div>
      <span>Balans: {resources}</span>
    </div>
  );
}

export default DisplayBalance;
