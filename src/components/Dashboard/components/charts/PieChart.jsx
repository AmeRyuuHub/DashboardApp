
import React from 'react';
import ReactApexChart from 'react-apexcharts';

 const PieChart = (props) => {
       

   
          
    const  series = [75, 25];
     const  options = {
              chart: {
                width: '100%',
                type: 'pie',
              },
              labels: ['Online', 'Offline'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 400
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            };
          

      

       
          return (
            


      <div id="chart">
  <ReactApexChart options={options} series={series} type="pie"  />
</div>
    


          );
        }
      
export default PieChart;


    