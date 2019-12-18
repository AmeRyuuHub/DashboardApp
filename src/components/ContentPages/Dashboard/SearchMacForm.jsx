
import React from "react";
import { Field, reduxForm} from "redux-form";
import { makeStyles} from "@material-ui/core/styles";
import {Button, InputAdornment,MenuItem, SvgIcon, } from "@material-ui/core";
import { checkHexidecimal, checkRequired } from "../../Common/ReduxValidators";
import { lower } from "../../Common/NormalizeRedux";
import { roundTextField, renderMenuSelectField } from "../../Common/ReduxFields/ReduxFieldComponent";
import { Search } from "@material-ui/icons";
import {  MainLinearProgress } from "../../Common/ProgressLines/ProgressLines";
import {dataStatusIcons} from '../../Common/DataIcons/DataIcons'




const useStyles = makeStyles(theme => ({

  button: {
    minWidth: '32px',
    borderRadius: '0px 20px 20px 0px',
    boxShadow:'none',
    marginRight: '-0.9rem',
    height: '2.5rem'
      },
}));


const SearchMacForm = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, submitting, error, valid } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Field
          fullWidth
          name="macInput"
          component={roundTextField}
          placeholder="Search by MAC"
          validate={[ checkHexidecimal]}
          normalize={lower}
          variant="outlined"
          margin="dense"
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
                      <path d={dataStatusIcons.model} />
                    </SvgIcon>
                  </MenuItem>
                  <MenuItem value={"mob"}>
                    <SvgIcon color="disabled" viewBox="0 0 24 20">
                      <path d={dataStatusIcons.mobile} />
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
})(SearchMacForm);