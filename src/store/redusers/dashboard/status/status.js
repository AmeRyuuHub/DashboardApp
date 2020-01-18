
import {C} from '../../ActionsNameList'
import {API} from '../../../../API/Apis';
import { stopSubmit,  startSubmit} from 'redux-form'
import { initialState } from './initialState';
import { getDeviceInfo } from "../../../../common/ReduxThunk";

export default function status(state = initialState, action) {
  switch (action.type) {
    case C.SET_STATUS_BY_MAC:
      if ((!state.searchResult)|| state.searchResult.last_report!==action.payload.last_report || state.searchResult.mac!==action.payload.mac){
      return {
        ...state,
          searchResult: action.payload
      
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

export  function setInfoFailed(status){
  return {
      type:C.SET_STATUS_BY_MAC_FAILED,
      payload: status
  }
}

export const getStbStatusByMac = MAC => {
  return dispatch => {
    dispatch(startSubmit("editMac"));
    dispatch(setStartSearch(MAC));
    getDeviceInfo(API.getInfoByMac, MAC,API.getToken)
      .then(data => {
        dispatch(setInfoByMac(data.status));
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
        dispatch(setInfoFailed(true));
      });
  };
};




//old version of thunk

// export const getStbStatusByMac = MAC => {
//   return dispatch => {
//     dispatch(startSubmit("editMac"));
//     dispatch(setStartSearch(MAC));
//     API.getInfoByMac(MAC)
//       .then(data => {
//         dispatch(setFetching(false));
//         dispatch(stopSubmit("editMac",(!data.status) && {macInput:"This MAC is not found"}));
//         dispatch(setSearchResult(data.status));
//         data.status && dispatch(setInfoByMac(data.results[0]));
//       })
//       .catch(() => {
//         dispatch(setFetching(false));
//         dispatch(stopSubmit("editMac",{macInput:"Something wrong, try latter..."}));
//         dispatch(setSearchResult(false));
//         dispatch(setInfoFailed(true));
//       });
//   };
// };