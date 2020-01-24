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
  
  export const getStatusMac = state => {
    return state.status.mac;
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
                name: item.name === "model" && type === "MOBILE" ? "mobile" : item.name,
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
  

  // Status ->Ping tab

  export const getStatusPingFetching = state => {
    return state.status.ping.isFetching;
  };
  
  export const getStatusPinghMac = state => {
    return state.status.ping.mac;
  };
  
  export const getStatusPingFailed = state => {
    return state.status.ping.requestFailed;
  };

  export const getStatusPingRouterFilterValue = state => {
    return state.status.ping.routerFilter;
  };


  export const getStatusPingRouter = state => {
    return state.status.ping.router;
  };


  

 


  export const getDataStatusPingRouter = createSelector(
    getStatusMac,
    getStatusPinghMac,
    getStatusPingRouter,
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
              return [+item.ts , +item.rtt / 1000];
            })
        : null;
    }
  );

  const getStatusPingPeakPattern = state => {
    return state.content.pages.dashboard.ping.peakValues.langValues;
  };

  export const getStatusPingRouterWithFilter = createSelector(
    getStatusPingRouterFilterValue,
    getDataStatusPingRouter,
    (filter, data) => {
      
        return filter ? data.filter(item => item[0] >=filter[0] && item[0] <= filter[1] ): data;
    
    }
  );


  const getStatusValuesRouter = createSelector(
    getStatusPingRouterWithFilter,
    (data) => {
      if (data) {
        const maxValue = data.reduce((a, b) => {
          return typeof a === "object"
            ? Math.max(a[1], +b[1])
            : Math.max(a, +b[1]);
        });
        const minValue = data.reduce((a, b) => {
          return typeof a === "object"
            ? Math.min(a[1], +b[1])
            : Math.min(a, +b[1]);
        });

        const avgValue =
          data.reduce((a, b) => {
            return typeof a === "object" ? a[1] + b[1] : a + b[1];
          }) / data.length;
         const max = data.filter(item => +item[1] === maxValue)[0];
         const min =data.filter(item => +item[1] === minValue)[0];
         const avg =[`${avgValue.toFixed(2)} ms`, "-"];

        return ({
          max: [max[1], moment(+max[0]).format(
            "DD.MM.YYYY HH:mm"
          )],
          min: [min[1], moment(+min[0]).format(
            "DD.MM.YYYY HH:mm"
          )],
          avg: avg
        });
      }

      return { max: ["-", "-"], min: ["-", "-"], avg: ["-","-"] };
    }
  );



  export const getStatusPingPeakValues = createSelector(
    getStatusPingPeakPattern,
    getStatusValuesRouter,
    getUILang,
    (pattern, result,lang) => {
      return result
        ? pattern.map(item => ({
            ...item,
            text: item.text[lang],
            value: result[item.name][0],
            subValue: result[item.name][1],
            id: v4()
          }))
        : null;
    }
  );


  export const getDateArrayRouter = createSelector(
    getDataStatusPingRouter,
    (data) => {
    
        const firstDay = data ? +data[0][0]:null;
        const lastDay =  data ? +data[data.length - 1][0]:null;
        const first = firstDay - firstDay % 86400000;
        const culcArray = (arr, last) => {
          if (+arr[arr.length - 1] < +last) {
            arr.push(arr[arr.length - 1] + 86400000);
            return culcArray(arr, last);
          }
          return arr;
        };
      return  data ? culcArray([+first],lastDay):[firstDay, lastDay] ;
    }
  );





   

 



  
