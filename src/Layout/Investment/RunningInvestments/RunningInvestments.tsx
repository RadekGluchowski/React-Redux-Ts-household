import { useDispatch, useSelector } from "react-redux";
import { doneInvestment } from "../../../Store/Actions/InvestmentActions/investment.actions";
import { InvestmentState } from "../../../Store/Reducers/InvestmentReducer/investment.reducer";
import { AppState } from "../../../Store/Reducers/root-reducer";
import Countdown from "react-countdown";
import { useCallback } from "react";

interface InvestmentObject {
  id?: string;
  values?: any;
}

export const RunningInvestments = () => {
  const investments = useSelector<AppState, InvestmentState["investments"]>(
    (state) => state.investmentReducer.investments
  );
  const dispatch = useDispatch();

  const checkTypeOfInvestment = (typeOfInvestment: string) => {
    switch (typeOfInvestment) {
      case "long term":
        return 6000;
      case "midium term":
        return 4000;
      default:
        return 2000;
    }
  };

  const handleonComplete = useCallback(
    (investmentToRun: object) => {
      dispatch(doneInvestment(investmentToRun));
    },
    [dispatch]
  );

  return (
    <div>
      {investments.map((investmentToRun: InvestmentObject) => (
        <div key={investmentToRun.id}>
          {investmentToRun.values?.typeOfInvestment}{" "}
          <Countdown
            date={
              Date.now() +
              checkTypeOfInvestment(investmentToRun.values?.typeOfInvestment)
            }
            // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
            onComplete={() => handleonComplete(investmentToRun)}
          />
        </div>
      ))}
    </div>
  );
};
