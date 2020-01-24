import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@material-ui/core/styles";

const PieChart = props => {
  const theme = useTheme();
  const colors = {
    online: theme.palette.success.main,
    offline: theme.palette.grey[300]
  };

  const series = [75, 25];
  const options = {
    chart: {
      width: "300px",
      type: "donut"
    },
    legend: {
      position: "right"
    },


    colors: [colors.online, colors.offline],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,

            total: {
              showAlways: true,
              show: true,
              label: "Online",
              formatter: function(w) {
                return w.globals.seriesTotals[0];
              }
            }
          }
        }
      }
    },
    labels: ["Online", "Offline"],
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "300px"
          }
          // legend: {
          //   position: 'right'
          // },
        }
      }
    ]
  };

  return (
    <div id="chart" style={{ maxWidth: "300px",margin: 'auto' }}>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default PieChart;
