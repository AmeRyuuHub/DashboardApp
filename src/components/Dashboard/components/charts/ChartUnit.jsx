import React from "react";
import ReactApexChart from "react-apexcharts";


const ChartUnit = props => {
  const { lang, data, chartId, color } = props;

  let options = {
    theme: {
      mode: "light",
      palette: color ? color :"palette1",
    },

    chart: {
      id: chartId,
      locales: [
        {
          name: "en",
          options: {
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ],
            shortMonths: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            days: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            toolbar: {
              exportToSVG: "Download SVG",
              exportToPNG: "Download PNG",
              exportToCSV: "Download CSV",
              menu: "Menu",
              selection: "Selection",
              selectionZoom: "Selection Zoom",
              zoomIn: "Zoom In",
              zoomOut: "Zoom Out",
              pan: "Panning",
              reset: "Reset Zoom"
            }
          }
        },
        {
          name: "ru",
          options: {
            months: [
              "Январь",
              "Февраль",
              "Март",
              "Апрель",
              "Май",
              "Июнь",
              "Июль",
              "Август",
              "Сентябрь",
              "Октябрь",
              "Ноябрь",
              "Декабрь"
            ],
            shortMonths: [
              "Янв",
              "Фев",
              "Мар",
              "Апр",
              "Май",
              "Июн",
              "Июл",
              "Авг",
              "Сен",
              "Окт",
              "Ноя",
              "Дек"
            ],
            days: [
              "Воскресенье",
              "Понедельник",
              "Вторник",
              "Среда",
              "Четверг",
              "Пятница",
              "Суббота"
            ],
            shortDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            toolbar: {
              exportToSVG: "Сохранить SVG",
              exportToPNG: "Сохранить PNG",
              exportToCSV: "Сохранить CSV",
              menu: "Меню",
              selection: "Выбор",
              selectionZoom: "Выбор с увеличением",
              zoomIn: "Увеличить",
              zoomOut: "Уменьшить",
              pan: "Перемещение",
              reset: "Сбросить увеличение"
            }
          }
        },
        {
          name: "ua",
          options: {
            months: [
              "Січень",
              "Лютий",
              "Березень",
              "Квітень",
              "Травень",
              "Червень",
              "Липень",
              "Серпень",
              "Вересень",
              "Жовтень",
              "Листопад",
              "Грудень"
            ],
            shortMonths: [
              "Січ",
              "Лют",
              "Бер",
              "Кві",
              "Тра",
              "Чер",
              "Лип",
              "Сер",
              "Вер",
              "Жов",
              "Лис",
              "Гру"
            ],
            days: [
              "Неділя",
              "Понеділок",
              "Вівторок",
              "Середа",
              "Четвер",
              "П'ятниця",
              "Субота"
            ],
            shortDays: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            toolbar: {
              exportToSVG: "Зберегти SVG",
              exportToPNG: "Зберегти PNG",
              exportToCSV: "Зберегти CSV",
              menu: "Меню",
              selection: "Вибір",
              selectionZoom: "Вибір із збільшенням",
              zoomIn: "Збільшити",
              zoomOut: "Зменшити",
              pan: "Переміщення",
              reset: "Скинути збільшення"
            }
          }
        }
      ],
      defaultLocale: lang,
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
    noData: {
      text: "Loading..."
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
      name: `Ping`,
      data: data
    }
  ];

  return (
    data && (
      <ReactApexChart
        options={{ ...options }}
        series={series}
        type="area"
        height="300"
      />
    )
  );
};

export default ChartUnit;










