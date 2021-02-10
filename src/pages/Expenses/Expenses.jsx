import React, { useState, useEffect } from "react";
import { withStyles, Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { uuid } from "uuidv4";
import { Styles } from "./styles";
import Header from "../../components/Header";
import ExpenseCard from "../../components/ExpenseCard";
import {
  toggleAddExpense,
  addExpenseData,
  editExpenseData,
  clearState,
} from "../../store/Expense/action";
import AddExpense from "../../components/AddExpense";

const Expenses = ({
  classes,
  expenses,
  toggleAddExpense,
  isAddExpenseOpen,
  addExpenseData,
  selectedExpense,
  editExpenseData,
  clearState,
}) => {
  const [Expense, setExpense] = useState({
    spent: "",
    spentOn: "",
    refID: "",
    category: "",
    paymentMode: "",
  });
  const [IsSubmitted, setIsSubmitted] = useState(false);

  //To handle the changes occuring in the form fields
  const handleChange = (e) => {
    setExpense({ ...Expense, [e.target.name]: e.target.value });
  };

  //To handle the submitted form data
  const handleSubmit = () => {
    let expenses = Object.values(Expense);
    if (expenses.every((expense) => expense)) {
      if (selectedExpense) {
        let data = {
          id: selectedExpense.id,
          ...Expense,
        };
        editExpenseData(data);
      } else {
        let data = {
          id: uuid(),
          ...Expense,
        };
        addExpenseData(data);
      }
      toggleAddExpense();
    }
    setIsSubmitted(true);
  };

  //To update the state with selected expense data
  useEffect(() => {
    if (selectedExpense) {
      setExpense(selectedExpense);
    }
  }, [selectedExpense]);

  //To reset the state with default empty data
  useEffect(() => {
    if (!isAddExpenseOpen) {
      setExpense({
        spent: "",
        spentOn: new Date(),
        refID: "",
        category: "",
        paymentMode: "",
      });
      clearState();
      setIsSubmitted(false);
    }
  }, [isAddExpenseOpen]);

  //To filter expenses based on date
  let filteresExpenses =
    expenses &&
    expenses.sort((a, b) => new Date(a.spentOn) - new Date(b.spentOn));
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div className={classes.detailFlex}>
          <Typography variant="h4" className={classes.title}>
            Expenses List
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleAddExpense}
          >
            Add Expense
          </Button>
        </div>
        <div>
          <Grid container>
            {filteresExpenses &&
              filteresExpenses.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} />
              ))}
          </Grid>
        </div>
      </div>
      <AddExpense
        open={isAddExpenseOpen}
        onToggle={toggleAddExpense}
        handleChange={handleChange}
        expense={Expense}
        handleSubmit={handleSubmit}
        isSubmitted={IsSubmitted}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expense.Expenses,
  isAddExpenseOpen: state.expense.IsAddExpenseOpen,
  selectedExpense: state.expense.SelectedExpense,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAddExpense: () => dispatch(toggleAddExpense()),
  addExpenseData: (data) => dispatch(addExpenseData(data)),
  editExpenseData: (data) => dispatch(editExpenseData(data)),
  clearState: () => dispatch(clearState()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(Expenses));
