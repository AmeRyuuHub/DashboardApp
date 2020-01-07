import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import  AccountProfile from './components/AccountProfile';
import { withMainDiv,withAuthRole } from '../../common/HOC/';

import { compose } from 'redux';
import AccountDetailsForm from './components/AccountDetailsForm';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          xs={12}
        >
          <AccountProfile />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetailsForm initialValues={{fullName: "Angel"}} />
        </Grid>
      </Grid>
    </div>
  );
};

export default compose(withAuthRole,withMainDiv)(Account);