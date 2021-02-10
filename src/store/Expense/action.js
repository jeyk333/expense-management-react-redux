import { types } from "./types";

//To delete expense
export const deleteExpense = (data) => ({
  type: types.DELETE_EXPENSE,
  data,
});

//To toggle add expense form
export const toggleAddExpense = () => ({
  type: types.TOGGLE_ADD_EXPENSE,
});

//To add expense data
export const addExpenseData = (data) => ({
  type: types.ADD_EXPENSE,
  data,
});

//To edit expense data
export const editExpenseData = (data) => ({
  type: types.EDIT_EXPENSE,
  data,
});

//To store selected expense data
export const selectedExpense = (data) => ({
  type: types.SELECTED_EXPENSE_TO_DELETE,
  data,
});

//To reset the state
export const clearState = () => ({
  type: types.CLEAR_EXPENSE_STATE,
});
