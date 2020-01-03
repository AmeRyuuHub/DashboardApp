
import React from 'react';
import { Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form'
import { checkRequired, maxLengthCheck } from '../../common/ReduxValidators';
import { renderTextField } from '../../common/ReduxFields/ReduxFieldComponent';


const maxLength30 = maxLengthCheck(30);


const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const LoginForm =(props) =>{
  const classes = useStyles();
  const { handleSubmit, pristine, submitting, error, valid } = props;


  



  return (    
    <> 
    
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Typography variant="body2" color="error" align="center">{error}</Typography>
        <Field
                        fullWidth
                        name="login"
                        component={renderTextField}
                        label="Login"
                        validate={[checkRequired, maxLength30]}
                        margin="normal"
                        autoComplete="username"
                        variant="outlined"
                       // normalize={[loginCheck]}
                        autoFocus={true}
                       
                      />
          <Field
                        fullWidth
                        name="password"
                        margin="normal"
                        component={renderTextField}
                        label="Password"
                        validate={[checkRequired,maxLength30]}
                        type="password"
                        autoComplete="current-password"
                        autoFocus={false}
                        variant="outlined"
                       
                        // autoComplete="current-password"
                      />
          
          {/* <Field
                        name="rememberMe"
                        component={renderCheckBoxField}
                        label="Remember Me"
                        
                        
                       
                        
                      /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={pristine|| submitting || error !== undefined || !valid}
          >
            Sign In
          </Button>
          
        </form>
    </>
  );
}




export default reduxForm({
    form: "authForm", 
    
  })(LoginForm);

