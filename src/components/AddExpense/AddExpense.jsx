import React from "react";
import {
  withStyles,
  Dialog,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import { Styles } from "./styles";

const AddExpense = ({
  classes,
  open,
  onToggle,
  expense,
  handleChange,
  handleSubmit,
}) => {
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
        />
        <TextField
          name="spentOn"
          onChange={handleChange}
          value={expense.spentOn}
          type="date"
          variant="outlined"
          label="Spent On"
          className={classes.field}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="refID"
          onChange={handleChange}
          value={expense.refID}
          variant="outlined"
          placeholder="Reference ID"
          className={classes.field}
          fullWidth
        />
        <TextField
          name="category"
          onChange={handleChange}
          value={expense.category}
          variant="outlined"
          placeholder="Category"
          className={classes.field}
          fullWidth
        />
        <TextField
          name="paymentMode"
          onChange={handleChange}
          value={expense.paymentMode}
          variant="outlined"
          placeholder="Payment Mode"
          className={classes.field}
          fullWidth
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
