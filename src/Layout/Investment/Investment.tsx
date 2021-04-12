import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Budget } from "../../interfaces/budget.interface";
import { subtractFromBudget } from "../../Store/Actions/BudgetActions/budget.actions";
import { addInvestment } from "../../Store/Actions/InvestmentActions/investment.actions";
import { AppState } from "../../Store/Reducers/root-reducer";
import { selectBudget } from "../../Store/Selectors/Selectors";
import { CreateInvestmentForm } from "./Form/CreateInvestmentForm";
import { NO_RESOURCES_ALERT_MSG } from "../../Assets/globalConstants";
import { ModalPopup } from "../../Components/Popup/ModalPopup";
import { smallPopup } from "../../Components/Popup/DefaultPopupStyles/DefaultPopupStyles";
import { ADD_INVESTMENT } from "./Assets/constants";
import { RunningInvestments } from './RunningInvestments/RunningInvestments';
import { selectInvestment } from "../../Store/Selectors/Selectors";
import { InvestmentInterface } from "../../interfaces/investment.interface";
import './Investment.css';

function Investment() {
  const resources = useSelector<AppState, Budget["resources"]>(selectBudget);
  const investment = useSelector<AppState, InvestmentInterface>(selectInvestment);
  const dispatch = useDispatch();
  const [isModalOpen, setModal] = useState<boolean>(false);

  const handleOpenPopup = useCallback(() => {
    setModal(true)
  }, [])
  const handleClosePopup = useCallback(() => {
    setModal(false)
  }, []);

  const runInvestment = useCallback(
    (investment) => {
      if (resources >= investment.investmentAmount) {
        dispatch(addInvestment(investment));
        dispatch(subtractFromBudget(investment.investmentAmount));
        handleClosePopup()
      } else {
        alert(NO_RESOURCES_ALERT_MSG);
      }
    },
    [dispatch, handleClosePopup, resources]
  );

  return (
    <div>
      <div className="add-investment-btn">
        <button disabled={!!investment.typeOfInvestment} onClick={handleOpenPopup}> {ADD_INVESTMENT} </button>
      </div>
      <ModalPopup
        isModalOpen={isModalOpen}
        handleClosePopup={handleClosePopup}
        contentLabel={ADD_INVESTMENT}
        customStyles={smallPopup}
      >
        <CreateInvestmentForm runInvestment={runInvestment} />
      </ModalPopup>
      <RunningInvestments />
    </div>
  );
}

export default Investment;
