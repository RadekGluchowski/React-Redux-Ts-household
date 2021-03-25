import { useDispatch, useSelector } from "react-redux";
import { doneInvestment } from "../../../Store/Actions/InvestmentActions/investment.actions";
import { AppState } from "../../../Store/Reducers/root-reducer";
import Countdown from "react-countdown";
import { useCallback } from "react";
import { addToBudget } from "../../../Store/Actions/BudgetActions/budget.actions";
import { selectInvestment } from "../../../Store/Selectors/Selectors";
import { Investment } from "../../../interfaces/investment.interface";
import {
  TYPE_OF_INVESTMENTS,
  RUNNING_INVESTMENT,
  ZERO,
} from "../Assets/constants";

export const RunningInvestments = () => {
  const investment = useSelector<AppState, Investment>(selectInvestment);

  const dispatch = useDispatch();

  const convertTypeOfInvestmentToTimeInMs = (
    typeOfInvestment: string | undefined
  ) => {
    switch (typeOfInvestment) {
      case TYPE_OF_INVESTMENTS.LONG_TERM:
        return RUNNING_INVESTMENT.LONG_TERM_TIME_IN_MS;
      case TYPE_OF_INVESTMENTS.MIDIUM_TERM:
        return RUNNING_INVESTMENT.MIDIUM_TERM_TIME_IN_MS;
      default:
        return RUNNING_INVESTMENT.SHORT_TERM_TIME_IN_MS;
    }
  };

  const countIncomeAfterInvestment = (investment: Investment) => {
    switch (investment.typeOfInvestment) {
      case TYPE_OF_INVESTMENTS.LONG_TERM:
        return (
          investment.investmentAmount + (7 / 100) * investment.investmentAmount
        );
      case TYPE_OF_INVESTMENTS.MIDIUM_TERM:
        return (
          investment.investmentAmount + (4 / 100) * investment.investmentAmount
        );
      case TYPE_OF_INVESTMENTS.SHORT_TERM:
        return (
          investment.investmentAmount + (2 / 100) * investment.investmentAmount
        );
      default:
        return ZERO;
    }
  };

  const handleonComplete = useCallback(
    (investmentToRun: Investment) => {
      dispatch(addToBudget(countIncomeAfterInvestment(investmentToRun)));
      dispatch(doneInvestment(investmentToRun));
    },
    [dispatch]
  );

  return (
    <div>
      {investment.typeOfInvestment ? (
        <>
          <div>
            {investment.typeOfInvestment} {RUNNING_INVESTMENT.INVESTED_TEXT}:{" "}
            {investment.investmentAmount}
          </div>
          <Countdown
            date={
              Date.now() +
              convertTypeOfInvestmentToTimeInMs(investment.typeOfInvestment)
            }
            // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
            onComplete={() => handleonComplete(investment)}
          />
        </>
      ) : null}
    </div>
  );
};
