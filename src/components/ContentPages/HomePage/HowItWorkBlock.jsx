import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  img: {
    width: "100%",
    maxWidth: "400px"
  },
  steps: {
    width: "220px"
  },

  gridContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const HowItWorksBlock = ({
  firstTitle,
  secondTitle,
  steps,
  minHeight,
  imgUrl
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box pt={4}>
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            paragraph
            gutterBottom
          >
            {firstTitle}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            gutterBottom
          >
            {secondTitle}
          </Typography>
        </Box>

        <Grid container direction="row" style={minHeight} spacing={2}>
          {steps &&
            steps.map((step, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  className={classes.gridContainer}
                  align="center"
                  key={step.name}
                >
                  <Typography
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    paragraph
                    gutterBottom
                  >
                    {step.name}
                  </Typography>
                  <Box align="center">
                    <img
                      src={imgUrl[index]}
                      alt={`step ${index}`}
                      className={classes.steps}
                    />
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      paragraph
                      gutterBottom
                    >
                      {step.value}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default HowItWorksBlock;
