import { getUILang } from "../../appInit/initSelectors";
import { createSelector } from 'reselect';
import { v4 } from 'uuid';
import  moment  from 'moment';

// Selecting Status data


// SEACH FORM content
const getSearchForm = state => {
    return state.content.pages.dashboard.searchBlock;
  };
  
  export const getSearchFormWithLang = createSelector(
    getUILang,
    getSearchForm,
    (lang, data) => {
      return data[lang];
    }
  );


// Getting content/pattern for Dashboard report

const getStatusPattern = state => {
    return state.content.pages.dashboard.status.langValues;
  };
  
  const getDetailsPattern = state => {
    return state.content.pages.dashboard.details.langValues;
  };
  
  const getConnectPattern = state => {
    return state.content.pages.dashboard.connect.langValues;
  };
  
  // Getting report's status
  
export const getStatusFetching = state => {
    return state.status.isFetching;
  };
  
  export const getStatusSearchMac = state => {
    return state.status.searchMacValue;
  };
  
  export const getStatusSearchStatus = state => {
    return state.status.searchStatus;
  };
  
  // Getting type of device
  export const getStatusStbType = state => {
    return !state.status.searchResult ? null : state.status.searchResult.type_m;
  };
  
  export const getStatusLastReport = state => {
    return !state.status.searchResult
      ? null
      : moment(+state.status.searchResult.last_report).format(
          "DD.MM.YYYY HH:mm"
        );
  };
  
  const getStatusResult = state => {
    return state.status.searchResult;
  };
  
  export const getStatusStbModel = state => {
    return !state.status.searchResult ? null : state.status.searchResult.model;
  };
  
  export const getStatusValueRow = createSelector(
    getStatusPattern,
    getStatusResult,
    getStatusStbType,
    getUILang,
    (pattern, result, type,lang) => {
      return result
        ? pattern.map(item => ({
            ...item,
            text: item.text[lang],
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
    // getStatusStbType,
    getUILang,
    (pattern, result,lang) => {
      return result
        ? pattern.map(item => ({
            ...item,
            text: item.text[lang],
            value:(item.good.value )? (item.good.value===result[item.name])? item.startWith +item.good.text+item.endWith :item.startWith +item.good.bad+item.endWith :item.startWith +result[item.name]+item.endWith,
  
            id: v4()
          }))
        : null;
    }
  );
  
  export const getConnectValue = createSelector(
    getConnectPattern,
    getStatusResult,
    // getStatusStbType,
    getUILang,
    (pattern, result,lang) => {
      return result
        ? pattern.map(item => ({
            ...item,
            text: item.text[lang],
            value: result[item.name],
  
            id: v4()
          }))
        : null;
    }
  );
  