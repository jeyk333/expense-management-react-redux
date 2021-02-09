import { types } from "./types";

export const deleteExpense = (data) => ({
  type: types.DELETE_EXPENSE,
  data,
});

export const toggleAddExpense = () => ({
  type: types.TOGGLE_ADD_EXPENSE,
});

export const addExpenseData = (data) => ({
  type: types.ADD_EXPENSE,
  data,
});

export const selectedExpense = (data) => ({
  type: types.SELECTED_EXPENSE_TO_DELETE,
  data,
});
