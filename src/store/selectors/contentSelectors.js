import { v4 } from "uuid";
import { createSelector } from "reselect";
import { routsMenu, routsApp } from "../../content/main/routs/routs";
import { routs, langIcons } from "../../content/icons";
import { appInfo } from "../../content/main/app/appDetails";
import { langList } from "../../content/main/lang/langList";
import { homePage } from "../../content/home/homePage";



// Get UI lang
export const getUILang = state => {
  return state.lang.langUI;
};

// Get user role
export const getUserRole = state => {
  return state.authApp.role;
};

export const getDataRouts = () => {
  return routsMenu;
};


export const getRoutsMenu = createSelector(
  getUILang,
  getUserRole,
(lang, role) => {
  
  return role ? routsMenu.filter(item => (
    +(item.role)  <= role 
     )).map(rout =>({...rout, value:rout.value[lang], icon:routs[rout.name] ,id: v4()})):null
  
}
);


export const getRoutsApp = createSelector(
  getUILang,
  getUserRole,
(lang, role) => {
  
  return role ? routsApp.filter(item => (
    +(item.role)  <= role 
     )).map(rout =>({...rout, value:rout.value[lang], icon:routs[rout.name], id: v4()})):null
  
}
);



export const getAppTitle = () => {
  return appInfo.title.toUpperCase();
};





export const getLangList = () => {
  return langList.map(lang =>({...lang, img:langIcons[lang.name]}));
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
  return state.authApp.fullName;
};
// export const getSessionId = state => {
//   return state.authApp.session_id;
// };

export const getUserInfo = createSelector(
  getAuthStatus,
  getUser,
  getUserRole,
  (auth,user,role) => {
    
    return (auth && user) ? ({name:user,icon:role}) :null;
  }
);

export const getAuthFetching = state => {
  return state.authApp.isFetching;
};


export const getMainContainerData= state => {
  return homePage;
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