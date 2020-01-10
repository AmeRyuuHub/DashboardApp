import React from 'react';
//import Icon from '@mdi/react'
//import {mdiTelevisionPlay, mdiChartBar, mdiReplay} from '@mdi/js'

import ReactApexChart from "react-apexcharts";
   
 
const DvbcTimeChart = (props) => {



// let frequency= props.list[0];
let time = props.data[0].timeList.map(item =>{return +item.ts});
let level =props.data[0].timeList.map(item =>{return +item.level});
let snr =props.data[0].timeList.map(item =>{return +item.snr});


  let options= {
    plotOptions: {
      bar: {
        horizontal: false,
        	
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: time,
      type: "datetime",
    },
    yaxis: {
      show: true,
      
      labels: {
          show: true,
          
          
          formatter: (val) => { return val },
      },
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        }
      }
    }
  };
  let series =[{
    name: 'level',
    data: level
  }, {
    name: 'snr',
    data: snr
  }, ];

 
return (

                
        <ReactApexChart options={options} series={series} type="bar" height="350" />
      

)

}
export default DvbcTimeChart;
    ;

        