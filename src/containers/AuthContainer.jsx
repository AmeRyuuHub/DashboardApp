import React from 'react';
import { connect } from 'react-redux';
import { getAuthFetching, getAuthStatus} from '../store/selectors/contentSelectors';
import logo from '../pics/logo-main.svg'
import {Redirect} from 'react-router-dom'
import { getAuthLogin } from '../store/redusers/auth/Auth';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box } from '@material-ui/core';
import { MainLinearProgress } from '../common/ProgressLines';
import LoginForm from '../components/Auth/LoginForm';
import { Copyright } from '../common/Copyright';


const useStyles = makeStyles(theme => ({
    
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      
    },
   
  }));


const AuthContainer = (props) => {
    const classes = useStyles();
    const {isFetching, loginStatus} = props;
    if (loginStatus) {return <Redirect to="/"/>} 
    const handleSubmitForm =({login,password})=> (props.getAuthLogin(login,password));
   let appMinHeight = {minHeight:'85vh'};
    return (
        <div style={appMinHeight}>
        {isFetching && <MainLinearProgress />}
      <Container component="main" maxWidth="xs">
      
      <div className={classes.paper}>
        
          <img src={logo} alt="" className={classes.avatar}/>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm onSubmit={handleSubmitForm}/>
        <Box mt={8}>
        <Copyright />
      </Box>
      </div>
    </Container>
    </div>
    )
  
};

function mapStateToProps(state) {
  return {
    isFetching: getAuthFetching(state),
    loginStatus:getAuthStatus(state),
  };
}

export default connect(mapStateToProps, { getAuthLogin })(AuthContainer);






