
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




export const chartOptions =(lang,color,title)=> {
  
  let options = {
    chart: {
      locales: localLang[lang],

      defaultLocale: lang,
      zoom: {
        enabled: false
      },
     
    },

    theme: {
      mode: "light",
      palette: color ? color : "palette1",
    },
    // title: {
    //   text: `To ${title}`,
    //   align: "left",
    //   margin: 10,
    //   offsetX: 0,
    //   offsetY: 0,
    //   floating: false,
    //   style: {
    //     fontSize: "16px",
    //     color: "#263238"
    //   }
    // },
    plotOptions: {
      bar: {
        columnWidth: "30%"
      }
    },
    toolbar: {
      tools: {
        selection: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight",
      width: 1
    },

    grid: {
      clipMarkers: false
    },
    tooltip: {
      followCursor: false,
      theme: "dark",

      onDatasetHover: {
        highlightDataSeries: false
      },
      x: {
        show: true,
        format: "dd.MM.yyyy, HH:mm"
        // formatter:(val)=>{return `${new Date(val).toLocaleDateString("uk-UA",{day:'numeric',month:'numeric', hour:'numeric',minute:'numeric'})}`}
      },

      y: {
        formatter: function(val) {
          return `${val} ms`;
        }
      }
    },
    xaxis: {
      type: "datetime",
      // min: minData
    },
    yaxis: {
      min: 0,
      tickAmount: 5,
      forceNiceScale: true,
      decimalsInFloat: 1,
      labels: {
        show: true,
        // minWidth: 1,
        // maxWidth: 22,
        // offsetX: 0
      }
    }
  };
  return options;
}