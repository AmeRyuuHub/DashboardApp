import React,{lazy,Suspense} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';
import AppBarContainer from './containers/AppBarContainer';
import About from './components/ContentPages/About/About';
import DashboardContainer from './containers/DashboardContainer';
import AuthContainer from'./containers/AuthContainer';
//import {Footer} from './components/Footer/Footer';
import Profile from './components/ContentPages/Profile/Profile'
import { connect } from 'react-redux';
import { MainLinearProgress } from './components/common/ProgressLines';
import { compose } from 'redux';
import { getInitialized } from './store/redusers/AppInit/AppInit';
import { setCarrentLang} from './store/redusers/DataUI/DataUI';
import UsersContainer from './containers/UsersContainer';


//const Users = lazy(() => import('./components/ContentPages/Users/Users'));
const Reports = lazy(() => import('./components/ContentPages/Reports/Reports'));




class App extends React.Component {
  componentDidMount() {
    const ssid = localStorage.getItem("jssid");
    !this.props.init && this.props.getInitialized(ssid);
    const userLang = localStorage.getItem("tvm_lang");
    if (userLang && (this.props.lang !== userLang)) {
      switch (userLang) {
        case "ru":
        case "en":
        case "ua":
          this.props.setCarrentLang(userLang);
          break;
        default:
          break;
      }
    }
  }

  render() {
    if (!this.props.init) {
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
}

function mapStateToProps(state) {
  return {
    init: state.appInit.initialized,
    lang: state.dataUI.lang
  };
}

export default compose(connect(mapStateToProps, { getInitialized,setCarrentLang }))(App);










