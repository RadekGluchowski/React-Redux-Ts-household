import { useDispatch, useSelector } from "react-redux";
import { doneInvestment } from "../../../Store/Actions/InvestmentActions/investment.actions";
import { AppState } from "../../../Store/Reducers/root-reducer";
import Countdown from "react-countdown";
import { useCallback } from "react";
import { addToBudget } from "../../../Store/Actions/BudgetActions/budget.actions";
import { selectInvestment } from "../../../Store/Selectors/Selectors";
import { Investment } from "../../../interfaces/investment.interface";

export const RunningInvestments = () => {
  const investment = useSelector<AppState, Investment>(selectInvestment);

  const dispatch = useDispatch();

  const convertTypeOfInvestmentToTimeInMs = (
    typeOfInvestment: string | undefined
  ) => {
    switch (typeOfInvestment) {
      case "long term":
        return 60000;
      case "midium term":
        return 40000;
      default:
        return 20000;
    }
  };

  const countIncomeAfterInvestment = (investment: Investment) => {
    switch (investment.typeOfInvestment) {
      case "long term":
        return (
          investment.investmentAmount + (7 / 100) * investment.investmentAmount
        );
      case "midium term":
        return (
          investment.investmentAmount + (4 / 100) * investment.investmentAmount
        );
      case "short term":
        return (
          investment.investmentAmount + (2 / 100) * investment.investmentAmount
        );
      default:
        return 0;
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
            {investment.typeOfInvestment} Invested:{" "}
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
