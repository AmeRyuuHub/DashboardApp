
import React from 'react';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from '../../common/Copyright';


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color:theme.palette.getContrastText(theme.palette.primary.main),
    padding: theme.spacing(2)
  }
}));


const Footer = () => {
  const classes = useStyles();
  return (
    

 
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </footer>
      
    
  );
}

export default Footer;