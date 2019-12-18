
import React from 'react';
import {Button, Grid,Typography, Container, Slide} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {Link} from 'react-router-dom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({ 
  secondDiv:{
    backgroundColor: theme.palette.background.paper,
  },
  divImg: {
     width: "100%",
     maxWidth: '400px'
   },
  
}));


const OtherBlock = props => {
  const { block, imgUrl, link, count } = props;

  const trigger = useScrollTrigger({ 
    disableHysteresis: true,
  threshold: 500+count*100});
  const classes = useStyles();
  let minHeight = { minHeight: "50vh" };
  return (
    block && (

      <div
        
        key={block.firstTitle}
        className={count & 1 ? classes.secondDiv : null}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            style={minHeight}
            direction={count & 1 ? "row-reverse" : "row"}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} align="center">
            <Slide direction="up" in={trigger}>
            <img
                src={imgUrl}
                alt={block.firstTitle}
                className={classes.divImg}
              />
          
        </Slide>
              
              
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h3" paragraph gutterBottom>
                {block.firstTitle}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                paragraph
                gutterBottom
              >
                {block.secondTitle}
              </Typography>
              <Box m={3}>
                <Button
                  variant="outlined"
                  color="inherit"
                  component={Link}
                  to={link}
                >
                  {block.textButton}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  );
};


export default OtherBlock;