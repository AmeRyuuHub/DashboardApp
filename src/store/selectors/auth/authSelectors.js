import { getUILang } from "../appInit/initSelectors";
import { createSelector } from 'reselect';


// AUTHORIZATION PAGE content

export const getAuthFetching = state => {
    return state.auth.isFetching;
  };
  
  //Getting title's object
  
   const getAuthPageTitle = state => {
    return state.content.pages.auth.title;
  };
  
  //Getting title depending on the current language
  
  export const getAuthPageTitleWithLang = createSelector(
    getUILang,
    getAuthPageTitle,
    (lang, data) => {
      return data[lang];
    }
  );
  
  //Getting auth form's object
  
   const getAuthPageForm = state => {
    return state.content.pages.auth.form;
  };
  
  //Getting auth form's content depending on the current language
  
  export const getAuthPageFormWithLang = createSelector(
    getUILang,
    getAuthPageForm,
    (lang, data) => {
      return { ...data[lang] };
    }
  );
  