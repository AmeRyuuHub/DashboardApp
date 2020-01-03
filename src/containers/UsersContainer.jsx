import React, { useEffect } from "react";
import {
  getUsersListItems,
  getAddNewUser,
  getDelNewUser,
  getChangeNewUser
} from "../store/redusers/Users/UsersList";
import { connect } from "react-redux";
import { withAuthRole, withMainDiv } from "../common/HOC/";
import { compose } from "redux";
import {
  getUsersList,
  getUsersListRequest,
  getUsersListRequestFailed,
  getUsersListFetching,
  getDelRequest,
  getDelRequestFailed,
  getDelFetching,
  getChangeRequest,
  getChangeRequestFailed,
  getChangeFetching
} from "../store/selectors/UsersListSelectors";
import { AddUser, Users } from "../components/Users";
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Accessible } from "@material-ui/icons";


const useStyles = makeStyles(theme =>({
  root:{
    paddingTop:theme.spacing(2)
  }
}));

const UsersContainer = React.memo(props => {
  const classes = useStyles();
  const {
    dataUsers,
    getUsersListItems,
    getAddNewUser
  } = props;
  useEffect(() => {
    if (!dataUsers) {
      getUsersListItems();
    }
  }, [dataUsers, getUsersListItems]);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}  >
        <Card >
          <CardHeader
          avatar ={
          <Accessible fontSize="large" color="primary"/>
        }
            action={<AddUser getAddNewUser={getAddNewUser} />}
            title={"Пользователи"}
            titleTypographyProps={{color:"primary",variant:"h5"}}
          />

          <CardContent>{props.dataUsers && <Users {...props} />}</CardContent>
        </Card>
        </Grid>
        
      </Grid>
    </Container>
  );
});



function mapStateToProps(state) {
 
  return {
     requestStatus: getUsersListRequest(state),
     requestFailed:getUsersListRequestFailed(state),
     isFetching: getUsersListFetching(state),
    dataUsers: getUsersList(state),
   
     requestDelStatus: getDelRequest(state),
     requestDelFailed:getDelRequestFailed(state),
     isFetchingDel: getDelFetching(state),
     requestChangeStatus: getChangeRequest(state),
     requestChangeFailed:getChangeRequestFailed(state),
     isFetchingChange: getChangeFetching(state),
  };
}

export default compose(
  withMainDiv,
  connect(mapStateToProps, {
    getUsersListItems,
    getAddNewUser,
    getDelNewUser,
    getChangeNewUser
  }),
  withAuthRole
)(UsersContainer);










