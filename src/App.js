import React,{lazy,Suspense, useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { HomePageContainer, AppBarContainer, DashboardContainer, AuthContainer, UsersContainer, StatusContainer } from './containers';
import About from './components/About/About';
//import {Footer} from './components/Footer/Footer';
import Profile from './components/Profile/Profile'
import { connect } from 'react-redux';
import { MainLinearProgress } from './common/ProgressLines';
import { compose } from 'redux';
import { getInitialized } from './store/redusers/appInit/AppInit';
import { setCarrentLang} from './store/redusers/lang/lang';
import 'dotenv/config'


//const Users = lazy(() => import('./components/ContentPages/Users/Users'));
const Reports = lazy(() => import('./components/Reports/Reports'));




const App = (props)=>{
   const { getInitialized, init } = props;
  //  let userLang = localStorage.getItem("tvm_lang");
  //   if (userLang && (lang !== userLang)) {
  //     switch (userLang) {
  //       case "ru":
  //       case "en":
  //       case "ua":
  //         setCarrentLang(userLang);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  useEffect(() => {
    getInitialized();
    // 
   }, [getInitialized]);

  
    if (!init) {
      return <MainLinearProgress />;
    }
    return (
      <>
      <AppBarContainer/>
      <Switch>
      <Route path="/" exact component={HomePageContainer} />
        <Route path="/dashboard/status" component={StatusContainer} />
        <Route path="/auth" component={AuthContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Suspense fallback={<MainLinearProgress />}>
        {/* <Route path="/stb-info-old" component={StbInfo} /> */}
        <Route path="/reports" component={Reports} />  
        <Route path="/users" component={UsersContainer} />
        </Suspense>
        
        {/* <Route component={Footer} />  */}
      </Switch>
        
     </>
    
    );
  
}

const mapStateToProps = (state) => {
  return {
    init: state.appInit.initialized,
    lang: state.lang.langUI
  };
}

export default compose(connect(mapStateToProps, { getInitialized,setCarrentLang }))(App);










