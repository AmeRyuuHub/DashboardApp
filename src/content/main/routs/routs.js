

export const routsMenu = [
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
];
export const routsAppOptions = [
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
];
        