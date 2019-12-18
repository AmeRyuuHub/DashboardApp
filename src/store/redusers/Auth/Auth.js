
import {C} from '../ActionsNameList'
import {API} from '../../../API/Apis';
import { startSubmit, stopSubmit } from 'redux-form';
import { initialState } from './initialState';

export default function authApp(state = initialState, action) {
  switch (action.type) {
    case C.SET_AUTH_LOGIN:
      return {
        ...state,
        result: action.payload.result,
        isFetching: false,
        loginStatus: true,
        session_id: action.payload.session_id
      };

    case C.SET_AUTH_LOGOUT:
      return {
        ...state,
        result: null,
        loginStatus:false,
        isFetching: false,
        session_id: null
      };

    case C.SET_AUTH_CHECK:
      return {
        ...state,
        result: action.payload.result,
        isFetching: false,
        loginStatus: true,
        session_id: action.payload.session_id
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


export  function setAuthLogin(result,session_id){
    return { type:C.SET_AUTH_LOGIN, payload: {result,session_id}}
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
  
    API.getLogin(login, password)
      .then(data => {
        if (data.status) {
          dispatch(setAuthLogin(data.result[0], data.session_id));
          dispatch(stopSubmit("authForm"));
          localStorage.setItem("jssid", data.session_id);
        } else {
          dispatch(setAuthLoginFailed(data.status));
          dispatch(stopSubmit("authForm", {_error: "Login or password is incorrect" }));
        }
        dispatch(setAuthFetching(false));
      })
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
      let token =localStorage.getItem('jssid');
     
     if (token) {
      dispatch(setAuthFetching(true));
      API.getLogout(token)
      .then(() => {
        localStorage.removeItem('jssid');
        dispatch(setAuthLogout()) ;
        dispatch(setAuthFetching(false));
      })
      .catch(() => {
          dispatch(setAuthLogoutFailed(false));
          dispatch(setAuthFetching(false));
      });
     }
    
    };
  };
  
  // export const getAuthCheck = (token) => {
  //   return dispatch => {
  //     dispatch(setAuthFetching(true));
     
  //     API.getAuth(token)
  //       .then(data => {
  //         data.status ?
  //           dispatch(setAuthCheck(data.results[0],data.session_id))
  //          : 
  //           dispatch(setAuthCheckFailed(data.status)); 
        
  //         dispatch(setAuthFetching(false));
  //       })
  //       .catch(() => {
  //         dispatch(setAuthCheckFailed(false));
  //         dispatch(setAuthFetching(false));
  //       });
  //   };
  // };