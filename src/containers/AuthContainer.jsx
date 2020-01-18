import React from "react";
import { connect } from "react-redux";
import {
  getAuthFetching,
  getAuthPageTitleWithLang,
  getAuthPageFormWithLang
} from "../store/selectors/auth/authSelectors";

import { Redirect } from "react-router-dom";
import { getAuthLogin } from "../store/redusers/auth/Auth";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import { MainLinearProgress } from "../common/ProgressLines";
import LoginForm from "../components/Auth/LoginForm";
import { Copyright } from "../common/Copyright";
import { LockOpen } from "@material-ui/icons";
import { getAuthStatus } from "../store/selectors/appInit/initSelectors";


const useStyles = makeStyles(theme => ({
  root: {
    height: "calc(100vh - 70px)"
  },
  paper: {
    padding: theme.spacing(2),
    // borderColor:theme.palette.primary.main,
  },
  login: {
    fontSize: "2.5rem",
    marginRight: theme.spacing(2)
  },
  avatar: {
    margin: theme.spacing(1)
  }
}));

const AuthContainer = props => {
  const classes = useStyles();
  const { isFetching, loginStatus, pageTitle, formContent } = props;
  if (loginStatus) {
    return <Redirect to="/" />;
  }
  const handleSubmitForm = ({ login, password }) =>
    props.getAuthLogin(login, password);

  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.root}
      >
        {isFetching && <MainLinearProgress />}
        <Grid
          item
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          spacing={6}
        >
          <Grid item container justify="center" alignItems="center">
          
            <LockOpen color="primary" className={classes.login} />
            <Typography component="span" variant="h4" color="primary">
             {pageTitle}
            </Typography>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} variant="outlined">
              <LoginForm onSubmit={handleSubmitForm} {...formContent}/>
            </Paper>
          </Grid>
        </Grid>
        <Grid item>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    isFetching: getAuthFetching(state),
    loginStatus: getAuthStatus(state),
    pageTitle: getAuthPageTitleWithLang(state),
    formContent:getAuthPageFormWithLang(state),
  };
}

export default connect(mapStateToProps, { getAuthLogin })(AuthContainer);

