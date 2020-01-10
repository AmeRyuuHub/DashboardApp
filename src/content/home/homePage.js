export const homePage = [
    {
      name: "main",
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
              "Формируйте отчеты об использовании платформы и ОТТ устройств со многими свойствами. Измените свойства, чтобы получить собственный уникальный отчет.",
            textButton: "Попробуй создать отчёт"
          },
          {
            firstTitle: "Разграниченние доступа",
            secondTitle:
              "Администраторам системы доступен просмотр списка текущих пользователей с возможностью их редактирования или удаления, а также создания новых пользователей.",
            textButton: "Узнать больше"
          },
          {
            firstTitle: "Про проект",
            secondTitle:
              "Детальная информация о системе, использованых технологиях в процессе её разработки, а также о разработчике.",
            textButton: "Узнай больше"
          }
        ],
        ua: [
          {
            firstTitle: "Звіти",
            secondTitle:
              "Сформуйте звіти про платформу OTT та використання пристроїв з багатьма властивостями. Змініть властивості, щоб отримати власний звіт.",
            textButton: "Спробуй сформувати звіт"
          },
          {
            firstTitle: "Розмежування доступу",
            secondTitle:
              "Адміністраторам системи доступний перегляд списку поточних користувачів з можливістю їх редагування або видалення, а також створення нових користувачів.",
            textButton: "Спробувати"
          },
          {
            firstTitle: "Про проект",
            secondTitle:
              "Детальна інформація про систему, використаних технологіях в процесі її розробки, а також про розробника.",
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
              "System administrators can view the list of current users with the ability to edit or delete them, as well as create new users.",
            textButton: "Try to edit Users"
          },
          {
            firstTitle: "About Project",
            secondTitle:
              "Detailed information about the system, technologies used in the process of its development, as well as about the developer.",
            textButton: "See more"
          }
        ]
      }
    }
  ]