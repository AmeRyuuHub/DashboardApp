
import React from 'react';
import { Button, Typography, CircularProgress} from '@material-ui/core';

import { Field, reduxForm } from 'redux-form'
import { checkRequired, maxLengthCheck, emailCheck } from '../../common/ReduxValidators';
import { renderTextField} from '../../common/ReduxFields/ReduxFieldComponent';
import { renderSelectField } from '../../common/ReduxFields/ReduxFieldComponent';
import { makeStyles } from '@material-ui/core/styles';
import { SubmissionError } from 'redux-form';
import { Add } from '@material-ui/icons';



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


const AddUserForm =(props) =>{
    const classes = useStyles();
    const {
      getAddNewUser
    } = props;
  const { handleSubmit, pristine, reset, submitting,submitSucceeded, error, valid } = props;


  const submit = ({username,fullname,email,role, password, confirm_password } /*, dispatch */) => {
    if (password !== confirm_password) {
      throw new SubmissionError({
        confirm_password: "password confirmation is not equal to password",
        _error: "Please, enter right password confirmation!"
      });
    } else {
      return getAddNewUser({username,fullname,email,role, password});
    }
  };



  return (
    
    !submitSucceeded ?
      <form onSubmit={handleSubmit(submit)} className={classes.form}>
        {error && (
          <Typography variant="body2" color="error" align="center">
            {error}
          </Typography>
        )}
        <Field
          name="username"
          component={renderTextField}
          label="Username"
          validate={[checkRequired, maxLength30]}
          fullWidth
          margin="dense"
          // normalize={[loginCheck]}
          autoFocus={true}
        />
        <Field
          name="fullname"
          component={renderTextField}
          label="Fullname"
          margin="dense"
          validate={[checkRequired, maxLength30]}
          fullWidth

          // normalize={[loginCheck]}
        />
        <Field
          name="email"
          margin="dense"
          component={renderTextField}
          label="Email"
          validate={[checkRequired, emailCheck]}
          fullWidth

          // normalize={[loginCheck]}
        />
        <Field fullWidth name="role" component={renderSelectField} label="Role">
          <option value={1}>User</option>
          <option value={2}>Technical</option>
          <option value={3}>Administrator</option>
        </Field>
        <Field
          name="password"
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
        <div className={classes.submitDiv}>
       
          <Button
          className={classes.submit}
            type="submit"
         fullWidth
            variant="contained"
            color="primary"
            disabled={pristine || submitting || error !== undefined || !valid}
            startIcon={submitting ? <CircularProgress size={22} />:<Add/>}
          >
            Add
          </Button>
          
         
          <Button 
          className={classes.submit}
            fullWidth
            variant="outlined"
            color="primary"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </Button>
         
        </div>
      </form>
      : <div>
        <Typography variant="h5" color="primary" align="center">
User was added.
        </Typography>
        <img src="/img/success.svg" alt="success" className={classes.imgSuccess}/>
        <Button 
            fullWidth
            variant="outlined"
            color="primary"  
            className={classes.button}
            onClick={reset}
          >
            Add another user
          </Button>
      </div>
   
  );
}




export default reduxForm({
    form: "AddUserForm",
    initialValues: { role: 1} 
    
  })(AddUserForm);

