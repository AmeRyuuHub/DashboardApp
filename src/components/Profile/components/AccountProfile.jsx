import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import 'moment-timezone';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  
  Icon,
  Grid
} from '@material-ui/core';
import { dataUsersRoleIcons } from '../../../common/Icons';
import Moment from 'react-moment';


const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 100,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AccountProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
avatar:null || dataUsersRoleIcons[1],
login:"testAdmin",
fullName:"testAdministrator",
email:"testadmin@gmail.com",
role:"Administrator",

createDate:"2019-12-24T17:41:53.671+00:00",

  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={8}>
          <Typography
              
              variant="h3"
            >
              {user.fullName}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="h5"
            >
              {user.role}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textPrimary"
              variant="body1"
              gutterBottom
            >
              {user.email}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
             {`Created on: `}
   
              <Moment format="YYYY-MM-DD HH:mm" date={user.createDate} />
              
         
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Avatar
            className={classes.avatar}
           
          > <Icon component={user.avatar} className={classes.avatar}/></Avatar>
          </Grid>
        </Grid>
        
       
      </CardContent>
      <Divider />

      {/* Upload avatar */}
      
      {/* <CardActions>
        <Button
          className={classes.uploadButton}
          color="primary"
          variant="text"
        >
          Upload picture
        </Button>
        <Button variant="text">Remove picture</Button>
      </CardActions> */}
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;