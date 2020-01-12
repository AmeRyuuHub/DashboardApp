import { v4 } from "uuid";
import { createSelector } from "reselect";
import { routsMenu, routsAppOptions } from "../../content/main/routs/routs";
import { routIcons,routsOptions, langIcons } from "../../content/icons";
import { appInfo } from "../../content/main/app/appDetails";
import { langList } from "../../content/main/lang/langList";
import { homePage } from "../../content/home/homePage";


// Getting autorization status, authorized or not

export const getAuthStatus = state => {
  return state.authApp.loginStatus;
};

//If service is authorized, getting user's name
export const getUser = state => {
  return state.authApp.fullName;
};

// Getting user's role
export const getUserRole = state => {
  return state.authApp.role;
};

// Getting UI current lang
export const getUILang = state => {
  return state.lang.langUI;
};

//Getting  list of languages 

export const getLangList = () => {
  return langList.map(lang =>({...lang, img:langIcons[lang.name]}));
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

export const getDataRouts = (state) => {
  return state.content.routs.menu;
};

// Selecting routs by user's role

export const getRoutsMenu = createSelector(
  getUILang,
  getUserRole,
  getDataRouts,
(lang, role, routs) => {
  
  return role ? routs.filter(item => (
    +(item.role)  <= role 
     )).map(rout =>({...rout, value:rout.value[lang], icon:routIcons[rout.name] ,id: v4()})):null
  
}
);

// Getting all routs for option menu button

export const getOptionsRouts = (state) => {
  return state.content.routs.options;
};

export const getRoutsApp = createSelector(
  getUILang,
  getUserRole,
  getOptionsRouts,
(lang, role,routs) => {
  
  return role ? routs.filter(item => (
    +(item.role)  <= role 
     )).map(rout =>({...rout, value:rout.value[lang], icon:routsOptions[rout.name], id: v4()})):null
  
}
);

// Getting main info about service

//Getting title (servise name)

export const getAppTitle = () => {
  return {...appInfo,title:appInfo.title.toUpperCase()};
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


// Getting HOME PAGE content

export const getMainContainerData= state => {
  return state.content.pages.home.main;
};   
  
export const getMainContainerWithLang = createSelector(
  getUILang,
  getMainContainerData,
  (lang, data) => {
    
    return ({buttonLink:data.buttonLink,imgUrl:data.imgUrl, ...data.value[lang]});
  }
);

export const getSecondContainerData= state => {
  return state.content.pages.home.howItWorks;
}; 

export const getHowItWorkBlockWithLang = createSelector(
  getUILang,
  getSecondContainerData,
  (lang, data) => {
   
   return ({imgUrl:data.imgUrl, ...data.value[lang]});;
    
     
  }
);

export const getOtherContainersData= state => {
  return state.content.pages.home.other;
}; 

export const getOtherBlocksWithLang = createSelector(
  getUILang,
  getOtherContainersData,
  (lang, data) => {
    let langData = data.map(item => ({
      buttonLink:item.buttonLink,
      imgUrl: item.imgUrl,
      ...item.value[lang]
    }));
    
    
    return langData
  }
);