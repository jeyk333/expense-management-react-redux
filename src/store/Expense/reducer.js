import { GET_EXPENSES } from "./types";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //   case GET_EXPENSES:
    //     return {
    //       ...state,
    //       Expenses: true,
    //     };

    default:
      return state;
  }
};

export default reducer;
