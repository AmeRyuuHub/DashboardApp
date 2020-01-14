import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "250px"
    }
  }
}));

 const withMainDiv = Component => {
  const MainDiv = props => {
    const classes = useStyles();
    return (
      <main className={classes.root}>
        <Component {...props} />
      </main>
    );
  };

  return MainDiv;
};
export default withMainDiv;