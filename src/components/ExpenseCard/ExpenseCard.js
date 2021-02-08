import React from "react";
import { withStyles, Grid, Card, Typography } from "@material-ui/core";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { Styles } from "./styles";

const ExpenseCard = ({ expense, classes }) => {
  const { amount, date, billReference, category, paymentMode, id } = expense;
  return (
    <Grid item xs={3}>
      <Card className={classes.card} elevation={3}>
        <div className={classes.icons}>
          <Edit />
          <DeleteOutline />
        </div>
        <Typography className={classes.detail}>
          Spent<span>₹{amount}</span>
        </Typography>
        <Typography className={classes.detail}>
          Spent on<span>{date}</span>
        </Typography>
        <Typography className={classes.detail}>
          Reference ID<span>{billReference}</span>
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

export default withStyles(Styles)(ExpenseCard);
