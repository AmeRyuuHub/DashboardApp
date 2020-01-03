import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartOptions } from './dataChart';




const ChartUnit = props => {
  
 

  
  
  
  let chartOpt=chartOptions(props.startDate,props.lang, props.color, props.title)
  let series = [
     {
       name: `Ping to ${props.title}`,
       data: props.data,
     }
   ];
 
  return (
      
        props.data &&   <ReactApexChart options={chartOpt}  series={series} type="area" height="200" />
                  
  );
};

export default ChartUnit;










