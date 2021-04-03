import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Budget } from "../../interfaces/budget.interface";
import { subtractFromBudget } from "../../Store/Actions/BudgetActions/budget.actions";
import { addInvestment } from "../../Store/Actions/InvestmentActions/investment.actions";
import { AppState } from "../../Store/Reducers/root-reducer";
import { selectBudget } from "../../Store/Selectors/Selectors";
import { CreateInvestmentForm } from "./Form/CreateInvestmentForm";
import { NO_RESOURCES_ALERT_MSG } from "../../Assets/globalConstants";

function Investment() {
  const resources = useSelector<AppState, Budget["resources"]>(selectBudget);

  const dispatch = useDispatch();

  const runInvestment = useCallback(
    (investment) => {
      if (resources >= investment.investmentAmount) {
        dispatch(addInvestment(investment));
        dispatch(subtractFromBudget(investment.investmentAmount));
      } else {
        alert(NO_RESOURCES_ALERT_MSG);
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
