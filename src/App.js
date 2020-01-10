import React,{lazy,Suspense, useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import { HomePageContainer, AppBarContainer, DashboardContainer, AuthContainer, UsersContainer } from './containers';
import About from './components/About/About';
//import {Footer} from './components/Footer/Footer';
import Profile from './components/Profile/Profile'
import { connect } from 'react-redux';
import { MainLinearProgress } from './common/ProgressLines';
import { compose } from 'redux';
import { getInitialized } from './store/redusers/appInit/AppInit';
import { setCarrentLang} from './store/redusers/dataUI/DataUI';
import 'dotenv/config'

//const Users = lazy(() => import('./components/ContentPages/Users/Users'));
const Reports = lazy(() => import('./components/Reports/Reports'));




const App = (props)=>{
   const { getInitialized, init } = props;

  useEffect(() => {
    getInitialized();
    //  let userLang = localStorage.getItem("tvm_lang");
    //  if (userLang && (lang !== userLang)) {
    //    switch (userLang) {
    //      case "ru":
    //      case "en":
    //      case "ua":
    //        setCarrentLang(userLang);
    //        break;
    //      default:
    //        break;
    //    }
    //  }
   }, [getInitialized]);

  
    if (!init) {
      return <MainLinearProgress />;
    }
    return (
      <>
        <Route component={AppBarContainer} />
        <Route path="/" exact component={HomePageContainer} />
        <Route path="/auth" component={AuthContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Suspense fallback={<MainLinearProgress />}>
        {/* <Route path="/stb-info-old" component={StbInfo} /> */}
        <Route path="/reports" component={Reports} />  
        <Route path="/users" component={UsersContainer} />
        {/* <Route component={Footer} />  */}
      </Suspense>
      </>
    );
  
}

const mapStateToProps = (state) => {
  return {
    init: state.appInit.initialized,
    lang: state.dataUI.lang
  };
}

export default compose(connect(mapStateToProps, { getInitialized,setCarrentLang }))(App);










