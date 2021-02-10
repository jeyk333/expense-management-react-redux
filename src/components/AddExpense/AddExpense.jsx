import React from "react";
import {
  withStyles,
  Dialog,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import { Styles } from "./styles";
import moment from "moment";

const AddExpense = ({
  classes,
  open,
  onToggle,
  expense,
  handleChange,
  handleSubmit,
  isSubmitted,
}) => {
  let today = moment().format("YYYY-MM-DD");
  return (
    <Dialog
      open={open}
      onClose={onToggle}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className={classes.root}
    >
      <form className={classes.form}>
        <Typography align="center" variant="h4" className={classes.formTitle}>
          Add Expense
        </Typography>
        <TextField
          name="spent"
          onChange={handleChange}
          value={expense.spent}
          type="number"
          variant="outlined"
          placeholder="Spent"
          className={classes.field}
          fullWidth
          error={isSubmitted && !expense.spent}
          helperText={
            isSubmitted && !expense.spent && "Spent value is required"
          }
        />
        <TextField
          name="spentOn"
          onChange={handleChange}
          defaultValue={today}
          type="date"
          variant="outlined"
          label="Spent On"
          className={classes.field}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          error={isSubmitted && !expense.spentOn}
          helperText={
            isSubmitted && !expense.spentOn && "Spent On value is required"
          }
        />
        <TextField
          name="refID"
          onChange={handleChange}
          value={expense.refID}
          variant="outlined"
          placeholder="Reference ID"
          className={classes.field}
          fullWidth
          error={isSubmitted && !expense.refID}
          helperText={
            isSubmitted && !expense.refID && "Reference ID is required"
          }
        />
        <TextField
          name="category"
          onChange={handleChange}
          value={expense.category}
          variant="outlined"
          placeholder="Category"
          className={classes.field}
          fullWidth
          error={isSubmitted && !expense.category}
          helperText={
            isSubmitted && !expense.category && "Category value is required"
          }
        />
        <TextField
          name="paymentMode"
          onChange={handleChange}
          value={expense.paymentMode}
          variant="outlined"
          placeholder="Payment Mode"
          className={classes.field}
          fullWidth
          error={isSubmitted && !expense.paymentMode}
          helperText={
            isSubmitted &&
            !expense.paymentMode &&
            "Payment Mode value is required"
          }
        />
        <Button onClick={onToggle}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Dialog>
  );
};

export default withStyles(Styles)(AddExpense);
