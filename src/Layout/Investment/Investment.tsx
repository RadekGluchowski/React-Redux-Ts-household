import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subtractFromBudget } from "../../Store/Actions/BudgetActions/budget.actions";
import { addInvestment } from "../../Store/Actions/InvestmentActions/investment.actions";
import { BudgetState } from "../../Store/Reducers/BudgetReducer/budget.reducer";
import { AppState } from "../../Store/Reducers/root-reducer";
import { CreateInvestmentForm } from "./Form/CreateInvestmentForm";

function Investment() {
  const resources = useSelector<AppState, BudgetState["resources"]>(
    (state) => state.budgetReducer.resources
  );

  const dispatch = useDispatch();

  const runInvestment = useCallback(
    (investment) => {
      if (resources >= investment.values.investmentAmount) {
        dispatch(addInvestment(investment));
        dispatch(subtractFromBudget(investment.values.investmentAmount));
      } else {
        alert("You don't have money for this operation!");
      }
    },
    [dispatch, resources]
  );

  return (
    <div>
      <CreateInvestmentForm runInvestment={runInvestment} />
    </div>
  );
}

export default Investment;
