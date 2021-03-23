import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { rootReducer } from './Reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);
