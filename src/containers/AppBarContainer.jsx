import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  getRoutsMenu,
  getAppTitle,
  getCurrentLang,
  getLangList,
  getAuthStatus,
  getUserInfo,
  getRoutsApp
} from "../store/selectors/dataUISelectors";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {
  AsideBar,
  LangMenu,
  SubMenu,
  ToolBarList,
  OptionsMenu
} from "../components/MainBar";
// import { ToolBar } from "../components/MainBar";
import { setCarrentLang } from "../store/redusers/dataUI/DataUI";
import { compose } from "redux";
import { getAuthLogout } from "../store/redusers/auth/Auth";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  navItems: {
    display: "flex",
    alignItems: "center"
  },

  toolBar: {
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      marginLeft: "240px"
    },
  },
  homeToolBar: {
    justifyContent: "space-between",
    
  },
  bar:{
     boxShadow:'none', minHeight:'70px'}
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
    routsApp
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const hideMD = useMediaQuery(theme.breakpoints.up("md"));
  let pageName =
    routsMenu && routsMenu.filter(rout => rout.endPoint === pathname)[0];

  let homePage = pathname === "/" || pathname === "";

  return (
    <div>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar className={!homePage ? classes.toolBar : classes.homeToolBar}>
          {!homePage && !hideMD && routsMenu && (
            <AsideBar
              routs={routsMenu}
              logo={appInfo.logo}
              title={appInfo.title}
              pathname={pathname}
              routsApp={routsApp}
            />
          )}

          <Typography variant="h6">
            {!homePage ? pageName && pageName.value : appInfo.title}
          </Typography>
          
          <div className={classes.navItems}>
            {hideMD ? (
              <>
                <LangMenu
                  options={langList}
                  setCarrentLang={setCarrentLang}
                  lang={lang}
                />
                <SubMenu
                  auth={authStatus}
                  user={user}
                  getAuthLogout={getAuthLogout}
                />
              </>
            ) : (
              <OptionsMenu
                auth={authStatus}
                user={user}
                getAuthLogout={getAuthLogout}
                options={langList}
                setCarrentLang={setCarrentLang}
                lang={lang}
              />
            )}
          </div>
        </Toolbar>
      </AppBar>
      {!homePage && hideMD && routsMenu && (
        <ToolBarList
          routs={routsMenu}
          logo={appInfo.logo}
          title={appInfo.title}
          pathname={pathname}
          routsApp={routsApp}
        />
      )}
    </div>
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
    routsApp:getRoutsApp(state)
  };
}

export default compose(
  connect(mapStateToProps, { setCarrentLang , getAuthLogout}),
  withRouter
)(AppBarContainer);






