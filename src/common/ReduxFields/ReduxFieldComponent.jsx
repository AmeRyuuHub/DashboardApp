import React from "react";


import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  InputBase,  FormHelperText,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";


export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  lang,
  ...custom
}) => (
  
  <TextField
    required
    label={label}
    placeholder={label}
    error={touched && (invalid || error)}
    helperText={(touched && error) ? error : " "}
    {...input}
    {...custom}
  />
); 

export const renderTextFieldThin = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  
  <TextField
    required
    label={label}
    placeholder={label}
    error={touched && (invalid || error)}
    helperText={touched && error ? error : null}
    {...input}
    {...custom}
  />
); 





export const renderTextwithoutLine = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    InputProps={{ disableUnderline: true }}
    required
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error ? error : " "}
    {...input}
    {...custom}
  />
);

export const renderInputBase = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <FormControl error={touched && invalid}>
    <InputBase
      label={label}
      placeholder={label}
      error={touched && invalid}
      {...input}
      {...custom}
    />
    <FormHelperText>{error}</FormHelperText>
  </FormControl>
);

export const renderCheckBoxField = ({
  label,
  input,
  ...custom
}) => (
  <FormControlLabel
    control={
      <Checkbox value="remember" color="primary" {...input} {...custom} />
    }
    label={label}
  />
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  return (
    <FormControl {...custom}>
      <InputLabel>{label}</InputLabel>
      <Select native {...input}>
        {children}
      </Select>
    </FormControl>
  );
};

export const roundTextField = withStyles(({ palette }) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "20px",
        backgroundColor: palette.background.paper,
        zIndex: "-1"
      }
    }
  }
}))(renderTextField);

export const MySelect = withStyles({
  root: {
    "&.MuiSelect-select:focus": {
      backgroundColor: "#fff0"
    }
  }
})(Select);

export const renderMenuSelectField = ({
  input,
  
  meta: { touched, error },
  children
}) => {
  return (
    <MySelect
      disableUnderline={true}
      error={touched && error}
      {...input}
      onChange={event => input.onChange(event.target.value)}
    >
      {children}
    </MySelect>
  );
}; 













