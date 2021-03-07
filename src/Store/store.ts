import { budgetReducer } from './Reducers/budget.reducer';
import { createStore } from 'redux';

export const store = createStore(budgetReducer)