import { types } from "./types";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_EXPENSE:
      return {
        ...state,
        Expenses: state.Expenses.filter(
          (expense) => expense.id !== action.data
        ),
      };

    case types.TOGGLE_ADD_EXPENSE:
      return {
        ...state,
        IsAddExpenseOpen: !state.IsAddExpenseOpen,
      };

    case types.ADD_EXPENSE:
      return {
        ...state,
        Expenses: [action.data, ...state.Expenses],
      };

    case types.EDIT_EXPENSE:
      let expenses;
      if (state.Expenses.some((expense) => expense.id === action.data.id)) {
        let data = state.Expenses.filter(
          (expense) => expense.id !== action.data.id
        );
        expenses = [action.data, ...data];
      }
      return {
        ...state,
        Expenses: expenses,
      };

    case types.SELECTED_EXPENSE_TO_DELETE:
      return {
        ...state,
        SelectedExpense: action.data,
      };

    case types.CLEAR_EXPENSE_STATE:
      return {
        ...state,
        SelectedExpense: null,
      };

    default:
      return state;
  }
};

export default reducer;
