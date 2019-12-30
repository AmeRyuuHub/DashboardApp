
import {C} from '../ActionsNameList'
import {API} from '../../../API/Apis';
import { startSubmit, stopSubmit } from 'redux-form';
import { initialState } from './initialState';

export default function authApp(state = initialState, action) {
  switch (action.type) {
    case C.SET_AUTH_LOGIN:
      return {
        ...state,
        fullName: action.payload.fullName,
        isFetching: false,
        loginStatus: true,
        role: JSON.parse(Buffer.from(action.payload.token.split('.')[1], 'base64').toString()).role, 
      };

    case C.SET_AUTH_LOGOUT:
      return {
        ...state,
        fullName: null,
        loginStatus:false,
        isFetching: false,
        role:null,
        
      };

    case C.SET_AUTH_CHECK:
      return {
        ...state,
        fullName: action.payload,
        isFetching: false,
        loginStatus: true,
        
      };

    case C.SET_AUTH_FETCHING:
      return { ...state, isFetching: action.payload };

    case C.SET_SET_AUTH_LOGIN_FAILED:
      return { ...state, requestLoginFailed: action.payload };
    case C.SET_AUTH_LOGOUT_FAILED:
      return { ...state, requestLogoutFailed: action.payload };
    case C.SET_AUTH_CHECK_FAILED:
      return { ...state, loginStatus: action.payload };
    default:
      return state;
  }
}


export  function setAuthLogin(data){
    return { type:C.SET_AUTH_LOGIN, payload: data}
}


export  function setAuthLogout(){
    return { type:C.SET_AUTH_LOGOUT }
}


export  function setAuthFetching(status){
    return { type:C.SET_AUTH_FETCHING, payload: status }
}


export  function setAuthLoginFailed(status){
  return {
      type:C.SET_AUTH_LOGIN_FAILED,
      payload: status
  }
}
export  function setAuthLogoutFailed(status){
    return {
        type:C.SET_AUTH_LOGOUT_FAILED,
        payload: status
    }
  }

  export  function setAuthCheckFailed(status){
    return {
        type:C.SET_AUTH_LOGOUT_FAILED,
        payload: status
    }
  }

export const getAuthLogin = (login,password) => {
  return dispatch => {
    dispatch(startSubmit("authForm"));
    dispatch(setAuthFetching(true));
  
    API.postLogin(login, password)
      .then(data => {
        
          dispatch(setAuthLogin(data));
          dispatch(stopSubmit("authForm"));
          localStorage.setItem("jssid", data.token);
          dispatch(setAuthFetching(false));
        //   dispatch(setAuthLoginFailed(data.status));
        //   dispatch(stopSubmit("authForm", {_error: "Login or password is incorrect" }));
         }
        
      )
      .catch(() => {
        dispatch(setAuthLoginFailed(false));
        dispatch(
          stopSubmit("authForm", {_error: "Something wrong, try latter..." })
        );
        dispatch(setAuthFetching(false));
      });
  };
};

export const getAuthLogout = () => {
  return dispatch => {
    let token = localStorage.getItem("jssid");

    if (token) {
      dispatch(setAuthFetching(true));
      API.patchLogout()
        .then(() => {
          localStorage.removeItem("jssid");
          dispatch(setAuthLogout());
          dispatch(setAuthFetching(false));
        })
        .catch(() => {
          dispatch(setAuthLogoutFailed(false));
          dispatch(setAuthFetching(false));
        });
    } else {
      localStorage.removeItem("jssid");
      dispatch(setAuthLogout());
    }
  };
};
