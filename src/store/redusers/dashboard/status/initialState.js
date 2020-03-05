export const initialState = {
  mac:null,
  searchResult: null,
  searchMacValue: null,
  searchStatus: null,
  isFetching: false,
  requestFailed: false,
  ping: {
    mac: null,
    router: null,
    platform: null,
    isFetching: false,
    requestFailed: null,
    routerFilter:null,
    platformFilter:null,
   
  },
  dvbc: {
    result: null,
    mac: null,
    frequencyList: null,
    isFetching: false,
    requestFailed: null,
    requestStatus: true
  }
};
