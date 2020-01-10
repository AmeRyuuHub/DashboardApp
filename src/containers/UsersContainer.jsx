import React from "react";
import {
  getUsersListItems,
  getAddNewUser,
  getDelNewUser,
  getChangeUser,
  setOpenDeleteDialog,
    setCloseDeleteDialog
} from "../store/redusers/users/UsersList";
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
  getChangeFetching,
  getStatusDeleteDialog,
  getValueDeleteDialog
} from "../store/selectors/usersListSelectors";

import { UsersPage } from "../components/Users";

const UsersContainer = React.memo(props => {
  return <UsersPage {...props} />;
});

function mapStateToProps(state) {
  return {
    requestStatus: getUsersListRequest(state),
    requestFailed: getUsersListRequestFailed(state),
    isFetching: getUsersListFetching(state),
    dataUsers: getUsersList(state),
    requestDelStatus: getDelRequest(state),
    requestDelFailed: getDelRequestFailed(state),
    isFetchingDel: getDelFetching(state),
    requestChangeStatus: getChangeRequest(state),
    requestChangeFailed: getChangeRequestFailed(state),
    isFetchingChange: getChangeFetching(state),
    statusDeleteDialog:getStatusDeleteDialog(state),
    valueDeleteDialog:getValueDeleteDialog(state),
  };
}

export default compose(
  withMainDiv,
  connect(mapStateToProps, {
    getUsersListItems,
    getAddNewUser,
    getDelNewUser,
    getChangeUser,
    setOpenDeleteDialog,
    setCloseDeleteDialog,
  }),
  withAuthRole
)(UsersContainer);
