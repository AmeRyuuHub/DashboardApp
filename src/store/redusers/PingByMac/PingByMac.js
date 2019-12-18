
import {C} from '../ActionsNameList'
import {API} from '../../../API/Apis';
import { initialState } from './initialState';

export default function PingByMac(state = initialState, action) {
  switch (action.type) {
    case C.SET_PING_BY_MAC:
      return { ...state, mac: action.payload.mac, router:action.payload.router,platform:action.payload.platform };

    case C.SET_PING_INFO_SEARCH_START:
      return { ...state, requestStatus: null, requestFailed: false };
    case C.SET_PING_REQUEST_RESULT:
      return { ...state, requestStatus: action.payload };

    case C.SET_PING_FETCHING:
      return { ...state, isFetching: action.payload };

    case C.SET_PING_BY_MAC_FAILED:
      return { ...state, requestFailed: action.payload };
    default:
      return state;
  }
}



//ActionCreators

export  function setPingByMac(status){
    return {
        type:C.SET_PING_BY_MAC,
        payload: status
    }
}

export  function setPingFetching(status){
    return {
        type:C.SET_PING_FETCHING,
        payload: status
    }
}
export  function setPingRequestStatus(status){
    return {
        type:C.SET_PING_REQUEST_RESULT,
        payload: status
    }
}
export  function setPingButtonStatus(status){
    return {
        type:C.SET_PING_TOGGLE_BUTTON,
        payload: status
    }
}
export  function setPingFailed(status){
    return {
        type:C.SET_PING_BY_MAC_FAILED,
        payload: status
    }
}


// ThunkCreators
export const getPingInfoByMac =(MAC)=> {

    return (dispatch)=>{
        dispatch(setPingFailed(false)); 
        dispatch(setPingFetching(true));
        
        API.getPing(MAC)
        .then(data=>{
            dispatch(setPingFetching(false));
            
            if (data.status){
                dispatch(setPingRequestStatus(true));   
                dispatch(setPingByMac(data.response));
                } else {
                dispatch(setPingRequestStatus(false)) 
                
                } 
        }
            )
            .catch((error)=>{
                dispatch(setPingRequestStatus(false)); 
                dispatch(setPingFetching(false));
                dispatch(setPingFailed(true));
              console.log(error);})  
    
    }
    
    }

   
        