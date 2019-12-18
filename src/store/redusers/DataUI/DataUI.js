
import {C} from '../ActionsNameList'
import { initialState } from './initialState';


export default function dataUI(state = initialState, action) {
  switch (action.type) {
    case C.SET_LANGUAGE:
      return { ...state, langUI: action.payload };
    case C.SET_LANGUAGE_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
}


export  function setLangUI(lang){
    return { type:C.SET_LANGUAGE, payload: lang}
}
export  function setFetching(lang){
  return { type:C.SET_LANGUAGE_FETCHING, payload: lang}
}

export const setCarrentLang = lang => {
  return dispatch => {
    dispatch(setFetching(true));
    dispatch(setLangUI(lang));
    localStorage.setItem("tvm_lang", lang);
    dispatch(setFetching(false));
  };
};