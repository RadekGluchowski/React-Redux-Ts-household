
import { combineReducers } from 'redux';
import { budgetReducer } from './BudgetReducer/budget.reducer';
import { goalReducer } from './GoalsReducer/goals.reducer';
import { investmentReducer } from './InvestmentReducer/investment.reducer';

export const rootReducer = combineReducers({
    budget: budgetReducer,
    goals: goalReducer,
    investment: investmentReducer
});

export type AppState = ReturnType<typeof rootReducer>;