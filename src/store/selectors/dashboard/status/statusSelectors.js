import { getUILang } from "../../appInit/initSelectors";
import { createSelector } from "reselect";
import { v4 } from "uuid";
import moment from "moment";

const culcArray = (arr, last, time) => {
  if (+arr[arr.length - 1] < +last) {
    arr.push(+arr[arr.length - 1] + time);
    return culcArray(arr, last, time);
  }

  return arr;
};

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
    : moment(+state.status.searchResult.last_report).format("DD.MM.YYYY HH:mm");
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
  (pattern, result, type, lang) => {
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
          name:
            item.name === "model" && type === "MOBILE" ? "mobile" : item.name,
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
  (pattern, result, lang) => {
    return result
      ? pattern.map(item => ({
          ...item,
          text: item.text[lang],
          value: item.good.value
            ? item.good.value === result[item.name]
              ? item.startWith + item.good.text + item.endWith
              : item.startWith + item.good.bad + item.endWith
            : item.startWith + result[item.name] + item.endWith,

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
  (pattern, result, lang) => {
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



// Status -> Ping Tab -> Router info

export const getStatusPingRouterFilterValue = state => {
  return state.status.ping.routerFilter;
};
 const getStatusPingRouter = state => {
  return state.status.ping.router;
};


export const getStatusPingPlatformFilterValue = state => {
  return state.status.ping.platformFilter;
};
 const getStatusPingPlatform = state => {
  return state.status.ping.platform;
};

const getStatusPingPeakPattern = state => {
  return state.content.pages.dashboard.ping.peakValues.langValues;
};

const culcChart = data => {
  let chart = [];
  Object.keys(data).forEach((item) => {
    chart = [...chart, [+item, +data[item]]];
    if (!data[+item + 900000]) {
      chart = [...chart, [+item + 900000, null]];
    }
  });

  return chart;
};

const gettingDataStatusPing = inputData =>
  createSelector(
    getStatusMac,
    getStatusPinghMac,
    inputData,
    (searchMac, ownMac, data) => {
      if (searchMac !== ownMac || data === null) {
        return null;
      }
      let sortState = data.sort((a, b) => {
        return +a.ts - +b.ts;
      });
      let currentData = {};
      sortState.forEach(item => {
        currentData = {
          ...currentData,
          [Math.floor(+item.ts / 60000) * 60000]: +item.rtt / 1000
        };
      });

      return culcChart(currentData);
    }
  );



export const getDataStatusPingRouter = gettingDataStatusPing(getStatusPingRouter);
export const getDataStatusPingPlatform = gettingDataStatusPing(getStatusPingPlatform);




 const gettingDateArray = inputData =>
   createSelector(inputData, data => {
     const firstDay = data ? +data[0][0] : null;
     const lastDay = data ? +data[data.length - 1][0] : null;
     const first = firstDay - (firstDay % 86400000);
     return data ? culcArray([+first], lastDay, 86400000) : [firstDay, lastDay];
   });


export const getDateArrayRouter = gettingDateArray(getDataStatusPingRouter);
export const getDateArrayPlatform = gettingDateArray(getDataStatusPingPlatform);


 
const gettingStatusPingWithFilter = (inputFilter, inputData) =>
  createSelector(inputFilter, inputData, (filter, data) => {
    return filter
      ? data.filter(item => item[0] >= filter[0] && item[0] <= filter[1])
      : data;
  }); 

export const getStatusPingRouterWithFilter = gettingStatusPingWithFilter(
    getStatusPingRouterFilterValue,
    getDataStatusPingRouter
  );

  export const getStatusPingPlatformWithFilter = gettingStatusPingWithFilter(
    getStatusPingPlatformFilterValue,
    getDataStatusPingPlatform
  );




  const gettingStatusValues = (inputFilter, inputData) =>(
    createSelector(
      inputFilter,
      inputData,
      (filter, data) => {
        if (data) {
          let maxValue = data.reduce((a, b) => {
            return typeof a === "object"
              ? Math.max(a[1], +b[1])
              : Math.max(a, +b[1]);
          });
          let minValue = data.reduce((a, b) => {
            if (b[1]) {
              return typeof a === "object"
                ? Math.min(a[1], +b[1])
                : Math.min(a, +b[1]);
            }
            return a;
          });
    
          let avgValue =
            data.reduce((a, b) => {
              return typeof a === "object" ? a[1] + b[1] : a + b[1];
            }) /
            (data.length - data.filter(item => item[1] === null).length);
          let avgTime = filter ? (filter[1] - filter[0]) / 86400000 : 7;
          let max = data.filter(item => +item[1] === maxValue)[0];
          let min = data.filter(item => +item[1] === minValue)[0];
          let avg = [
            `${avgValue.toFixed(2)} ms`,
            `${avgTime} ${avgTime > 1 ? "days" : "day"}`
          ];
          let allWorkTime = data.reduce((a, b, index, arr) => {
            if (index !== arr.length - 1 && b[1] && arr[index + 1][1]) {
              return a + 900000;
            }
            return a;
          }, 0);
          return {
            max: [max[1], moment(+max[0]).format("DD.MM.YYYY HH:mm")],
            min: [min[1], moment(+min[0]).format("DD.MM.YYYY HH:mm")],
            avg: avg,
            time: [
              `~${
                filter
                  ? Math.ceil((allWorkTime / (filter[1] - filter[0])) * 100)
                  : Math.ceil((allWorkTime / 604800000) * 100)
              } %`,
              `~${Math.floor(allWorkTime / 3600000)} h ${Math.floor(
                (allWorkTime % 3600000) / 60000
              )} m`
            ]
          };
        }
    
        return {
          max: ["-", "-"],
          min: ["-", "-"],
          avg: ["-", ""],
          time: ["-", ""]
        };
      }
    )
  ); 
  

  const getStatusValuesRouter = gettingStatusValues(
    getStatusPingRouterFilterValue,
    getStatusPingRouterWithFilter
  );

  const getStatusValuesPlatform = gettingStatusValues(
    getStatusPingPlatformFilterValue,
    getStatusPingPlatformWithFilter
  );





const gettingStatusPingPeakValues = (inputPattern, inputValues, inputLang) =>
  createSelector(
    inputPattern,
    inputValues,
    inputLang,
    (pattern, result, lang) => {
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


export const getStatusPingRouterPeakValues = gettingStatusPingPeakValues(
  getStatusPingPeakPattern,
  getStatusValuesRouter,
  getUILang
);

export const getStatusPingPlatformPeakValues = gettingStatusPingPeakValues(
  getStatusPingPeakPattern,
  getStatusValuesPlatform,
  getUILang
);

