
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@material-ui/core/styles';








 const PieChart = (props) => {
       
  const theme = useTheme();
  const colors={
    online: theme.palette.success.main,
    offline: theme.palette.grey[200]};
   
          
    const  series = [75,25];
     const  options = {
              chart: {
                width:'300px',
                type: 'donut',
              },
              legend: {
                position: 'right'
              },


              // plotOptions: {
              //   pie: {
                  
                  
              //     donut: {
              //       size: '65%',
              //       background: 'transparent',
              //       labels: {
              //         show: false,
              //         name: {
              //           show: true,
              //           fontSize: '22px',
              //           fontFamily: 'Helvetica, Arial, sans-serif',
              //           color: undefined,
              //           offsetY: -10
              //         },
              //         value: {
              //           show: false,
              //           fontSize: '16px',
              //           fontFamily: 'Helvetica, Arial, sans-serif',
              //           color: undefined,
              //           offsetY: 16,
              //           formatter: function (val) {
              //             return val
              //           }
              //         },
              //         total: {
              //           show: true,
              //           showAlways: true,
              //           label: 'Online',
              //           color: '#373d3f',
              //           formatter: function (w) {
              //             return w.globals.seriesTotals.reduce((a, b) => {
              //               return a + b
              //             }, 0)
              //           }
              //         }
              //       }
              //     }, 
              //   },     
              
              // },





              colors: [colors.online, colors.offline],
              plotOptions: {
                pie: {
                   
                  donut: {
                    labels: {
                      show: true,
                     
                      total: {
                        showAlways: true,
                        show: true,
                        label:'Online',
                        formatter: function (w) {
                                      return w.globals.seriesTotals[0]
                                    }
                      }
                    }
                  }
                }
              },
              labels: ['Online','Offline'],
              dataLabels: {
                enabled: false,
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: '300px'
                  },
                  // legend: {
                  //   position: 'right'
                  // },
                 
                }
              }]
            };
          

      

       
          return (
            


      <div id="chart" style={{maxWidth:'300px'}}>
  <ReactApexChart options={options} series={series} type="donut"  />
</div>
    


          );
        }
      
export default PieChart;

