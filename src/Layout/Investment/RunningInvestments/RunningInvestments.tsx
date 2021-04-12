import { useDispatch, useSelector } from "react-redux";
import { doneInvestment } from "../../../Store/Actions/InvestmentActions/investment.actions";
import { AppState } from "../../../Store/Reducers/root-reducer";
import Countdown from "react-countdown";
import { useCallback } from "react";
import { addToBudget } from "../../../Store/Actions/BudgetActions/budget.actions";
import { selectInvestment } from "../../../Store/Selectors/Selectors";
import { InvestmentInterface } from "../../../interfaces/investment.interface";
import {
  TYPE_OF_INVESTMENTS,
  RUNNING_INVESTMENT,
  ZERO,
  INVESTMENT_TYPE,
} from "../Assets/constants";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './RunningInvestments.css';

export const RunningInvestments = () => {
  const investment = useSelector<AppState, InvestmentInterface>(selectInvestment);

  const dispatch = useDispatch();

  const convertTypeOfInvestmentToTimeInMs = (
    typeOfInvestment: string | undefined
  ) => {
    switch (typeOfInvestment) {
      case TYPE_OF_INVESTMENTS.LONG_TERM:
        return RUNNING_INVESTMENT.LONG_TERM_TIME_IN_MS;
      case TYPE_OF_INVESTMENTS.MEDIUM_TERM:
        return RUNNING_INVESTMENT.MEDIUM_TERM_TIME_IN_MS;
      default:
        return RUNNING_INVESTMENT.SHORT_TERM_TIME_IN_MS;
    }
  };

  const countIncomeAfterInvestment = (investment: InvestmentInterface) => {
    switch (investment.typeOfInvestment) {
      case TYPE_OF_INVESTMENTS.LONG_TERM:
        return (
          investment.investmentAmount + (7 / 100) * investment.investmentAmount
        );
      case TYPE_OF_INVESTMENTS.MEDIUM_TERM:
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

  const handleOnComplete = useCallback(
    (investmentToRun: InvestmentInterface) => {
      dispatch(addToBudget(countIncomeAfterInvestment(investmentToRun)));
      dispatch(doneInvestment(investmentToRun));
    },
    [dispatch]
  );

  const rendererCountDown = useCallback(
    ({ seconds, completed }) => {
      if (completed) {
        return null
      } else {
        return <div className="circle-bar-container">
          <div className="circle-progress-bar">
            <CircularProgressbar value={seconds} maxValue={convertTypeOfInvestmentToTimeInMs(investment.typeOfInvestment) / 1000} text={seconds} />
          </div>
        </div>
      }
    }, [investment.typeOfInvestment]);

  return (
    <div>
      {investment.typeOfInvestment ? (
        <div className="running-investment-container">
          <div>
            {INVESTMENT_TYPE} {investment.typeOfInvestment.toUpperCase()}
          </div>
          <Countdown
            date={
              Date.now() +
              convertTypeOfInvestmentToTimeInMs(investment.typeOfInvestment)
            }
            renderer={rendererCountDown}
            // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
            onComplete={() => handleOnComplete(investment)}
          />
          <div>
            {RUNNING_INVESTMENT.INVESTED_TEXT}:   {investment.investmentAmount}
          </div>
        </div>
      ) : null}

    </div>
  );
};
