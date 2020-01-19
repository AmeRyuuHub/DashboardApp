import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router";

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
    const {location:{pathname}, match} = props;
    if (pathname !== match.url) {
    return <Redirect to={match.url} />
  }
    return (
      <main className={classes.root}>
        <Component {...props} />
      </main>
    );
  };

  return MainDiv;
};
export default withMainDiv;