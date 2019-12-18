// import { v4 } from "uuid";
// import { createSelector } from "reselect";


export const getUsersList = state => {
  return state.users.list;
};
  export const getUsersListFetching = state => {
    return state.users.isFetching;
  };
  
  export const getUsersListRequest = state => {
    return state.users.requestStatus;
  };
  export const getUsersListRequestFailed = state => {
    return state.users.requestFailed;
  };


    export const getDelFetching = state => {
      return state.users.isFetchingDelUser;
    };
    
    export const getDelRequest = state => {
      return state.users.requestDelStatus;
    };
    export const getDelRequestFailed = state => {
      return state.users.requestDelFailed;
    };

    export const getChangeFetching = state => {
      return state.users.isFetchingChangeUser;
    };
    
    export const getChangeRequest = state => {
      return state.users.requestChangeStatus;
    };
    export const getChangeRequestFailed = state => {
      return state.users.requestChangeFailed;
    };



   
  

