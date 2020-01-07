
import React from 'react';
import { Button, Typography, Card, CardHeader, Divider, CardContent, CardActions} from '@material-ui/core';

import { Field, reduxForm } from 'redux-form'
import { checkRequired, maxLengthCheck, emailCheck } from '../../../common/ReduxValidators';
import { renderTextField} from '../../../common/ReduxFields/ReduxFieldComponent';

import { makeStyles } from '@material-ui/core/styles';
import { SubmissionError } from 'redux-form';




const maxLength30 = maxLengthCheck(30);

const useStyles = makeStyles(theme => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submitDiv: {
      display:'flex',
      margin: theme.spacing(3, 0, 2),
      justifyContent: 'space-around',
    },
    submit: {
      margin: theme.spacing(0, 1),
    },
    imgSuccess:{
      width:'100%'
    },
    button: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


const AccountDetailsForm =(props) =>{
    const classes = useStyles();
    const {
      getAddNewUser
    } = props;
  const { handleSubmit, pristine, submitting, submitSucceeded, error, valid } = props;


  const submit = ({login,fullName,email,role, password, confirm_password } /*, dispatch */) => {
    if (password !== confirm_password) {
      throw new SubmissionError({
        confirm_password: "password confirmation is not equal to password",
        _error: "Please, enter right password confirmation!"
      });
    } else {
      return getAddNewUser({login,fullName,email,role, password});
    }
  };



  return (
      <Card>
    <form onSubmit={handleSubmit(submit)} className={classes.form}>
    <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
      {error && (
        <Typography variant="body2" color="error" align="center">
          {error}
        </Typography>
      )}
      
      <Field
        name="fullName"
        component={renderTextField}
        label="Full Name"
        variant="outlined"
        margin="dense"
        validate={[checkRequired, maxLength30]}
        fullWidth
        defaultValue={props.fName}
        value={props.fName}

        // normalize={[loginCheck]}
      />
    
      <Field
       variant="outlined"
        name="email"
        margin="dense"
        component={renderTextField}
        label="Email"
        validate={[checkRequired, emailCheck]}
        fullWidth
        defaultValue={props.fName}
        value={props.fName}
        // normalize={[loginCheck]}
      />
     
      <Field
        name="password"
        variant="outlined"
        fullWidth
        component={renderTextField}
        label="Password"
        validate={[checkRequired, maxLength30]}
        margin="dense"
      />
      <Field
        name="confirm_password"
        fullWidth
        component={renderTextField}
        label="Confirm password"
        validate={[checkRequired, maxLength30]}
        margin="dense"
      />
      </CardContent>
        <Divider />
        <CardActions>
        <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={pristine|| submitting || error !== undefined || !valid}
          >
            Save Details
          </Button>
        </CardActions>
      
    </form>
      </Card>
    
  
   
  );
}




export default reduxForm({
    form: "AccountDetails",
    // initialValues: { fullName: props.fName} 
    
  })(AccountDetailsForm);

