
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
 
  export const getInitialized = () => {
    return dispatch => {
      API.getAuth()
        .then(data => {
            dispatch(setAuthLogin(data));
            dispatch(setInitializeSuccess(true));
 
        })
        .catch((error) => {         
            console.log(error.response.status);
          dispatch(setInitializeSuccess(true));
          
        }) 
    };
  };