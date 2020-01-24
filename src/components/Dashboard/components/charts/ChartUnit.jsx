import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartOptions } from './dataChart';




const ChartUnit = props => {
  
 
  let chartOpt=chartOptions("en", "red", props.title)
  let series = [
     {
       name: `Ping to ${props.title}`,
       data: props.data,
     }
   ];
 
  return (
      
        props.data &&   <ReactApexChart options={chartOpt}  series={series} type="area" height="300" />
                  
  );
};

export default ChartUnit;










