import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
import { checkRequired, maxLengthCheck } from "../../common/ReduxValidators";
import { renderTextField } from "../../common/ReduxFields/ReduxFieldComponent";

const maxLength30 = maxLengthCheck(30);

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const FieldCreator = props => {
  return (
    <Field
      fullWidth
      component={renderTextField}
      validate={[checkRequired, maxLength30]}
      margin="normal"
      variant="outlined"
      {...props}
    />
  );
};

const LoginForm = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, submitting, error, valid, login, password, button } = props;

  return (
    <>
    {/* <Typography variant="subtitle1" color="textSecondary" >
    Please sign in
    </Typography> */}
  
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Typography variant="body2" color="error" align="center">
          {error}
        </Typography>
        <FieldCreator
          name="login"
          label={login}
          autoComplete="username"
          disabled={submitting}
        />
        <FieldCreator
          name="password"
          label={password}
          type="password"
          autoComplete="current-password"
          disabled={submitting}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={pristine || submitting || error !== undefined || !valid}
        >
          {button}
        </Button>
      </form>
    </>
  );
};

export default reduxForm({
  form: "authForm"
})(LoginForm);
