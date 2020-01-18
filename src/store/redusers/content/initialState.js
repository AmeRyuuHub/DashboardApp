export const initialState = {
  app:{title:"tv monitoring", logo:"/img/logo-dark.svg"},
         languages: [
           { name: "ru", value: "Руc" },
           { name: "ua", value: "Укр" },
           { name: "en", value: "Eng" }
         ],
         routs: {
           menu: [
             {
               name: "home",
               endPoint: "/",
               value: { ru: "На главную", ua: "На головну", en: "Home" },
               role: "1"
             },

             {
               name: "dashboard",
               endPoint: "/dashboard",
               value: { ru: "Dashboard", ua: "Dashboard", en: "Dashboard" },
               role: "1",
               subLinks: [
                 {
                   name: "status",
                   endPoint: "/dashboard/status",
                   value: { ru: "Статус", ua: "Статус", en: "Status" },
                   role: "1"
                 },
                 {
                   name: "ping",
                   endPoint: "/dashboard/ping",
                   value: { ru: "Пинг", ua: "Пінг", en: "Ping" },
                   role: "1"
                 },
                 {
                   name: "dvbc",
                   endPoint: "/dashboard/dvbc",
                   value: { ru: "DVB-C", ua: "DVB-C", en: "DVB-C" },
                   role: "1"
                 }
               ]
             },

             {
               name: "reports",
               endPoint: "/reports",
               value: { ru: "Отчёты", ua: "Звіти", en: "Reports" },
               role: "2"
             },

             {
               name: "users",
               endPoint: "/users",
               value: { ru: "Пользователи", ua: "Користувачі", en: "Users" },
               role: "3"
             },
             {
               name: "about",
               endPoint: "/about",
               value: { ru: "О проекте", ua: "Про проект", en: "About" },
               role: "1"
             }
           ],
           options: [
             {
               name: "profile",
               endPoint: "/profile",
               value: { ru: "Профиль", ua: "Профіль", en: "Profile" },
               role: "1",
               disabled: false
             },

              {
                name: "settings",
                endPoint: "/settings",
                value: { ru: "Настройки", ua: "Налаштування", en: "Settings" },
                role: "1",
                disabled: true
              },

             {
               name: "logout",
               endPoint: "/",
               value: { ru: "Выйти", ua: "Вийти", en: "Log Out" },
               role: "1",
               disabled: false
             }
           ],
           auth: {
             name: "auth",
             endPoint: "/auth",
             value: { ru: "Войти", ua: "Увійти", en: "Sign In" },
             role: "1",
             disabled: false
           }
         },
         pages: {
           dashboard: {
             main: {
               header: {
                 ru: {
                   title: "Элементы панели",
                   subTitle: "Выберите нужный вам вариант."
                 },
                 ua: {
                   title: "Елементи панелі",
                   subTitle: "Виберіть потрібний варіант"
                 },
                 en: {
                   title: "Dashboard items.",
                   subTitle: "Choose the option you need."
                 }
               },
               options: [
                 {
                   link: "/dashboard/status",
                   imgUrl: "/img/dashboard/dashboard_status.svg",
                   langValues: {
                     ru: {
                       title: "Статус устройства",
                       access: "Для всех устройств.",
                       about:
                         "Получите последние сведения о состоянии устройства, настройках и показателях."
                     },
                     ua: {
                       title: "Статус пристрою",
                       access: "Для усіх пристроїв.",
                       about:
                         "Отримайте найновіший стан пристрою, налаштування та показники."
                     },
                     en: {
                       title: "Device Status",
                       access: "For all devices.",
                       about:
                         "Get the latest device status, settings, and metrics."
                     }
                   }
                 },
                 {
                   link: "/dashboard/ping",
                   imgUrl: "/img/dashboard/dashboard_ping.svg",
                   langValues: {
                     ru: {
                       title: "Ping",
                       access: "Только для тюнеров.",
                       about:
                         "Получите данные проверки связи с платформой и маршрутизатором за последние 7 дней."
                     },
                     ua: {
                       title: "Ping",
                       access: "Лише для тюнерів",
                       about:
                         "Отримайте дані про ping до платформи та маршрутизатору за останні 7 днів."
                     },
                     en: {
                       title: "Ping",
                       access: "Set-Top-Boxes only.",
                       about:
                         "Get ping data to platform and router for last 7 days."
                     }
                   }
                 },
                 {
                   link: "/dashboard/dvbc",
                   imgUrl: "/img/dashboard/dashboard_dvbc.svg",
                   langValues: {
                     ru: {
                       title: "DVB-C",
                       access: "Только гибридные устройства.",
                       about:
                         "Получить данные о состоянии сигналов DVB-C за последние 7 дней."
                     },
                     ua: {
                       title: "DVB-C",
                       access: "Тільки гібридні пристрої.",
                       about:
                         "Отримайте дані про стан сигналів dvb-c за останні 7 днів."
                     },
                     en: {
                       title: "DVB-C",
                       access: "Hybrid devices only.",
                       about:
                         "Get the latest device status, settings, and metrics."
                     }
                   }
                 }
               ]
             },
             searchBlock: {
               ru: {
                 formErrors: {
                   lengthMobile: "Должно быть 16 симовлов",
                   lengthSTB: "Должно быть 12 симовлов",
                   common: "Ошибка!"
                 },
                 placeholder: "Поиск по MAC адресу"
               },
               ua: {
                 formErrors: {
                   lengthMobile: "Повинно бути 16 символів",
                   lengthSTB: "Повинно бути 12 символів",
                   common: "Помилка!"
                 },
                 placeholder: "Пошук за MAC адресою"
               },
               en: {
                 formErrors: {
                   lengthMobile: "Must be 16 symbols",
                   lengthSTB: "Must be 12 symbols",
                   common: "MAC failed!"
                 },
                 placeholder: "Search by MAC"
               }
             },
             status: {
               title: {},
               main: {
                 ru: {
                   title: "Отчёт устройства:",
                   date: "на"
                 },
                 ua: {
                   title: "Звіт пристрою:",
                   date: "за"
                 },
                 en: {
                   title: "Report from device:",
                   date: "updated:"
                 }
               },
               langValues: [
                 {
                   name: "model",
                   value: "",
                   text: { ru: "Модель", ua: "Модель", en: "Model" },
                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "online",
                   value: "",
                   text: { ru: "Статус", ua: "Статус", en: "Status" },
                   good: "online",
                   bad: "offline",
                   status: ""
                 },
                 {
                   name: "power",
                   value: "",
                   text: { ru: "Питание", ua: "Живлення", en: "Power" },
                   good: "on",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "version",
                   value: "",
                   text: { ru: "Версия", ua: "Версія", en: "Version" },
                   good: { vm1920: "000.000.01002" },
                   bad: "",
                   status: ""
                 }
               ]
             },
             photo: {
               title: {},
               langValues: []
             },
             details: {
               title: {},
               langValues: [
                 {
                   name: "cpu",
                   value: "",
                   text: { ru: "ЦПУ", ua: "ЦП", en: "CPU" },
                   good: { value: null, text: null },
                   bad: { value: null, text: null },
                   status: "",
                   startWith: "",
                   endWith: "%"
                 },
                 {
                   name: "loader",
                   value: "",
                   text: { ru: "Загрузчик", ua: "Завантажувач", en: "Loader" },
                   good: { value: null, text: null },
                   bad: { value: null, text: null },
                   status: "",
                   startWith: "v",
                   endWith: ""
                 },
                 {
                   name: "minerva",
                   value: "",
                   text: { ru: "Платформа", ua: "Платформа", en: "Platform" },
                   good: { value: "got services", text: "OK" },
                   bad: { value: null, text: "Error" },
                   status: "",
                   startWith: "",
                   endWith: ""
                 },
                 {
                   name: "pin",
                   value: "",
                   text: { ru: "ПИН", ua: "ПІН", en: "PIN" },
                   good: { value: null, text: null },
                   bad: { value:null, text: null },
                   status: "",
                   startWith: "",
                   endWith: ""
                 },
                 {
                   name: "hdmi",
                   value: "",
                   text: {
                     ru: "TV Connection",
                     ua: "ТВ Підключення",
                     en: "TВ Подключение"
                   },
                   good: { value: "connected", text: "HD" },
                   bad: { value: "", text: "RCA" },
                   status: "",
                   startWith: "",
                   endWith: ""
                 }
               ]
             },
             connect: {
               title: {},
               langValues: [
                 {
                   name: "ExternalIP",
                   value: "",
                   text: {
                     ru: "Внешний IP",
                     ua: "Зовнішній IP",
                     en: "External IP"
                   },
                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "IpAddress",
                   value: "",
                   text: {
                     ru: "Внутренний IP",
                     ua: "Внутрішній IP",
                     en: "Internal IP"
                   },

                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "DefaultGateway",
                   value: "",
                   text: {
                     ru: "Шлюз по умолчанию",
                     ua: "Шлюз за замовчуванням",
                     en: "Default Gateway"
                   },
                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "DnsServer1",
                   value: "",
                   text: {
                     ru: "DNS Сервер 1",
                     ua: "DNS Сервер 1",
                     en: "DNS Server 1"
                   },
                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "DnsServer2",
                   value: "",
                   text: {
                     ru: "DNS Сервер 2",
                     ua: "DNS Сервер 2",
                     en: "DNS Server 2"
                   },
                   good: "",
                   bad: "",
                   status: ""
                 }
               ]
             },
             ping: {
               title: {},
               content: []
             },
             dvbc: {
               title: {},
               content: []
             }
           },
           home: {
             main: {
               imgUrl: "/img/home/main_img.svg",
               buttonLink: "/dashboard",
               value: {
                 ru: {
                   firstTitle: "Все еще нет информации о состоянии ОТТ тюнера?",
                   secondTitle:
                     "Попробуйте найти все, что вам нужно в нашем дашборде.",
                   titleButton: "Перейти к дашборду",
                   imgAlt: "ОТТ TV Monitoring"
                 },
                 ua: {
                   firstTitle: "Все ще немаєш інформації про стан ОТТ тюнера?",
                   secondTitle:
                     "Спробуйте знайти все, що вам потрібно, у нашому дашборді.",
                   titleButton: "Перейти до Дашборду",
                   imgAlt: "ОТТ TV Monitoring"
                 },
                 en: {
                   firstTitle: "Still don't have information about STB?",
                   secondTitle:
                     "Try to find all what you need in our Dashboard.",
                   titleButton: "Open Dashboard",
                   imgAlt: "ОТТ TV Monitoring"
                 }
               }
             },
             howItWorks: {
               imgUrl: [
                 "/img/home/hiw/step1.svg",
                 "/img/home/hiw/step2.svg",
                 "/img/home/hiw/step3.svg"
               ],
               value: {
                 ru: {
                   firstTitle: "Как это работает?",
                   secondTitle: "Очень просто",
                   steps: [
                     { name: "1", value: "Введите MAC адрес" },
                     { name: "2", value: 'Нажмите на "Поиск"' },
                     { name: "3", value: "Получите информацию" }
                   ]
                 },
                 ua: {
                   firstTitle: "Як це працює?",
                   secondTitle: "Дуже легко",
                   steps: [
                     { name: "1.", value: "Введіть MAC адрессу" },
                     { name: "2.", value: 'Натисніть на "Пошук"' },
                     { name: "3.", value: "Отримайте інформацію" }
                   ]
                 },
                 en: {
                   firstTitle: "How it works?",
                   secondTitle: "Very simple",
                   steps: [
                     { name: "1.", value: "Enter MAC Address" },
                     { name: "2.", value: "Press the search button" },
                     { name: "3.", value: "Get all information about" }
                   ]
                 }
               }
             },
             other: [
               {
                 imgUrl: "/img/home/reports.svg",
                 buttonLink: "/reports",
                 value: {
                   ru: {
                     firstTitle: "Отчёты",
                     secondTitle:
                       "Формируйте отчеты об использовании платформы и ОТТ устройств со многими свойствами. Измените свойства, чтобы получить собственный уникальный отчет.",
                     textButton: "Попробуй создать отчёт"
                   },

                   ua: {
                     firstTitle: "Звіти",
                     secondTitle:
                       "Сформуйте звіти про платформу OTT та використання пристроїв з багатьма властивостями. Змініть властивості, щоб отримати власний звіт.",
                     textButton: "Спробуй сформувати звіт"
                   },

                   en: {
                     firstTitle: "Reports",
                     secondTitle:
                       "You can get reports about OTT platform and devices usege with many properties. Change properties to get your own custom report.",
                     textButton: "Try to get a Report"
                   }
                 }
               },
               {
                 imgUrl: "/img/home/users.svg",
                 buttonLink: "/users",
                 value: {
                   ru: {
                     firstTitle: "Разграниченние доступа",
                     secondTitle:
                       "Администраторам системы доступен просмотр списка текущих пользователей с возможностью их редактирования или удаления, а также создания новых пользователей.",
                     textButton: "Узнать больше"
                   },
                   ua: {
                     firstTitle: "Розмежування доступу",
                     secondTitle:
                       "Адміністраторам системи доступний перегляд списку поточних користувачів з можливістю їх редагування або видалення, а також створення нових користувачів.",
                     textButton: "Спробувати"
                   },
                   en: {
                     firstTitle: "Managing Users",
                     secondTitle:
                       "System administrators can view the list of current users with the ability to edit or delete them, as well as create new users.",
                     textButton: "Try to edit Users"
                   }
                 }
               },
               {
                 imgUrl: "/img/home/about.svg",
                 buttonLink: "/about",
                 value: {
                   ru: {
                     firstTitle: "Про проект",
                     secondTitle:
                       "Детальная информация о системе, использованых технологиях в процессе её разработки, а также о разработчике.",
                     textButton: "Узнай больше"
                   },
                   ua: {
                     firstTitle: "Про проект",
                     secondTitle:
                       "Детальна інформація про систему, використаних технологіях в процесі її розробки, а також про розробника.",
                     textButton: "Дізнайся більше"
                   },
                   en: {
                     firstTitle: "About Project",
                     secondTitle:
                       "Detailed information about the system, technologies used in the process of its development, as well as about the developer.",
                     textButton: "See more"
                   }
                 }
               }
             ]
           },
           auth: {
             title: {
               ru: "Войти в систему",
               ua: "Увійти до системи",
               en: "Sing In"
             },
             form: {
               ru: {
                 login: "Логин",
                 password: "Пароль",
                 button: "Войти"
               },

               ua: {
                 login: "Логін",
                 password: "Пароль",
                 button: "Увійти"
               },
               en: {
                 login: "Login",
                 password: "Password",
                 button: "Sing In"
               }
             }
           }
         }
       };
