import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Icon
} from "@material-ui/core";
import {
  AsideBar,
  LangMenu,
  SideBar,
  OptionsMenu,
} from "../components/AppBar";
import { setCarrentLang } from "../store/redusers/lang/lang";
import { compose } from "redux";
import { getAuthLogout } from "../store/redusers/auth/Auth";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import { getRoutPathName } from "../common";
import { getLangList, getRoutsMenu, getAppTitle, getCurrentLang, getUserInfo, getRoutsApp, getRoutAuth } from '../store/selectors/appBar/appBarSelectors';
import { getAuthStatus } from "../store/selectors/appInit/initSelectors";

const useStyles = makeStyles(theme => ({
  toolBar: {
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: "250px"
    },
   
  },
  homeToolBar: {
    justifyContent: "space-between",
   
  },
  bar: {
    boxShadow: "none",
 
  },
  loginButton: {
    whiteSpace: "nowrap"
  },

  optionsLeft: {
    "& > *": {
      marginLeft: theme.spacing(1)
    }
  },

  optionsRight: {
    "& > *": {
      marginRight: theme.spacing(1)
    }
  },
  back:{
    padding:'12px 12px 12px 0px',
  }
}));

const AppBarContainer = React.memo(props => {
  const {
    routsMenu,
    appInfo,
    langList,
    lang,
    setCarrentLang,
    authStatus,
    user,
    location: { pathname },
    getAuthLogout,
    routsApp,
    routAuth
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const hideMD = useMediaQuery(theme.breakpoints.up("md"));
  let pageName = routsMenu && getRoutPathName(pathname, routsMenu);
debugger;
  let homePage = pathname === "/" || pathname === "";
  let authPage = pathname === "/auth";
  if (pathname === "/profile") {
    pageName = { value: "Profile" };
  }
  if (!authStatus)
    return (
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.homeToolBar} >
          <Box
            display="flex"
            alignItems="center"
            className={classes.optionsRight}
          >
            {authPage && (
              <IconButton color="inherit" component={Link} to="/" className={classes.back}>
                <ArrowBack />
              </IconButton>
            )}

            <Typography variant="h6" noWrap>
              {appInfo.title}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LangMenu
              options={langList}
              setCarrentLang={setCarrentLang}
              lang={lang}
            />
            {!authPage && (
              <IconButton
                color="inherit"
                component={Link}
                to={routAuth.endPoint}
                className={classes.loginButton}
              >
               <Icon component={routAuth.icon} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    );
  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={!homePage ? classes.toolBar : classes.homeToolBar} disableGutters={!hideMD} >
          <Box
            display="flex"
            alignItems="center"
            className={classes.optionsRight}
          >
            {(homePage || !hideMD) && routsMenu && (
              <AsideBar
                routs={routsMenu}
                logo={appInfo.logo}
                title={appInfo.title}
                pathname={pathname}
                routsApp={routsApp}
              />
            )}

            <Typography variant="h6" noWrap>
              {!homePage ? pageName && pageName.value : appInfo.title}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            className={hideMD ? classes.optionsLeft : null}
          >
            <LangMenu
              options={langList}
              setCarrentLang={setCarrentLang}
              lang={lang}
              hideMD={hideMD}
            />
           
              <OptionsMenu user={user} getAuthLogout={getAuthLogout} routsApp={routsApp}  hideMD={hideMD}/>
          
           
          </Box>
        </Toolbar>
      </AppBar>
      {!homePage && hideMD && routsMenu && (
        <SideBar
          routs={routsMenu}
          logo={appInfo.logo}
          title={appInfo.title}
          pathname={pathname}
          routsApp={routsApp}
        />
      )}
    </>
  );
});

function mapStateToProps(state) {
  return {
    routsMenu: getRoutsMenu(state),
    appInfo: getAppTitle(state),
    lang: getCurrentLang(state),
    langList: getLangList(state),
    authStatus: getAuthStatus(state),
    user: getUserInfo(state),
    routsApp: getRoutsApp(state),
    routAuth: getRoutAuth(state),
  };
}

export default compose(
  connect(mapStateToProps, { setCarrentLang, getAuthLogout }),
  withRouter
)(AppBarContainer);
