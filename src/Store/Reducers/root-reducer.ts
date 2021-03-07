
import { combineReducers } from 'redux';
import { budgetReducer } from './BudgetReducer/budget.reducer';
import { goalReducer } from './GoalsReducer/goals.reducer';


export const rootReducer = combineReducers({
    budgetReducer,
    goalReducer
});

export type AppState = ReturnType<typeof rootReducer>;
