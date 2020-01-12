import { v4 } from "uuid";
import { createSelector } from "reselect";

// status 
export const getStatusFetching = state => {
  return state.stbInfo.isFetching;
};

export const getStatusSearchMac = state => {
  return state.stbInfo.searchMacValue;
};

export const getStatusSearchStatus = state => {
  return state.stbInfo.searchStatus;
};

export const getStatusStbType = state => {
  return !state.stbInfo.searchResult
    ? null
    : state.stbInfo.searchResult.type_m;
};

export const getStatusLastReport = state => {
  return !state.stbInfo.searchResult
    ? null
    : state.stbInfo.searchResult.last_report
};

 const getStatusResult = state => {
   return state.stbInfo.searchResult;
 };

 const getStatusPattern = state => {
   return state.stbInfo.statusPattern;
 };


 const getDetailsPattern = state => {
   return state.stbInfo.detailsPattern;
 };

 const getConnectPattern = state => {
   return state.stbInfo.connectPattern;
 };

 export const getStatusStbModel = state => {
   return !state.stbInfo.searchResult ? null : state.stbInfo.searchResult.model;
 };

export const getStatusValueRow = createSelector(
  getStatusPattern,
  getStatusResult,
  getStatusStbType,
  (pattern, result, type) => {
    return result
      ? pattern.map(item => ({
          ...item,
          value:
            item.name === "model" && type !== "MOBILE"
              ? ` ${type} ${result[item.name]}`
              : result[item.name],
          status:
            item.name === "version"
              ? result[item.name] === item.good[result.model] && "success"
              : result[item.name] === item.good
              ? "success"
              : result[item.name] === item.bad
              ? "danger"
              : "",
          id: v4()
        }))
      : null;
  }
);


export const getDetailsValue = createSelector(
  getDetailsPattern,
  getStatusResult,
  getStatusStbType,
  (pattern, result, type) => {
    return result
      ? pattern.map(item => ({
          ...item,
          value: ((item.name === "cpu" || item.name === "hdmi") && type==="MOBILE")? "":result[item.name],
        
            id:v4(),
        }))
      : null;
  }
);




export const getConnectValue = createSelector(
  getConnectPattern,
  getStatusResult,
  getStatusStbType,
  (pattern, result, type) => {
    return result
      ? pattern.map(item => ({
          ...item,
          value: ((item.name === "cpu" || item.name === "hdmi") && type==="MOBILE")? "":result[item.name],
          
            id:v4(),
        }))
      : null;
  }
);

// Ping

export const getPingSearchMac = state => {
  return state.ping.mac;
};

export const getPingFetching = state => {
  return state.ping.isFetching;
};

export const getPingRequest = state => {
  return state.ping.requestStatus;
};

export const getPingRequestStatus = createSelector(
  getStatusSearchMac,
  getPingSearchMac,
  getPingRequest,
  (searchMac, ownMac,status) => {
if (searchMac !== ownMac) {return null}

  return status;
  }
);

export const getPingRequestFailed = state => {
  return state.ping.requestFailed;
};

export const getPingRouter = state => {
  return state.ping.router;
};
export const getPingPlatform = state => {
  return state.ping.platform;
};
export const getDataPingRouter = createSelector(
  getStatusSearchMac,
  getPingSearchMac,
  getPingRouter,
  (searchMac, ownMac,router) => {
if (searchMac !== ownMac) {return null}
let timeZone = new Date().getTimezoneOffset() * 60000;
  return router
      ? router.sort((a, b) => {
        return +a.ts - +b.ts;
      }).map(item =>{ return [+item.ts+timeZone,+item.rtt/1000]})
      : null;
  }
);

export const getDataPingPlatform = createSelector(
  getStatusSearchMac,
  getPingSearchMac,
  getPingPlatform,
  (searchMac, ownMac,platform) => {
if (searchMac !== ownMac) {return null}
let timeZone = new Date().getTimezoneOffset() * 60000;
  return platform
      ? platform.sort((a, b) => {
        return +a.ts - +b.ts;
      }).map(item =>{ return [+item.ts+timeZone,+item.rtt/1000]})
      : null;
  }
);

   
  

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
  (searchMac, ownMac,status) => {
if (searchMac !== ownMac) {return null}
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
  (searchMac, ownMac,list,data) => {
if (searchMac !== ownMac) {return null}

let newArray = data
  ? list.map(item => {
      let newItem = data
        .filter(items => item === items.frequency)
        .sort((a, b) => {
          return +b.ts - +a.ts;
        });
      return { level: newItem[0].level, snr: newItem[0].snr, timeList:newItem};
    })
  : null;
 
return newArray
});

 


   