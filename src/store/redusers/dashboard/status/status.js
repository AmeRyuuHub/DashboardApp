
import {C} from '../../ActionsNameList'
import {API} from '../../../../API/Apis';
import { stopSubmit,  startSubmit} from 'redux-form'
import { initialState } from './initialState';
import { getDeviceInfo } from "../../../../common/ReduxThunk";

export default function status(state = initialState, action) {
  switch (action.type) {
    case C.SET_STATUS_BY_MAC:
      if ((!state.searchResult)|| state.searchResult.last_report!==action.payload.last_report || state.mac!==action.payload.mac){
      return {
        ...state,
          searchResult: action.payload.status,
          mac: action.payload.mac
      
      };
    } else { return state};
    
    case C.SET_STATUS_SEARCH_START:
      return {
        ...state,
        searchMacValue: action.payload,
        requestFailed: false,
        searchResult:null,
      };

    case C.SET_STATUS_SEARCH_RESULT:
      return { ...state, searchStatus: action.payload };

    case C.SET_STATUS_FETCHING:
      return { ...state, isFetching: action.payload };

    case C.SET_STATUS_BY_MAC_FAILED:
      return { ...state, requestFailed: action.payload };


      case C.SET_STATUS_PING:
        return {
          ...state,
          ping:{...state.ping,
            mac: action.payload.mac,
            router: action.payload.status.filter(rout => rout.platform === 0),
            platform: action.payload.status.filter(rout => rout.platform === 1),
          }
      
        };
  
    
      case C.SET_STATUS_PING_SEARCH_RESULT:
        return { ...state,  ping:{...state.ping,mac: action.payload}  };
  
      case C.SET_STATUS_PING_FETCHING:
        return { ...state, ping:{...state.ping, isFetching: action.payload}  };
  
      case C.SET_STATUS_PING_FAILED:
        return { ...state, requestFailed: action.payload };



    default:
      return state;
  }
}



export  function setInfoByMac(boxinfo){
    return { type:C.SET_STATUS_BY_MAC, payload: boxinfo}
}

export  function setStartSearch(mac){
    return { type:C.SET_STATUS_SEARCH_START, payload: mac }
}

export  function setSearchResult(status){
    return { type:C.SET_STATUS_SEARCH_RESULT, payload: status }
}

export  function setFetching(status){
    return { type:C.SET_STATUS_FETCHING, payload: status }
}

export  function setStatusFailed(status){
  return {
      type:C.SET_STATUS_BY_MAC_FAILED,
      payload: status
  }
}



// Status tab's thunk

export const getDeviceStatusByMac = MAC => {
  return dispatch => {
    dispatch(startSubmit("statusEditMac"));
    dispatch(setStartSearch(MAC));
    getDeviceInfo(API.getInfoByMac, MAC,API.getToken)
      .then(data => {
        dispatch(setInfoByMac(data));
        dispatch(setSearchResult(true));
        dispatch(stopSubmit("statusEditMac"));
        
      })
      .catch(error => {
        dispatch(setSearchResult(false));
        dispatch(
          stopSubmit(
            "statusEditMac",
            error.response.status === 404
              ? { macInput: "Device not found." }
              : { macInput: "Something wrong, try latter..." }
          )
        );
        dispatch(setStatusFailed(true));
      });
  };
};



// Ping Tab's actions

export  function setStatusPing(boxinfo){
  return { type:C.SET_STATUS_PING, payload: boxinfo}
}


export  function setStatusPingSearchResult(status){
  return { type:C.SET_STATUS_PING_SEARCH_RESULT, payload: status }
}

export  function setStatusPingFetching(status){
  return { type:C.SET_STATUS_PING_FETCHING, payload: status }
}

export  function setStatusPingFailed(status){
return {
    type:C.SET_STATUS_PING_FAILED,
    payload: status
}
}



// Status->Ping tab's thunk



export const getStatusPing = MAC => {
  return dispatch => {
    dispatch(setStatusPingFailed(false));
    dispatch(setStatusPingFetching(true));
    getDeviceInfo(API.getPing, MAC,API.getToken)
      .then(data => {
        dispatch(setStatusPing(data));
        
        dispatch(setStatusPingFetching(false));
        
      })
      .catch(error => {
        dispatch(setStatusPingSearchResult(MAC));
        dispatch(setStatusPingFailed(true));
      });
  };
};
