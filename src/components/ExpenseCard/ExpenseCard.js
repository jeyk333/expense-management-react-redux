import React from "react";
import { withStyles, Grid, Card, Typography, Tooltip } from "@material-ui/core";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { connect } from "react-redux";
import { Styles } from "./styles";
import {
  deleteExpense,
  selectedExpense,
  toggleAddExpense,
} from "../../store/Expense/action";

const ExpenseCard = ({
  expense,
  classes,
  deleteExpense,
  selectedExpense,
  toggleAddExpense,
}) => {
  const { spent, spentOn, refID, category, paymentMode, id } = expense;
  const handleEdit = (data) => {
    toggleAddExpense();
    selectedExpense(data);
  };
  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card className={classes.card} elevation={2}>
        <div className={classes.icons}>
          <Tooltip title="Edit">
            <Edit onClick={() => handleEdit(expense)} />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteOutline onClick={() => deleteExpense(id)} />
          </Tooltip>
        </div>
        <Typography className={classes.detail}>
          Spent<span>₹{spent}</span>
        </Typography>
        <Typography className={classes.detail}>
          Spent On<span>{spentOn}</span>
        </Typography>
        <Typography className={classes.detail}>
          Reference ID<span>{refID}</span>
        </Typography>
        <Typography className={classes.detail}>
          Category<span>{category}</span>
        </Typography>
        <Typography className={classes.detail}>
          Payment Mode<span>{paymentMode}</span>
        </Typography>
      </Card>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expense.Expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpense(id)),
  selectedExpense: (data) => dispatch(selectedExpense(data)),
  toggleAddExpense: () => dispatch(toggleAddExpense()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(ExpenseCard));
