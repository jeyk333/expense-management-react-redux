import React from "react";
import { withStyles, Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Styles } from "./styles";
import Header from "../../components/Header";
import ExpenseCard from "../../components/ExpenseCard";

const Expenses = ({ classes, expenses }) => {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div className={classes.detailFlex}>
          <Typography variant="h4" className={classes.title}>
            Expenses List
          </Typography>
          <Button variant="contained" color="primary">
            Add Expense
          </Button>
        </div>
        <div>
          <Grid container>
            {expenses &&
              expenses.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} />
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expense.Expenses,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(Expenses));
