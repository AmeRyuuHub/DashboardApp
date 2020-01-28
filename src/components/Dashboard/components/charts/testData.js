
const localLang ={
    en:[{
      "name": "en",
      "options": {
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "toolbar": {
            "exportToSVG": "Download SVG",
            "exportToPNG": "Download PNG",
            "menu": "Menu",
            "selection": "Selection",
            "selectionZoom": "Selection Zoom",
            "zoomIn": "Zoom In",
            "zoomOut": "Zoom Out",
            "pan": "Panning",
            "reset": "Reset Zoom"
        }
      }
    }] ,
      ru:[{
        "name": "ru",
        "options": {
          "months": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
          "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
          "days": ["Воскрессенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
          "shortDays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          "toolbar": {
              "exportToSVG": "Сохранить SVG",
              "exportToPNG": "Сохранить PNG",
              "menu": "Меню",
              "selection": "Selection",
              "selectionZoom": "Selection Zoom",
              "zoomIn": "Увеличить",
              "zoomOut": "Уменьшить",
              "pan": "Panning",
              "reset": "Сбросить"
          }
        }
      }] ,
    ua:[{
      "name": "ua",
      "options": {
        "months": ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],
        "shortMonths": ["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],
        "days": ["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],
        "shortDays": ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        "toolbar": {
            "exportToSVG": "Зберегти SVG",
            "exportToPNG": "Зберегти PNG",
            "menu": "Меню",
            "selection": "Selection",
            "selectionZoom": "Selection Zoom",
            "zoomIn": "Збільшити",
            "zoomOut": "Зменшити",
            "pan": "Panning",
            "reset": "Оновити"
        }
      }
    }],
    
    };
    
    
    
    
    export const testChartOptions =(lang,color,title)=> {
      
   

let testOptions=  {

   
  
      theme: {
        mode: "light",
        palette: color ? color : "palette1",
      },



    chart: {
        locales: localLang[lang],
        defaultLocale: lang,
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
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
      type: 'datetime',
      labels: {
        datetimeUTC:true,
      
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




      return testOptions;
    }
    
    
    
    
    