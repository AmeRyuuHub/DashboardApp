import React from "react";

import ReactApexChart from "react-apexcharts";
import { testChartOptions } from "./testData";
import { localization } from "./localization";
// import { chartOptions } from './dataChart';




const ChartUnit = props => {
  const {lang, data, title, langFatching} = props;
  const [value, setValue] = React.useState(false);
  const handleChange = (status) => {
    setValue(status);
  };

 React.useEffect(()=>{
 handleChange(true);
 
 },[lang]);
  
  // const chartOpt=testChartOptions(lang, "red",title)



  let nullOptions = {
    
      chart: {
        id:"chart",
          height: 350,
          
      },
      dataLabels: {
          enabled: false
      },
      
      title: {
          text: 'Ajax Example',
      },
      noData: {
        text: 'Loading...'
      }
    
  }

  let testOptions = {
    theme: {
      mode: "light",
      palette:  "palette1"
    },

    chart: {
      id:"mychart",
      //  locales: [localization[lang]],
      //  defaultLocale: lang,
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0
    },

    stroke: {
      curve: "straight",
      width: 1
    },

    yaxis: {
      min: 0,
      tickAmount: 5,
      forceNiceScale: true,
      decimalsInFloat: 1,
      labels: {
        show: true,
        minWidth: 1,
        maxWidth: 22,
        offsetX: 0
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: true
      }
    },
    tooltip: {
      shared: false,
      x: {
        show: true,
        format: "dd.MM.yyyy, HH:mm"
      },
      y: {
        formatter: function(val) {
          return `${val} ms`;
        }
      }
    }
  };

  let series = [
     {
       name: `Ping to ${title}`,
       data: data,
     }
   ];
 
   if (value) {setTimeout(() => {
    handleChange(false);
   }, 1);}

  return (
      
  
        !value && props.data ?   <ReactApexChart options={{...testOptions, chart: {
       locales: [{...localization[lang]}],
       defaultLocale: lang,
     
    }, }}  series={series} type="area" height="300" /> : null 
              
  );
};

export default ChartUnit;










