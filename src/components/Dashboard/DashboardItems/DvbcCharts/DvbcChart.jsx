import React from 'react';
//import Icon from '@mdi/react'
//import {mdiTelevisionPlay, mdiChartBar, mdiReplay} from '@mdi/js'

import ReactApexChart from "react-apexcharts";
   
 
const DvbcCharts = (props) => {



let frequency= props.list;
let level =props.data.map(item =>{return item.level});
let snr =props.data.map(item =>{return item.snr});


  let options= {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        	
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
      categories: frequency,
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
export default DvbcCharts;

        