
import {C} from '../ActionsNameList'
import {API} from '../../../API/Apis';
// import { startSubmit, stopSubmit } from './node_modules/redux-form';
import { initialState } from './initialState';
import { getDeviceInfo } from '../../../common/ReduxThunk';

export default function profile(state = initialState, action) {
  switch (action.type) {
    case C.SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
         };

    case C.SET_PROFILE_FETCHING:
      return { ...state, isFetching: action.payload };
    
      case C.SET_PROFILE_FAILED:
      return { ...state, requestFailed: true, };
    default:
      return state;
  }
}


export  function setProfile(data){
    return { type:C.SET_PROFILE, payload: data}
}


export  function setProfileFetching(status){
    return { type:C.SET_PROFILE_FETCHING, payload: status }
}

export  function setProfileFailed(){
  return { type:C.SET_PROFILE_FAILED }
}




export const getDataProfile = () => {
  return dispatch => {
   
    dispatch(setProfileFetching(true));
    getDeviceInfo(API.getProfile, null,API.getToken)
      .then(data => {
        dispatch(setProfile(data.user));
        dispatch(setProfileFetching(false));
       
      })
      .catch(error => {
        dispatch(setProfileFetching(false));
        dispatch(setProfileFailed());
      });
  };
};

