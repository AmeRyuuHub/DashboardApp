
import React from 'react';
import { Button, Typography, DialogActions, DialogContent,DialogContentText} from '@material-ui/core';

import { Field, reduxForm } from 'redux-form'
import { checkRequired, maxLengthCheck } from '../../Common/ReduxValidators';
import { renderTextField} from '../../Common/ReduxFields/ReduxFieldComponent';
import { renderSelectField } from '../../Common/ReduxFields/ReduxFieldComponent';


const maxLength15 = maxLengthCheck(15);
const maxLength30 = maxLengthCheck(30);




const AddUserForm = props => {
  const { handleSubmit, pristine, submitting, error, valid } = props;

  // const submit = ({macInput,deviceType} /*, dispatch */) => {

  //       switch(deviceType){
  //         case "stb":
  //            if (!macInput || macInput.length !== 12) {throw new SubmissionError({
  //                 macInput: "Must be 12 symbols",
  //                 _error: "MAC failed!"
  //               })} else {return props.getStbStatusByMac(macInput);}
  //         case "mob":
  //            if (!macInput || macInput.length !== 16) {throw new SubmissionError({
  //                 macInput: "Must be 16 symbols",
  //                 _error: "MAC failed!"
  //               })} else {return props.getStbStatusByMac(macInput);}

  //   default: break;

  //       }

  //     };

  return (
    <>

          


      
       

     
     
          <DialogContent>
          <DialogContentText>
            To add new user please enter infomation here.
          </DialogContentText>
          <form noValidate onSubmit={handleSubmit}>
        <Typography variant="body2" color="error" align="center">
          {error}
        </Typography>
        <Field
          name="username"
          component={renderTextField}
          label="Username"
          validate={[checkRequired, maxLength15]}
          fullWidth
          autoComplete="username"
          margin="dense"
          // normalize={[loginCheck]}
          autoFocus={true}
        />
        <Field
          name="fullname"
          component={renderTextField}
          label="Fullname"
          margin="dense"
          validate={[checkRequired, maxLength15]}
          fullWidth
          autoComplete="username"
          // normalize={[loginCheck]}
          autoFocus={false}
        />
        <Field
          name="email"
          margin="dense"
          component={renderTextField}
          label="Email"
          type="email"
          validate={[checkRequired, maxLength30]}
          fullWidth
          autoComplete="username"
          // normalize={[loginCheck]}
          autoFocus={false}
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
          type="password"
          margin="dense"
          autoComplete="current-password"
          autoFocus={false}
          // autoComplete="current-password"
        />
        <Field
          name="confirm_password"
          fullWidth
          component={renderTextField}
          label="Confirm password"
          validate={[checkRequired, maxLength30]}
          type="password"
          margin="dense"
          autoFocus={false}
          // autoComplete="current-password"
        />
         </form>
</DialogContent>
<DialogActions>
        <Button
        //   type="submit"
        //   variant="contained"
          color="primary"
          disabled={pristine || submitting || error !== undefined || !valid}
        >
          Add
        </Button>
        </DialogActions>
     
    </>
  );
};

export default reduxForm({
  form: "AddUserForm"
})(AddUserForm);

