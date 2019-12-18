import { v4 } from "uuid";
import { createSelector } from "reselect";


export const getUILang = state => {
  return state.dataUI.langUI;
};

export const getDataRouts= state => {
  return state.dataUI.routsMenu;
};
export const getDataRoutsApp= state => {
  return state.dataUI.routsApp;
};

export const getUserRole = state => {
  return state.authApp.result ? state.authApp.result.role_id:null;
};
export const getAppInfo = state => {
  return state.dataUI.appInfo;
};

export const getAppTitle = createSelector(
  getAppInfo,
 
(info) => {
  
  return {...info, title:info.title.toUpperCase()}
}
);

export const getRoutsMenu = createSelector(
  getUILang,
  getDataRouts,
  getUserRole,
(lang, routs, role) => {
  
  return role ? routs.filter(item => (
    +(item.role)  <= role 
     )).map(rout =>({...rout, value:rout.value[lang],id: v4()})):null
  
}
);

export const getRoutsApp = createSelector(
  getUILang,
  getDataRoutsApp,
  getUserRole,
(lang, routs, role) => {
  
  return role ? routs.filter(item => (
    +(item.role)  <= role 
     )).map(rout =>({...rout, value:rout.value[lang],id: v4()})):null
  
}
);



export const getLangList = state => {
  return state.dataUI.langList;
};

export const getCurrentLang = createSelector(
  getUILang,
  getLangList,
  (lang, list) => {
    let current = list.filter(item => item.name === lang);
    return current[0];
  }
);


export const getAuthStatus = state => {
  return state.authApp.loginStatus;
};
export const getUser = state => {
  return state.authApp.result;
};
export const getSessionId = state => {
  return state.authApp.session_id;
};

export const getUserInfo = createSelector(
  getAuthStatus,
  getUser,
  (auth,user) => {
    
    return (auth && user) ? ({name:user.fullname,icon:user.role_id}) :null;
  }
);

export const getAuthFetching = state => {
  return state.authApp.isFetching;
};

export const getloginStatus = state => {
  return state.authApp.loginStatus;
};


export const getMainContainerData= state => {
  return state.dataUI.homePage;
};   
  
export const getMainContainerWithLang = createSelector(
  getUILang,
  getMainContainerData,
  (lang, data) => {
    let langData = data.filter(item => item.name === "main").map(item => ({
      link:item.buttonLink,
      imgUrl: item.imgUrl,
      ...item.value[lang]
    }));
    return langData[0];
  }
);
export const getHowItWorkBlockWithLang = createSelector(
  getUILang,
  getMainContainerData,
  (lang, data) => {
    let langData = data.filter(item => item.name === "howItWorks").map(item => ({
    
      imgUrl: item.imgUrl,
      ...item.value[lang]
    }));
    
    return langData[0];
    
     
  }
);
export const getOtherBlocksWithLang = createSelector(
  getUILang,
  getMainContainerData,
  (lang, data) => {
    let langData = data.filter(item => item.name === "other").map(item => ({
      link:item.buttonLink,
      imgUrl: item.imgUrl,
      value:item.value[lang]
    }));
    
    
    return langData[0]
  }
);