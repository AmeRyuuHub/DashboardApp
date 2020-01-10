import React from 'react';
import ReactApexChart from "react-apexcharts";
 
// const TestPingCardChart = props => {




//   let dataX = RouterChart
//     && RouterChart.map(item => {
//         return (+item.ts)    
        
//       })
//     ;

//   let dataYRouter = props.dataChart.router
//     && props.dataChart.router.map(item => {
//         return +item.rtt / 1000;
//       })
//     ;
//   let dataYPlatform = props.dataChart.platform
//     && props.dataChart.platform.map(item => {
//         return +item.rtt / 1000;
//       })
//     ;

//   let options = {
//     dataLabels: {
//       enabled: false
//     },
   
//       bar: {
//         horizontal: false,
        
      
//     },
//     stroke: {
//       curve: "smooth",
//       width: 2
//     },

//     grid: {
//       borderColor: "#e7e7e7",
//       row: {
//         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//         opacity: 0.5
//       },
     
//   },

//     xaxis: {
      
//       categories: dataX,
//       type: 'datetime',
//       tooltip: {
//         enabled: false
//       }
//       // labels: {
//       //   show: false
//       // }
//     },
//     yaxis: {
//       show: true,
     
//       showAlways: true,
//       min: 0,
//       forceNiceScale: true,
//       floating: true,
//       labels: {
//         show: true,
//         formatter: val => {
//           return val ? val.toFixed(2) : 1;
//         }
//       }
//     },
//     legend: {
//       position: "top",
//       horizontalAlign: "right",
//       floating: true,
//       offsetY: -25,
//       offsetX: -5
//     },
    
//   };
//   let series = [
//     {
//       name: "Router",
//       data: dataYRouter
//     },
//     {
//       name: "Platform",
//       data: dataYPlatform
//     }
//   ];

//   return (
    
//      correntMac ? <ReactApexChart
//         options={options}
//         series={series}
//         type="area"
//         height="350"
//       /> : <h5>Загрузите данные</h5>
    
//   );
// };
// export default TestPingCardChart;









function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

// The global window.Apex variable below can be used to set common options for all charts on the page
window.Apex = {
  
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight",
  
  },
  // toolbar: {
  //   tools: {
  //     selection: false
  //   }
  // },
  
  tooltip: {
    followCursor: false,
    theme: 'dark',
    
    onDatasetHover:{
      highlightDataSeries:true,
    },
    x: {
      show: true,
      format: "dd MM yyyy, HH:mm",
      // formatter:(val)=>{return `${new Date(val).toLocaleDateString("uk-UA",{day:'numeric',month:'numeric', hour:'numeric',minute:'numeric'})}`}
    },
    
    y: {
     
        formatter: function (val) {
          return `${val} ms`
        
      }
    },
    marker:{
      show: true,
      color: [function({ value }) {
        if (value < 1) {
            return '#7E36AF'
        } else {
            return '#D9534F'
        }
      }],

    }

  },
  
  
  yaxis: {
    min: 0,
          forceNiceScale: true,
          decimalsInFloat: 1, 
          labels:{
            show:true,
            minWidth: 0,
                      
  },
},
  xaxis: {
    ordinal: false,
    type: 'datetime',
    
  },
 

  
}







const TestPingCardChart =(props) =>{

  

    const series1 = [{
      name:"Router",
      data: props.dataChart ? props.dataChart.router.sort((a,b)=>{return +a.ts -(+b.ts)}).map(item => {
        return [ +(item.ts.slice(0,-1)+0),+item.rtt / 1000]
      }):generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60
      })
    }];
   
   
  
   const series = [{
     name:"Platform",
      data: props.dataChart ?props.dataChart.platform.sort((a,b)=>{return +a.ts -(+b.ts)}).map((item, index) => {
        return [+(item.ts.slice(0,-1)+0),+item.rtt / 1000 ]
      }) :generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 90
      })
    }];
    console.log(series1);
   const chartOptionsLine1 = {
      
      chart: {
     
        id: 'pr',
        group: 'social',
      },
     
    };
    
   const chartOptionsArea= {
      chart: {
       
        id: 'pp',
        group: 'social',
      },
     

    };
  




  return (
    


    <div id="wrapper">
      <div id="chart-line">
        <ReactApexChart type="bar" height="300"  options={chartOptionsLine1} series={series1}/>
      </div>

      

      {/* <div id="chart-area">
        <ReactApexChart type="bar" height="300"  options={chartOptionsArea} series={series}/>
      </div> */}
    </div>


  );
}


export default TestPingCardChart;
