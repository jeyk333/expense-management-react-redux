import React from "react";
import { withStyles, Typography, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { Styles } from "./styles";
import Header from "../../components/Header";
import ExpenseCard from "../../components/ExpenseCard";

const ITEMS = [
  {
    id: 0,
    date: "01-11-1992",
    bill_reference: "322323232",
    category: "food",
    amount: "50",
    payment_mode: "paytm",
  },
  {
    id: 1,
    date: "01-11-1992",
    bill_reference: "322323232",
    category: "food",
    amount: "50",
    payment_mode: "paytm",
  },
  {
    id: 2,
    date: "01-11-1992",
    bill_reference: "322323232",
    category: "food",
    amount: "50",
    payment_mode: "paytm",
  },
  {
    id: 3,
    date: "01-11-1992",
    bill_reference: "322323232",
    category: "food",
    amount: "50",
    payment_mode: "paytm",
  },
];

const Expenses = ({ classes }) => {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Typography variant="h4">Expenses List</Typography>
        <div>
          {" "}
          <Grid container>
            {ITEMS &&
              ITEMS.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} />
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(Expenses));
