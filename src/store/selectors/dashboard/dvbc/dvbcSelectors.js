import { getStatusSearchMac } from "../status/statusSelectors";
import { createSelector } from 'reselect';

// DVBC

export const getDvbcSearchMac = state => {
    return state.dvbc.mac;
  };
  
  export const getDvbcFetching = state => {
    return state.dvbc.isFetching;
  };
  
  export const getDvbcRequest = state => {
    return state.dvbc.requestStatus;
  };
  
  export const getDvbcRequestStatus = createSelector(
    getStatusSearchMac,
    getDvbcSearchMac,
    getDvbcRequest,
    (searchMac, ownMac, status) => {
      if (searchMac !== ownMac) {
        return null;
      }
      return status;
    }
  );
  
  export const getDvbcFreqList = state => {
    return state.dvbc.frequencyList;
  };
  
  export const getDvbcRequestFailed = state => {
    return state.dvbc.requestFailed;
  };
  
  export const getDvbc = state => {
    return state.dvbc.result;
  };
  
  export const getDataDvbcFreq = createSelector(
    getStatusSearchMac,
    getDvbcSearchMac,
    getDvbcFreqList,
    getDvbc,
    (searchMac, ownMac, list, data) => {
      if (searchMac !== ownMac) {
        return null;
      }
  
      let newArray = data
        ? list.map(item => {
            let newItem = data
              .filter(items => item === items.frequency)
              .sort((a, b) => {
                return +b.ts - +a.ts;
              });
            return {
              level: newItem[0].level,
              snr: newItem[0].snr,
              timeList: newItem
            };
          })
        : null;
  
      return newArray;
    }
  );