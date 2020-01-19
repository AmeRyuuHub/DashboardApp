import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Icon,
  Typography,
  ButtonBase,
  IconButton,
  Button,
 
} from "@material-ui/core";
import "moment-timezone";
import Moment from "react-moment";
import { usersRole } from "../../../content/icons";
import { Edit, Close } from "@material-ui/icons";
import { Field, reduxForm } from "redux-form";
import {
  checkRequired,
  maxLengthCheck,
  emailCheck
} from "../../../common/ReduxValidators";
import { renderTextFieldThin } from "../../../common/ReduxFields/ReduxFieldComponent";
const maxLength30 = maxLengthCheck(30);
const user = {
  avatar: null || usersRole[1],
  login: "testAdmin",
  fullName: "testAdministrator",
  email: "testadmin@gmail.com",
  role: "Administrator",

  createDate: "2019-12-24T17:41:53.671+00:00"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
    // margin: 'auto',
    // maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128
  },
  avatarGrid: {
    margin: "auto"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  submit:{
    marginRight:theme.spacing(2)
  }
}));

const AccountProfile = React.memo((props) => {
  const {profile} = props;
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const classes = useStyles();
  const {
    handleSubmit,
    pristine,
    submitting,
    error,
    valid
  } = props;

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item className={classes.avatarGrid}>
            <ButtonBase>
              <Icon component={user.avatar} className={classes.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {!edit ? (
                  <Typography gutterBottom variant="h6">
                    {profile.fullName}
                  </Typography>
                ) : (
                  <Field
                    name="fullName"
                    component={renderTextFieldThin}
                    label="Full Name"
                    variant="outlined"
                    margin="dense"
                    validate={[checkRequired, maxLength30]}
                   
                  />
                )}

                <Typography variant="body2" gutterBottom>
                  {profile.role}
                </Typography>
               {!edit? <Typography variant="body2" color="textSecondary">
                  {profile.email}
                </Typography>: <Field
                  variant="outlined"
                  name="email"
                  margin="dense"
                  component={renderTextFieldThin}
                  label="Email"
                  validate={[checkRequired, emailCheck]}
                  
                />} 
                
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  {`Created on: `}
                  <Moment format="YYYY-MM-DD HH:mm" date={profile.createDate} />
                </Typography>
              </Grid>
              {edit && (
               <Grid item>
                  

                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={
                      pristine || submitting || error !== undefined || !valid
                    }
                  >
                    Save Details
                  </Button>
                  <Button
                    onClick={handleEdit}
                    variant="outlined"
                    color="primary"
                    mx={2}
                  >
                    Cancel
                  </Button>
                 
                </Grid>
              )}
            </Grid>

            <Grid item>
              <IconButton onClick={handleEdit}>
                {!edit ? <Edit />:<Close/>}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
});

export default reduxForm({
  form: "editProfile"
  // initialValues: { fullName: props.fName}
})(AccountProfile);
