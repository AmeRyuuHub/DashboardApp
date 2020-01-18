import { createSelector } from "reselect";
import { getUILang } from "../appInit/initSelectors";

//  HOME PAGE content

//Getting content for main block

export const getMainContainerData = state => {
  return state.content.pages.home.main;
};

export const getMainContainerWithLang = createSelector(
  getUILang,
  getMainContainerData,
  (lang, data) => {
    return {
      buttonLink: data.buttonLink,
      imgUrl: data.imgUrl,
      ...data.value[lang]
    };
  }
);

//Getting content for second block ("How It Works")

export const getSecondContainerData = state => {
  return state.content.pages.home.howItWorks;
};

export const getHowItWorkBlockWithLang = createSelector(
  getUILang,
  getSecondContainerData,
  (lang, data) => {
    return { imgUrl: data.imgUrl, ...data.value[lang] };
  }
);

//Getting array of other content blocks

export const getOtherContainersData = state => {
  return state.content.pages.home.other;
};

export const getOtherBlocksWithLang = createSelector(
  getUILang,
  getOtherContainersData,
  (lang, data) => {
    let langData = data.map(item => ({
      buttonLink: item.buttonLink,
      imgUrl: item.imgUrl,
      ...item.value[lang]
    }));

    return langData;
  }
);
