import { useDispatch, useSelector } from "react-redux";
import { doneInvestment } from "../../../Store/Actions/InvestmentActions/investment.actions";
import { InvestmentState } from "../../../Store/Reducers/InvestmentReducer/investment.reducer";
import { AppState } from "../../../Store/Reducers/root-reducer";
import Countdown from "react-countdown";
import { useCallback } from "react";
import { addToBudget } from "../../../Store/Actions/BudgetActions/budget.actions";

interface InvestmentObject {
  id?: string;
  values?: any;
}

export const RunningInvestments = () => {
  const investments = useSelector<AppState, InvestmentState["investments"]>(
    (state) => state.investmentReducer.investments
  );
  const dispatch = useDispatch();

  const convertTypeOfInvestmentToTimeInMs = (typeOfInvestment: string) => {
    switch (typeOfInvestment) {
      case "long term":
        return 60000;
      case "midium term":
        return 40000;
      default:
        return 20000;
    }
  };

  const countIncomeAfterInvestment = (investment: any) => {
    switch (investment.values.typeOfInvestment) {
      case "long term":
        return (
          investment.values.investmentAmount +
          (7 / 100) * investment.values.investmentAmount
        );
      case "midium term":
        return (
          investment.values.investmentAmount +
          (4 / 100) * investment.values.investmentAmount
        );
      default:
        return (
          investment.values.investmentAmount +
          (2 / 100) * investment.values.investmentAmount
        );
    }
  };

  const handleonComplete = useCallback(
    (investmentToRun: object) => {
      dispatch(addToBudget(countIncomeAfterInvestment(investmentToRun)));
      dispatch(doneInvestment(investmentToRun));
    },
    [dispatch]
  );

  return (
    <div>
      {investments.map((investmentToRun: InvestmentObject) => (
        <div key={investmentToRun.id}>
          <div>
            {investmentToRun.values?.typeOfInvestment} Invested:{" "}
            {investmentToRun.values?.investmentAmount}
          </div>
          <Countdown
            date={
              Date.now() +
              convertTypeOfInvestmentToTimeInMs(
                investmentToRun.values?.typeOfInvestment
              )
            }
            // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
            onComplete={() => handleonComplete(investmentToRun)}
          />
        </div>
      ))}
    </div>
  );
};
