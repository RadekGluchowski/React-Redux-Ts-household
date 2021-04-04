import React, {useCallback, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { InputWithButton } from "../../Components/Inputs/InputWithButton/InputWithButton";
import { Budget } from "../../interfaces/budget.interface";
import {
    addToBudget,
    subtractFromBudget,
} from "../../Store/Actions/BudgetActions/budget.actions";
import {AppState} from "../../Store/Reducers/root-reducer";
import {selectBudget} from "../../Store/Selectors/Selectors";
import * as constants from "./Assets/constants";
import {NO_RESOURCES_ALERT_MSG} from "../../Assets/globalConstants";
import {RunningInvestments} from "../Investment/RunningInvestments/RunningInvestments";
import './Dashboard.css'
import {ModalPopup} from "../../Components/Popup/ModalPopup";
import {smallPopup} from "../../Components/Popup/DefaultPopupStyles/DefaultPopupStyles";

function Dashboard() {
    const resources = useSelector<AppState, Budget["resources"]>(selectBudget);
    const [isModalOpen, setModal] = useState(false);
    const dispatch = useDispatch();

    const onAddToBudget = useCallback(
        (inputValue) => {
            dispatch(addToBudget(Number(inputValue)));
        },
    [dispatch]
  );

  const onSubtractFromBudget = useCallback(
    (inputValue: number) => {
      const resourcesToSubtract = Number(inputValue);

        if (resourcesToSubtract < resources) {
            dispatch(subtractFromBudget(Number(resourcesToSubtract)));
        } else {
            alert(NO_RESOURCES_ALERT_MSG);
        }
    },
      [dispatch, resources]
  );

    const handleClosePopup = useCallback(() => {
        setModal(false)
    }, []);

    const handleOpenPopup = useCallback(() => {
        setModal(true)
    }, [])

    const {ADD_BUTTON, SUBTRACT_BUTTON} = constants.DASHBOARD_BUTTONS;

    return (
        <div className="dashboard-container">
            <div className="operations-btn">
                <button onClick={handleOpenPopup}> {constants.OPERATIONS} </button>
            </div>
            <ModalPopup
                isModalOpen={isModalOpen}
                handleClosePopup={handleClosePopup}
                contentLabel={constants.MODAL_ADD_LABEL}
                customStyles={smallPopup}
            >
                <InputWithButton
                    onButtonClick={onAddToBudget}
                    buttonText={ADD_BUTTON.BUTTON_TEXT}
                    inputName={ADD_BUTTON.INPUT_NAME}
                    inputType={ADD_BUTTON.INPUT_TYPE}
                    inputPlaceHolder={ADD_BUTTON.INPUT_PLACEHOLDER}
                />
                <InputWithButton
                    onButtonClick={onSubtractFromBudget}
                    buttonText={SUBTRACT_BUTTON.BUTTON_TEXT}
                    inputName={SUBTRACT_BUTTON.INPUT_NAME}
                    inputType={SUBTRACT_BUTTON.INPUT_TYPE}
                    inputPlaceHolder={SUBTRACT_BUTTON.INPUT_PLACEHOLDER}
                />
            </ModalPopup>
            <RunningInvestments/>
        </div>
  );
}

export default Dashboard;