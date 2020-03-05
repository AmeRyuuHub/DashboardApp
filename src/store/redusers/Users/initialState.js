export const initialState = {
  list: null,
  isFetching: false,
  isFetchingDelUser: false,
  isFetchingChangeUser: false,
  requestFailed: null,
  requestStatus: null,
  requestDelFailed: null,
  requestDelStatus: null,
  requestChangeFailed: null,
  requestChangeStatus: null,
  openDeleteDialog: false,
  valueDeleteDialog: null,
  statusRole: {
    1: "User",
    2: "Tech User",
    3: "Administrator"
  }
};
