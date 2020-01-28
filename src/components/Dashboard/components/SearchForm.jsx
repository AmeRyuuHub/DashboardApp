import React from "react";
import {
  Field,
  reduxForm,
  SubmissionError,
  formValueSelector
} from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import { Button, InputAdornment, SvgIcon } from "@material-ui/core";
import { lower } from "../../../common/ReduxNormalize";
import { roundTextField } from "../../../common/ReduxFields/ReduxFieldComponent";
import { Search } from "@material-ui/icons";
import { MainLinearProgress } from "../../../common/ProgressLines";
import { dashboardStatus } from "../../../content/icons";
import { connect } from "react-redux";
import { compose } from "redux";

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: "32px",
    borderRadius: "0px 20px 20px 0px",
    boxShadow: "none",
    marginRight: "-0.9rem",
    height: "2.5rem"
  }
}));

const SearchForm = props => {
  const classes = useStyles();
  const {
    handleSubmit,
    // pristine,
    submitting,
    error,
    valid,
    formErrors,
    placeholder,
    checkHex,
    mac
  } = props;
  let inputIcon =
    mac && mac.length === 12
      ? dashboardStatus.model
      : mac && mac.length === 16
      ? dashboardStatus.mobile
      : dashboardStatus.unknown;

  const startSearch = ({ macInput }) => {
    if (!macInput || (macInput.length !== 12 && macInput.length !== 16)) {
      throw new SubmissionError({
        macInput: formErrors.error,
        _error: formErrors.common
      });
    } else {
        const submitOK = (value)  => {props.buttonRedirect(value); props.getStbStatusByMac(value);  }
      return submitOK(macInput);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(startSearch)} >
        <Field
          fullWidth
          label={error}
          name="macInput"
          component={roundTextField}
          placeholder={placeholder}
          validate={[checkHex]}
          normalize={lower}
          variant="outlined"
          margin="dense"
          disabled={submitting}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon color="disabled">
                  <path d={inputIcon} />
                </SvgIcon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={
                     submitting || error !== undefined || !valid
                  }
                >
                  <Search />
                </Button>
              </InputAdornment>
            )
          }}
        />
      </form>
      {submitting && <MainLinearProgress />}
    </>
  );
};

export default compose(
  reduxForm({
    form: "statusEditMac" 
  }),
  connect(state => ({
    mac: formValueSelector("statusEditMac")(state, "macInput")
  }))
)(SearchForm);
