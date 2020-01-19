export const initialState = {
  mac:null,
  searchResult: null,
  searchMacValue: null,
  searchStatus: null,
  isFetching: false,
  requestFailed: false,
  ping: {
    mac: "",
    router: null,
    platform: null,
    isFetching: false,
    requestFailed: null,
    requestStatus: null
  },
  dvbc: {
    result: null,
    mac: "",
    frequencyList: null,
    isFetching: false,
    requestFailed: null,
    requestStatus: true
  }
};
