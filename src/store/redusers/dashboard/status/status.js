
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


export  function setStatusPing(boxinfo){
  return { type:C.SET_STATUS_PING, payload: boxinfo}
}



export  function setStatusPingSearchResult(status){
  return { type:C.SET_STATUS_SEARCH_RESULT, payload: status }
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


export const getDeviceStatusByMac = MAC => {
  return dispatch => {
    dispatch(startSubmit("editMac"));
    dispatch(setStartSearch(MAC));
    getDeviceInfo(API.getInfoByMac, MAC,API.getToken)
      .then(data => {
        dispatch(setInfoByMac(data));
        dispatch(setSearchResult(true));
        dispatch(stopSubmit("editMac"));
        
      })
      .catch(error => {
        dispatch(setSearchResult(false));
        dispatch(
          stopSubmit(
            "editMac",
            error.response.status === 404
              ? { macInput: "Device not found." }
              : { macInput: "Something wrong, try latter..." }
          )
        );
        dispatch(setStatusFailed(true));
      });
  };
};




// export  function setPingByMac(status){
//   return {
//       type:C.SET_PING_BY_MAC,
//       payload: status
//   }
// }

// export  function setPingFetching(status){
//   return {
//       type:C.SET_PING_FETCHING,
//       payload: status
//   }
// }
// export  function setPingRequestStatus(status){
//   return {
//       type:C.SET_PING_REQUEST_RESULT,
//       payload: status
//   }
// }
// export  function setPingButtonStatus(status){
//   return {
//       type:C.SET_PING_TOGGLE_BUTTON,
//       payload: status
//   }
// }
// export  function setPingFailed(status){
//   return {
//       type:C.SET_PING_BY_MAC_FAILED,
//       payload: status
//   }
// }


// // ThunkCreators
// export const getPingInfoByMac = MAC => {
// return dispatch => {
//   dispatch(setPingFailed(false));
//   dispatch(setPingFetching(true));
//   getDeviceInfo(API.getPing, MAC,API.getToken)
  
//     .then(data => {
//       dispatch(setPingFetching(false));
//       dispatch(setPingRequestStatus(true));
//       dispatch(setPingByMac(data));
//     })
//     .catch(error => {
//       dispatch(setPingRequestStatus(false));
//       dispatch(setPingFetching(false));
//       dispatch(setPingFailed(true));
      
//     });
// };
// };
