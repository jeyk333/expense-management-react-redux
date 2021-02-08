import React from "react";
import { withStyles, Grid, Card, Typography } from "@material-ui/core";
import { Styles } from "./styles";

const ExpenseCard = ({ expense, classes }) => {
  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
        <Typography>Spent - ₹{expense.amount}</Typography>
      </Card>
    </Grid>
  );
};

export default withStyles(Styles)(ExpenseCard);
