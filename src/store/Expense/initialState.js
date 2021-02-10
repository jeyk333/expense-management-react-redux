import { EXPENSES } from "../../constants";

//Defult redux state
export const initialState = {
  Expenses: EXPENSES,
  IsAddExpenseOpen: false,
  SelectedExpense: null,
};
