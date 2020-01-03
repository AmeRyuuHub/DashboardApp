import { C } from "../ActionsNameList";
import { API } from "../../../API/Apis";
import { initialState } from "./initialState";
import { getDeviceInfo } from "../../../common/ReduxThunk";

export default function DvbcByMac(state = initialState, action) {
  switch (action.type) {
    case C.SET_DVBC_BY_MAC:
      return {
        ...state,
        result: action.payload,
        frequencyList: [
          ...new Set(
            action.payload.map(item => {
              return item.frequency;
            })
          )
        ].sort(),
        mac: action.payload[0].mac
      };

    case C.SET_DVBC_INFO_SEARCH_START:
      return { ...state, requestStatus: null, requestFailed: false };
    case C.SET_DVBC_REQUEST_RESULT:
      return { ...state, requestStatus: action.payload };
    case C.SET_DVBC_FETCHING:
      return { ...state, isFetching: action.payload };

    case C.SET_DVBC_TOGGLE_BUTTON:
      return { ...state, buttonDisabled: action.payload };

    case C.SET_DVBC_BY_MAC_FAILED:
      return { ...state, requestFailed: action.payload };

    default:
      return state;
  }
}

export function setDvbcByMac(result) {
  return {
    type: C.SET_DVBC_BY_MAC,
    payload: result
  };
}

export function setDvbcRequestStatus(status) {
  return {
    type: C.SET_DVBC_REQUEST_RESULT,
    payload: status
  };
}

export function setDvbcFetching(status) {
  return {
    type: C.SET_DVBC_FETCHING,
    payload: status
  };
}
export function setDvbcButtonStatus(status) {
  return {
    type: C.SET_DVBC_TOGGLE_BUTTON,
    payload: status
  };
}
export function setDvbcFailed(status) {
  return {
    type: C.SET_DVBC_BY_MAC_FAILED,
    payload: status
  };
}

export const getDvbcInfoByMac = MAC => {
  return dispatch => {
    dispatch(setDvbcFailed(false));
    dispatch(setDvbcFetching(true));
    getDeviceInfo(API.getDvbcInfo, MAC, API.getToken)
      .then(data => {
        dispatch(setDvbcFetching(false));
        if (data.status) {
          dispatch(setDvbcRequestStatus(true));
          dispatch(setDvbcByMac(data.results));
        } else {
          dispatch(setDvbcRequestStatus(false));
        }
      })
      .catch(error => {
        dispatch(setDvbcRequestStatus(false));
        dispatch(setDvbcFetching(false));
        dispatch(setDvbcFailed(true));
      });
  };
};
