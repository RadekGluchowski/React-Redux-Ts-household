import { useSelector } from "react-redux";
import { Event, History } from "../../interfaces/history.interface";
import { AppState } from "../../Store/Reducers/root-reducer";
import { selectHistoryEvents } from "../../Store/Selectors/Selectors";
import {
  OPERATION_TIME_STRING,
  OPERATIONS_DICTIONARY,
  TYPES_OF_OPERATIONS,
  TYPES_OF_FIELDS,
  FIELDS_DICTIONARY,
  OPERATION,
  WITH_DATA
} from "./Assets/constants";
import "./HistoryScreen.css";

function HistoryScreen() {
  const historyEvents = useSelector<AppState, History["events"]>(
    selectHistoryEvents
  );

  const renderEvent = (event: Event) => {
    return (
      <>
        <div className="history__inner">
          <div className="history__preview">
            <h6>{OPERATION_TIME_STRING} </h6>
            <h2>{formatTime(event.time)}</h2>
          </div>
          <div className="history__info">
            <h6>{OPERATION}</h6>
            <h2>{checkOperation(event.type)} {event.type !== TYPES_OF_OPERATIONS.DONE_GOAL ? renderOperationPayload(event.payload) : null}</h2>
          </div>
        </div>
      </>
    );
  };

  const renderOperationPayload = (payload: any) => {
    return typeof payload === "object" ? renderAsObject(payload) : payload
  }

  const renderAsObject = (payload: any) => {
    const payloadKeys = Object.keys(payload);
    return <div> {WITH_DATA}
      {payloadKeys.map(key => {
        return <div>{renderWithCheckingFields(key, payload)} </div>
      })}
    </div>
  }

  const renderWithCheckingFields = (key: string, payload: any) => {
    return <div> {checkFieldKey(key)}: {payload[key]} </div>
  }

  const checkFieldKey = (key: string) => {
    switch (key) {
      case TYPES_OF_FIELDS.GOAL_NEEDED_RESOURCES:
        return FIELDS_DICTIONARY.GOAL_NEEDED_RESOURCES;
      case TYPES_OF_FIELDS.GOAL_DESCRITPION:
        return FIELDS_DICTIONARY.GOAL_DESCRITPION;
      case TYPES_OF_FIELDS.GOAL_EDIT_CHARGE:
        return FIELDS_DICTIONARY.GOAL_EDIT_CHARGE;
      case TYPES_OF_FIELDS.GOAL_EDIT_LINE:
        return FIELDS_DICTIONARY.GOAL_EDIT_LINE;
      case TYPES_OF_FIELDS.RESOURCES:
        return FIELDS_DICTIONARY.RESOURCES;
      case TYPES_OF_FIELDS.TYPE_OF_INVESTMENT:
        return FIELDS_DICTIONARY.TYPE_OF_INVESTMENT;
      case TYPES_OF_FIELDS.INVESTMENT_AMOUNT:
        return FIELDS_DICTIONARY.INVESTMENT_AMOUNT;
    }
  }

  const checkOperation = (typeOfOperation: string) => {
    switch (typeOfOperation) {
      case TYPES_OF_OPERATIONS.SUBTRACT_FROM_BUDGET:
        return OPERATIONS_DICTIONARY.SUBTRACT_FROM_BUDGET;
      case TYPES_OF_OPERATIONS.ADD_TO_BUDGET:
        return OPERATIONS_DICTIONARY.ADD_TO_BUDGET;
      case TYPES_OF_OPERATIONS.ADD_GOAL:
        return OPERATIONS_DICTIONARY.ADD_GOAL;
      case TYPES_OF_OPERATIONS.CHARGE_GOAL:
        return OPERATIONS_DICTIONARY.CHARGE_GOAL;
      case TYPES_OF_OPERATIONS.DONE_GOAL:
        return OPERATIONS_DICTIONARY.DONE_GOAL;
      case TYPES_OF_OPERATIONS.ADD_INVESTMENT:
        return OPERATIONS_DICTIONARY.ADD_INVESTMENT;
      case TYPES_OF_OPERATIONS.DONE_INVESTMENT:
        return OPERATIONS_DICTIONARY.DONE_INVESTMENT;
    }
  };

  const formatTime = (eventTime: Date) => {
    return `${new Date(eventTime).getFullYear()} - ${new Date(eventTime).getMonth() + 1
      } - ${new Date(eventTime).getDate()} ${new Date(
        eventTime
      ).getHours()}:${new Date(eventTime).getMinutes()}:${new Date(
        eventTime
      ).getSeconds()}`;
  };

  return (
    <>
      {historyEvents.length ? (
        <div className="history-container" >
          {historyEvents.map((event: Event, index) => (
            <div className="history__outer" key={index}>{renderEvent(event)}</div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default HistoryScreen;
