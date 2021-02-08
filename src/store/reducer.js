import { combineReducers } from "redux";
import expenseReducer from "./Expense";

const rootReducer = combineReducers({
  expense: expenseReducer,
});

export default rootReducer;
