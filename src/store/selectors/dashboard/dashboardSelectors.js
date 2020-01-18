import { v4 } from "uuid";
import { createSelector } from "reselect";
import { getUILang } from "../appInit/initSelectors";



// TITLE content

const getDashMainHeader = state => {
  return state.content.pages.dashboard.main.header;
};

const getDashMainOptions = state => {
  return state.content.pages.dashboard.main.options;
};

export const getDashMainHeaderWithLang = createSelector(
  getUILang,
  getDashMainHeader,
  (lang, data) => {
    return data[lang];
  }
);

export const getDashMainOptionsWithLang = createSelector(
  getUILang,
  getDashMainOptions,
  (lang, data) => {
    let langData = data.map(item => ({
      id: v4(),
      link: item.link,
      imgUrl: item.imgUrl,
      ...item.langValues[lang]
    }));

    return langData;
  }
);

const getStatusMain = state => {
  return state.content.pages.dashboard.status.main;
};

export const getStatusMainWithLang = createSelector(
  getUILang,
  getStatusMain,
  (lang, data) => {
    return data[lang];
  }
);







