import { types } from "./types";
import { initialState } from "./initialState";
import { uniqBy } from "lodash";

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
        Expenses: uniqBy([action.data, ...state.Expenses], "id"),
      };

    case types.SELECTED_EXPENSE_TO_DELETE:
      return {
        ...state,
        SelectedExpense: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
