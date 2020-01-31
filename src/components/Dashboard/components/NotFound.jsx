import React from "react";
import { Box, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({


  errorImg: {
    marginTop: "15vh",
    width: "30%",
    opacity: 0.7,
    minWidth: "10rem",
    marginBottom: "1rem"
  }
}));

const NotFound = React.memo(props => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <img
        src="/svg/bug_fixing.svg"
        alt="Failed"
        className={classes.errorImg}
      />
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Data not found.
      </Typography>
      <Button variant="contained" color="primary">
        {" "}
        Retry
      </Button>
    </Box>
  );
});

export default NotFound;
