import React from "react";
import { withStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Styles } from "./styles";

const Header = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h3" align="center">
          EXPENSES
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(Styles)(Header);
