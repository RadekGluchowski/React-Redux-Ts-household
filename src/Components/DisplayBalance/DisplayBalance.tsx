import { useSelector } from "react-redux";
import { Budget } from "../../interfaces/budget.interface";
import { AppState } from "../../Store/Reducers/root-reducer";
import {selectBudget} from "../../Store/Selectors/Selectors";
import React from "react";
import {BALANCE} from "./Assets/constants";

function DisplayBalance() {
  const resources = useSelector<AppState, Budget["resources"]>(selectBudget);

  return (
    <div>
        <span> {BALANCE} {resources}</span>
    </div>
  );
}

export default DisplayBalance;
