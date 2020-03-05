import React from "react";
import { Button, Grid, Typography, Container, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  secondDiv: {
    backgroundColor: theme.palette.background.paper
  },
  divImg: {
    width: "100%",
    maxWidth: "400px"
  }
}));

const OtherBlock = props => {
  const {
    firstTitle,
    secondTitle,
    textButton,
    imgUrl,
    buttonLink,
    count
  } = props;
  const classes = useStyles();
  let minHeight = { minHeight: "50vh" };

  return (
    <div className={count & 1 ? classes.secondDiv : null}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          style={minHeight}
          direction={count & 1 ? "row-reverse" : "row"}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} align="center">
            <Slide direction="up" in={true}>
              <img src={imgUrl} alt={firstTitle} className={classes.divImg} />
            </Slide>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="h3" paragraph gutterBottom>
              {firstTitle}
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              paragraph
              gutterBottom
            >
              {secondTitle}
            </Typography>
            <Box m={3}>
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to={buttonLink}
              >
                {textButton}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OtherBlock;
