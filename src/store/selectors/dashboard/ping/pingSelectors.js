import { getStatusSearchMac } from "../status/statusSelectors";
import { createSelector } from 'reselect';

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
    (searchMac, ownMac, status) => {
      if (searchMac !== ownMac) {
        return null;
      }
  
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
    (searchMac, ownMac, router) => {
      if (searchMac !== ownMac) {
        return null;
      }
      let timeZone = new Date().getTimezoneOffset() * 60000;
      return router
        ? router
            .sort((a, b) => {
              return +a.ts - +b.ts;
            })
            .map(item => {
              return [+item.ts + timeZone, +item.rtt / 1000];
            })
        : null;
    }
  );
  
  export const getDataPingPlatform = createSelector(
    getStatusSearchMac,
    getPingSearchMac,
    getPingPlatform,
    (searchMac, ownMac, platform) => {
      if (searchMac !== ownMac) {
        return null;
      }
      let timeZone = new Date().getTimezoneOffset() * 60000;
      return platform
        ? platform
            .sort((a, b) => {
              return +a.ts - +b.ts;
            })
            .map(item => {
              return [+item.ts + timeZone, +item.rtt / 1000];
            })
        : null;
    }
  );
  