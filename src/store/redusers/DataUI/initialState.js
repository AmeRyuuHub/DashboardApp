

import {dataRoutsIcons, dataLangList as langIcons} from '../../../components/Common/DataIcons/DataIcons';
import logo from "../../../pics/logo-dark.svg";
export const initialState = {
         appInfo: { title: "tv monitoring", logo: logo },
         routsMenu: [
           {
             name: "home",
             endPoint: "/",
             icon: dataRoutsIcons.home,
             value: { ru: "На главную", ua: "На головну", en: "Home" },
             role: "1"
           },

           {
             name: "dashboard",
             endPoint: "/dashboard",
             icon: dataRoutsIcons.dashboard,
             value: { ru: "Dashboard", ua: "Dashboard", en: "Dashboard" },
             role: "1"
           },

           {
             name: "reports",
             endPoint: "/reports",
             icon: dataRoutsIcons.reports,
             value: { ru: "Отчёты", ua: "Звіти", en: "Reports" },
             role: "2"
           },

           {
             name: "userList",
             endPoint: "/users",
             icon: dataRoutsIcons.users,
             value: { ru: "Пользователи", ua: "Користувачі", en: "Users" },
             role: "3"
           },
           {
             name: "about",
             endPoint: "/about",
             icon: dataRoutsIcons.about,
             value: { ru: "О проекте", ua: "Про проект", en: "About" },
             role: "1"
           }
         ],
         routsApp: [
          {
            name: "profile",
            endPoint: "/profile",
            icon: dataRoutsIcons.profile,
            value: { ru: "Профиль", ua:"Профіль" , en: "Profile" },
            role: "1",
            disabled:false,
          },

          {
            name: "settings",
            endPoint: "/settings",
            icon: dataRoutsIcons.settings,
            value: { ru: "Настройки", ua: "Налаштування", en: "Settings" },
            role: "1",
            disabled:true,
          },

          {
            name: "logout",
            endPoint: "/",
            icon: dataRoutsIcons.logout,
            value: { ru: "Выйти", ua: "Вийти", en: "Log Out" },
            role: "1",
            disabled:false,
          },

          
        ],
         status: [
           {
             name: "model",
             value: "",
             text: "Model",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "online",
             value: "",
             text: "Status",
             good: "online",
             bad: "offline",
             status: ""
           },
           {
             name: "power",
             value: "",
             text: "Power",
             good: "on",
             bad: "",
             status: ""
           },
           {
             name: "version",
             value: "",
             text: "Version",
             good: { vm1920: "000.000.01002" },
             bad: "",
             status: ""
           }
         ],
         details: [
           {
             name: "cpu",
             value: "",
             text: "CPU",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "loader",
             value: "",
             text: "Loader",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "minerva",
             value: "",
             text: "Platform",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "pin",
             value: "",
             text: "Pin",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "hdmi",
             value: "",
             text: "HDMI",
             good: "",
             bad: "",
             status: ""
           }
         ],
         connect: [
           {
             name: "ExternalIP",
             value: "",
             text: "External IP",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "IpAddress",
             value: "",
             text: "Internal IP",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "DefaultGateway",
             value: "",
             text: "Default Gateway",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "DnsServer1",
             value: "",
             text: "DNS Server 1",
             good: "",
             bad: "",
             status: ""
           },
           {
             name: "DnsServer2",
             value: "",
             text: "DNS Server 2",
             good: "",
             bad: "",
             status: ""
           }
         ],
         langList: [
           { name: "ru", img: langIcons.ru, value: "Руc" },
           { name: "ua", img: langIcons.ua, value: "Укр" },
           { name: "en", img: langIcons.eng, value: "Eng" }
         ],
         langUI: "en",
         isFetching: false,
         homePage: [
           {
             name: "main",
             imgUrl: "/img/main_img.svg",
             buttonLink: "/dashboard",
             value: {
               ru: {
                 firstTitle: "Все еще нет информации о состоянии ОТТ тюнера?",
                 secondTitle:
                   "Попробуйте найти все, что вам нужно в нашем дашборде",
                 titleButton: "Перейти к дашборду",
                 imgAlt: "ОТТ TV Monitoring"
               },
               ua: {
                 firstTitle: "Все ще немаєш інформації про стан ОТТ тюнера?",
                 secondTitle:
                   "Спробуйте знайти все, що вам потрібно, у нашому дашборді",
                 titleButton: "Перейти до Дашборду",
                 imgAlt: "ОТТ TV Monitoring"
               },
               en: {
                 firstTitle: "Still don't have information about STB?",
                 secondTitle: "Try to find all what you need in our Dashboard.",
                 titleButton: "Open Dashboard",
                 imgAlt: "ОТТ TV Monitoring"
               }
             }
           },
           {
             name: "howItWorks",
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
                 secondTitle: "Дуже просто",
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
           {
             name: "other",
             imgUrl: ["/img/reports.svg", "/img/users.svg", "/img/about.svg"],
             buttonLink: ["/reports", "/users", "/about"],
             value: {
               ru: [
                 {
                   firstTitle: "Отчёты",
                   secondTitle:
                     "Плучайте отчеты об использовании платформы и ОТТ устройств со многими свойствами. Измените свойства, чтобы получить собственный уникальный отчет.",
                   textButton: "Попробуй создать отчёт"
                 },
                 {
                   firstTitle: "Разграниченние доступа",
                   secondTitle:
                     "Плучайте отчеты об использовании платформы и ОТТ устройств со многими свойствами. Измените свойства, чтобы получить собственный уникальный отчет.",
                   textButton: "Узнать больше"
                 },
                 {
                   firstTitle: "Про проект",
                   secondTitle:
                     "Плучайте отчеты об использовании платформы и ОТТ устройств со многими свойствами. Измените свойства, чтобы получить собственный уникальный отчет.",
                   textButton: "Узнай больше"
                 }
               ],
               ua: [
                 {
                   firstTitle: "Звіти",
                   secondTitle:
                     "Отримуйте звіти про платформу OTT та використання пристроїв з багатьма властивостями. Змініть властивості, щоб отримати власний звіт.",
                   textButton: "Спробуй сформувати звіт"
                 },
                 {
                   firstTitle: "Розмежування доступу",
                   secondTitle:
                     "Отримуйте звіти про платформу OTT та використання пристроїв з багатьма властивостями. Змініть властивості, щоб отримати власний звіт.",
                   textButton: "Спробувати"
                 },
                 {
                   firstTitle: "Про проект",
                   secondTitle:
                     "Отримуйте звіти про платформу OTT та використання пристроїв з багатьма властивостями. Змініть властивості, щоб отримати власний звіт.",
                   textButton: "Дізнайся більше"
                 }
               ],
               en: [
                 {
                   firstTitle: "Reports",
                   secondTitle:
                     "You can get reports about OTT platform and devices usege with many properties. Change properties to get your own custom report.",
                   textButton: "Try to get a Report"
                 },
                 {
                   firstTitle: "Managing Users",
                   secondTitle:
                     "You can get reports about OTT platform and devices usege with many properties. Change properties to get your own custom report.",
                   textButton: "Try to edit Users"
                 },
                 {
                   firstTitle: "About Project",
                   secondTitle:
                     "You can get reports about OTT platform and devices usege with many properties. Change properties to get your own custom report.",
                   textButton: "See more"
                 }
               ]
             }
           }
         ]
       }; 