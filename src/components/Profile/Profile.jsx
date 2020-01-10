import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import  AccountProfile from './components/AccountProfile';
import { withMainDiv,withAuthRole } from '../../common/HOC/';

import { compose } from 'redux';
import AccountDetailsForm from './components/AccountDetailsForm';
import AccountSessions from './components/AccountSessions';
import { getProfile, getProfileFetching } from '../../store/selectors/profileSelectors';
import { getDataProfile } from '../../store/redusers/profile/profile';
import { connect } from 'react-redux';
import { MainLinearProgress } from '../../common/ProgressLines';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Profile = React.memo((props) => {
  const classes = useStyles();
const {profile, isFetching ,getDataProfile} = props;
  useEffect(() => {
    if (!profile) {
      getDataProfile();
    }
  }, [profile, getDataProfile]);

if (isFetching) {return <MainLinearProgress/>}
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
     {profile ?  <AccountProfile initialValues={{fullName:profile.fullName, email:profile.email}} profile={profile}/>: null}    
        </Grid>
        <Grid
          item
          xs={12}
        >
          <AccountDetailsForm  />
        </Grid>


        <Grid item  xs={12}>
          <AccountSessions/>
        </Grid>
      </Grid>
    </div>
  );
});

const mapStateToProps =(state) =>{
  return {
    profile:getProfile(state),
    isFetching: getProfileFetching(state),

  }
}

export default compose(withAuthRole,withMainDiv, connect(mapStateToProps,{getDataProfile}))(Profile);