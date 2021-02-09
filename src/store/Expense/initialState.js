export const initialState = {
  Expenses: [
    {
      id: 0,
      spentOn: "2020-11-01",
      refID: "#322323232",
      category: "Travel",
      spent: "50",
      paymentMode: "Paytm",
    },
    {
      id: 1,
      spentOn: "2020-12-01",
      refID: "#111222232",
      category: "Food",
      spent: "150",
      paymentMode: "Card",
    },
    {
      id: 2,
      spentOn: "2021-01-01",
      refID: "#33332344",
      category: "Cloths",
      spent: "110",
      paymentMode: "Cash",
    },
    {
      id: 3,
      spentOn: "2021-01-01",
      refID: "#555556666",
      category: "Footwear",
      spent: "100",
      paymentMode: "Card",
    },
  ],
  IsAddExpenseOpen: false,
  SelectedExpense: null,
};
