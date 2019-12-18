
import {C} from '../ActionsNameList'
import {API} from '../../../API/Apis';
import { setAuthLogin } from '../Auth/Auth';
import { initialState } from './initialState';

export default function appInit(state = initialState, action) {
  switch (action.type) {
    case C.SET_INITIALIZE_SUCCESS:
      return {
        ...state,
        initialized: action.payload, 
      };
    
    default:
      return state;
  }
}


export  function setInitializeSuccess(status){
    return { type:C.SET_INITIALIZE_SUCCESS, payload: status}
}
 
  export const getInitialized = (token) => {
    return dispatch => {
      token ?
      API.getAuth(token)
        .then(data => {
          data.status &&
            dispatch(setAuthLogin(data.result[0],data.result[0].jsession_id));
            dispatch(setInitializeSuccess(true));
 
        })
        .catch(() => {
          dispatch(setInitializeSuccess(true));
          ;
        }) : dispatch(setInitializeSuccess(true));
    };
  };