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
              return [+item.ts + timeZone, +item.rtt / 1000];
            })
        : null;
    }
  );




 
  export const getMaxValueRouter = createSelector(
    getDataStatusPingRouter,
    data => {
      const maxValue = data
        ? data.reduce((a, b) => {
          return ( typeof(a) === "object") ? Math.max(a[1], +b[1]) : Math.max(a, +b[1]);
          })
        : null;
     
      return maxValue ? data.filter(item =>( +item[1] === maxValue))[0]:[0,0];
    }
  );

  export const getMinValueRouter = createSelector(
    getDataStatusPingRouter,
    data => {
      const minValue = data
        ? data.reduce((a, b) => {
          return ( typeof(a) === "object") ? Math.min(a[1], +b[1]) : Math.min(a, +b[1]);
          })
        : null;
     
      return minValue ? data.filter(item =>( +item[1] === minValue))[0]:[0,0];
    }
  );

  export const getAvgValueRouter = createSelector(
    getDataStatusPingRouter,
    (data) => {
      const sum = data
        ? data.reduce((a, b) => {
          return ( typeof(a) === "object") ? a[1] + b[1] : a + b[1];
          })
        : null;
     
      return sum ? sum/data.length:0;
    }
  );




  // 1579110783
  // 1579715583

  const culcArray = (first, last) => {
    let arr = typeof(first==='array') ? [...first]: [first];
    console.log(arr);
    if (+arr[arr.length - 1] < +last) {
      arr.push(
        +moment(arr[arr.length - 1]).add(1, 'days')
      );
      return culcArray(arr, last);
    }
    return arr;
  };



// const result = culcArray(firstDay,lastDay);
// console.log('result=', result);


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





   

 



  
