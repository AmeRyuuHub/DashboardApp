import { v4 } from "uuid";
import { createSelector } from "reselect";
import { routIcons, routsOptions, langIcons } from "../../../content/icons";
import {
  getUILang,
  getAuthStatus,
  getUserRole,
  getUser
} from "../appInit/initSelectors";

//Getting  list of languages

export const getLangList = state => {
  return state.content.languages.map(lang => ({
    ...lang,
    img: langIcons[lang.name]
  }));
};

// Getting info about current language
export const getCurrentLang = createSelector(
  getUILang,
  getLangList,
  (lang, list) => {
    let current = list.filter(item => item.name === lang);
    return current[0];
  }
);

// Getting all menu routs for AppBar

export const getDataRouts = state => {
  return state.content.routs.menu;
};

// Selecting routs by user's role

export const getRoutsMenu = createSelector(
  getUILang,
  getUserRole,
  getDataRouts,
  (lang, role, routs) => {
    return role
      ? routs
          .filter(item => +item.role <= role)
          .map(rout => ({
            ...rout,
            value: rout.value[lang],
            icon: routIcons[rout.name],
            id: v4(),
            subLinks: !rout.subLinks
              ? null
              : rout.subLinks.map(subLink => ({
                  ...subLink,
                  value: subLink.value[lang],
                  icon: routIcons[subLink.name],
                  id: v4()
                }))
          }))
      : null;
  }
);

// Getting all routs for option button

export const getOptionsRouts = state => {
  return state.content.routs.options;
};

export const getRoutsApp = createSelector(
  getUILang,
  getUserRole,
  getOptionsRouts,
  (lang, role, routs) => {
    return role
      ? routs
          .filter(item => +item.role <= role)
          .map(rout => ({
            ...rout,
            value: rout.value[lang],
            icon: routsOptions[rout.name],
            id: v4()
          }))
      : null;
  }
);

export const getAuthRout = state => {
  return state.content.routs.auth;
};

export const getRoutAuth = createSelector(
  getUILang,
  getAuthRout,
  (lang, rout) => {
    return { ...rout, value: rout.value[lang], icon: routIcons[rout.name] };
  }
);

// Getting main info about service

//Getting title (servise name)

export const getAppTitle = state => {
  return { ...state.content.app, title: state.content.app.title.toUpperCase() };
};

// export const getSessionId = state => {
//   return state.authApp.session_id;
// };

export const getUserInfo = createSelector(
  getAuthStatus,
  getUser,
  getUserRole,
  (auth, user, role) => {
    return auth && user ? { name: user, icon: role } : null;
  }
);
