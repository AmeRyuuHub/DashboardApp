export const initialState = {
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
               role: "1"
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
             title: {},
             searchBlock: {},
             status: {
               title: {},
               content: [
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
               content: []
             },
             details: {
               title: {},
               content: [
                 {
                   name: "cpu",
                   value: "",
                   text: { ru: "ЦПУ", ua: "ЦП", en: "CPU" },
                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "loader",
                   value: "",
                   text: { ru: "Загрузчик", ua: "Завантажувач", en: "Loader" },
                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "minerva",
                   value: "",
                   text: { ru: "Платформа", ua: "Платформа", en: "Platform" },
                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "pin",
                   value: "",
                   text: { ru: "ПИН", ua: "ПІН", en: "PIN" },
                   good: "",
                   bad: "",
                   status: ""
                 },
                 {
                   name: "hdmi",
                   value: "",
                   text: { ru: "HDMI", ua: "HDMI", en: "HDMI" },
                   good: "",
                   bad: "",
                   status: ""
                 }
               ]
             },
             connect: {
               title: {},
               content: [
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
                   text: "Internal IP",
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
               imgUrl: "/img/main_img.svg",
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
               imgUrl: ["/img/step1.svg", "/img/step2.svg", "/img/step3.svg"],
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
                 imgUrl: "/img/reports.svg",
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
                 imgUrl: "/img/users.svg",
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
                 imgUrl: "/img/about.svg",
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
