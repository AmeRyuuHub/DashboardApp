import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import { Button, InputAdornment, MenuItem, SvgIcon } from "@material-ui/core";
import { lower } from "../../../common/ReduxNormalize";
import {
  roundTextField,
  renderMenuSelectField
} from "../../../common/ReduxFields/ReduxFieldComponent";
import { Search } from "@material-ui/icons";
import { MainLinearProgress } from "../../../common/ProgressLines";
import { dashboardStatus } from "../../../content/icons";

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
    pristine,
    submitting,
    error,
    valid,
    formErrors,
    placeholder,
    checkHex
  } = props;

  const startSearch = ({ macInput, deviceType }) => {
    switch (deviceType) {
      case "stb":
        if (!macInput || macInput.length !== 12) {
          throw new SubmissionError({
            macInput: formErrors.lengthSTB,
            _error: formErrors.common
          });
        } else {
          return props.getStbStatusByMac(macInput);
        }
      case "mob":
        if (!macInput || macInput.length !== 16) {
          throw new SubmissionError({
            macInput: formErrors.lengthMobile,
            _error: formErrors.common
          });
        } else {
          return props.getStbStatusByMac(macInput);
        }

      default:
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(startSearch)}>
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
                <Field
                  name="deviceType"
                  component={renderMenuSelectField}
                  label="Type"
                  className={classes.select}
                >
                  <MenuItem value={"stb"}>
                    <SvgIcon color="disabled" viewBox="0 0 24 20">
                      <path d={dashboardStatus.model} />
                    </SvgIcon>
                  </MenuItem>
                  <MenuItem value={"mob"}>
                    <SvgIcon color="disabled" viewBox="0 0 24 20">
                      <path d={dashboardStatus.mobile} />
                    </SvgIcon>
                  </MenuItem>
                </Field>
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
                    pristine || submitting || error !== undefined || !valid
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

export default reduxForm({
  form: "editMac", // a unique identifier for this form
  initialValues: { deviceType: "stb" }
})(SearchForm);
