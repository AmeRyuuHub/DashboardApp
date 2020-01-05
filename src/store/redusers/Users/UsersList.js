
import {C} from '../ActionsNameList'
import {API} from '../../../API/Apis';
import { initialState } from './initialState';
import { startSubmit, stopSubmit, setSubmitSucceeded } from 'redux-form';
import { getDeviceInfo } from '../../../common/ReduxThunk';


export default function usersList(state = initialState, action) {
  switch (action.type) {
    case C.SET_USERS_LIST:
      return { ...state, list: action.payload };

    case C.SET_USERS_LIST_REQUEST_START:
      return {
        ...state,
        requestStatus: null,
        requestFailed: false,
        isFetching: true
      };
    case C.SET_USERS_LIST_REQUEST_RESULT:
      return { ...state, requestStatus: action.payload };

    case C.SET_USERS_LIST_FETCHING:
      return { ...state, isFetching: action.payload };

    case C.SET_USERS_LIST_FAILED:
      return { ...state, requestFailed: action.payload };


    case C.SET_DEL_USER_REQUEST_START:
      return {
        ...state,
        requestDelStatus: null,
        requestDelFailed: false,
        isFetchingDelUser: true
      };
    case C.SET_DEL_USER_REQUEST_RESULT:
      return { ...state, requestDelStatus: action.payload };

    case C.SET_DEL_USER_FETCHING:
      return { ...state, isFetchingDelUser: action.payload };

    case C.SET_DEL_USER_FAILED:
      return { ...state, requestDelFailed: action.payload };

    case C.SET_CHANGE_USER_REQUEST_START:
      return {
        ...state,
        requestChangeStatus: null,
        requestChangeFailed: false,
        isFetchingChangeUser: true
      };
    case C.SET_CHANGE_USER_REQUEST_RESULT:
      return { ...state, requestChangeStatus: action.payload };

    case C.SET_CHANGE_USER_FETCHING:
      return { ...state, isFetchingChangeUser: action.payload };

    case C.SET_CHANGE_USER_FAILED:
      return { ...state, requestChangeFailed: action.payload };

    default:
      return state;
  }
}



//ActionCreators

export  function setUsersList(data){
    return {
        type:C.SET_USERS_LIST,
        payload: data
    }
}
export  function setUserListFetching(status){
    return {
        type:C.SET_USERS_LIST_FETCHING,
        payload: status
    }
}
export  function setUserListRequestStart(){
  return {
      type:C.SET_USERS_LIST_REQUEST_START,
  }
}

export  function setUserListRequestStatus(status){
    return {
        type:C.SET_USERS_LIST_REQUEST_RESULT,
        payload: status
    }
}
export  function setUserListFailed(status){
    return {
        type:C.SET_USERS_LIST_FAILED,
        payload: status
    }
}




export  function setDelUserRequestStart(){
  return {
      type:C.SET_DEL_USER_REQUEST_START,
  }
}
export  function setDelUserFetching(status){
  return {
      type:C.SET_DEL_USER_FETCHING,
      payload: status
  }
}
export  function setDelUserRequestStatus(status){
  return {
      type:C.SET_DEL_USER_REQUEST_RESULT,
      payload: status
  }
}
export  function setDelUserFailed(status){
  return {
      type:C.SET_DEL_USER_FAILED,
      payload: status
  }
}

export  function setChangeUserRequestStart(){
  return {
      type:C.SET_CHANGE_USER_REQUEST_START,
  }
}
export  function setChangeUserFetching(status){
  return {
      type:C.SET_CHANGE_USER_FETCHING,
      payload: status
  }
}
export  function setChangeUserRequestStatus(status){
  return {
      type:C.SET_CHANGE_USER_REQUEST_RESULT,
      payload: status
  }
}
export  function setChangeUserFailed(status){
  return {
      type:C.SET_CHANGE_USER_FAILED,
      payload: status
  }
}

// ThunkCreators
export const getUsersListItems = () => {
  return dispatch => {
    dispatch(setUserListRequestStart());
    getDeviceInfo(API.getUsers, null,API.getToken)
      .then(data => {
        
          dispatch(setUserListRequestStatus(true));
          dispatch(setUsersList(data));
        dispatch(setUserListFetching(false));
      })
      .catch(() => {
        dispatch(setUserListRequestStatus(false));
        dispatch(setUserListFetching(false));
        dispatch(setUserListFailed(true));
      });
  };
};


 
export const getAddNewUser = (userData) => {
  return dispatch => {
    dispatch(startSubmit("AddUserForm"));
    getDeviceInfo(API.postNewUser, userData,API.getToken)
      .then(() => {
        dispatch(stopSubmit("AddUserForm"));
        dispatch(getUsersListItems());
        dispatch(setSubmitSucceeded("AddUserForm"));    
      })
      .catch(error => {
        dispatch(stopSubmit("AddUserForm",{_error:"Something wrong, try latter..."}));
        console.log(error);
      });
  };
};










export const getDelNewUser = (userData) => {
  return dispatch => {
    dispatch(setDelUserRequestStart());
    getDeviceInfo(API.deleteUser, userData,API.getToken)
      .then(() => {
          dispatch(setDelUserRequestStatus(true));
          dispatch(getUsersListItems()); 
          dispatch(setDelUserFetching(false));
      })
      .catch(error => {
        dispatch(setDelUserRequestStatus(false));
        dispatch(setDelUserFetching(false));
        dispatch(setDelUserFailed(true));
        console.log(error);
      });
  };
};
        
export const getChangeNewUser = (userData) => {
  return dispatch => {
    dispatch(setChangeUserRequestStart());
    API.getUsersEdit(userData)
      .then(data => {
        
        if (data.status) {
          dispatch(setChangeUserRequestStatus(true));
          getUsersListItems(); 
        } else {
          dispatch(setChangeUserRequestStatus(false));
        }
        dispatch(setChangeUserFetching(false));
      })
      .catch(error => {
        dispatch(setChangeUserRequestStatus(false));
        dispatch(setChangeUserFetching(false));
        dispatch(setChangeUserFailed(true));
        console.log(error);
      });
  };
};