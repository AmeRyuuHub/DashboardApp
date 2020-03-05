
import React from 'react';
import {Button, Grid,Typography, Container} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    // minHeight: "50vh",
    backgroundImage: "url('/img/home/homeBackgroung.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center "
  },
  container: {
    minHeight: "70vh",
    color: "white"
  },
  img: {
    // minWidth: "100px",
    width: "100%"
  }
}));

const FirstBlock = ({
  firstTitle,
  secondTitle,
  titleButton,
  imgAlt,
  imgUrl,
  buttonLink
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center"   className={classes.container}>
          <Grid item container xs={12} sm={6} md={6} lg={6} direction="column" justify="space-between">
            <Typography variant="h3" paragraph gutterBottom>
              {firstTitle}
            </Typography>
            <Typography variant="h5" paragraph gutterBottom>
              {secondTitle}
            </Typography>
            <Box align="center" mt={3}>
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to={buttonLink}
              >
                {titleButton}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={imgUrl} alt={imgAlt} className={classes.img} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FirstBlock;