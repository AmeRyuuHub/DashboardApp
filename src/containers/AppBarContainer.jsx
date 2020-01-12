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
} from "../store/selectors/contentSelectors";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import {
  AsideBar,
  LangMenu,
  SideBar,
  OptionsMenu
} from "../components/MainBar";
import { setCarrentLang } from "../store/redusers/lang/lang";
import { compose } from "redux";
import { getAuthLogout } from "../store/redusers/auth/Auth";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  navItems: {
    display: "flex",
    alignItems: "center"
  },

  toolBar: {
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: "240px"
    },
    minHeight: "70px"
  },
  homeToolBar: {
    justifyContent: "space-between",
    minHeight: "70px"
  },
  bar: {
    boxShadow: "none",
    minHeight: "70px"
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
    routsApp
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const hideMD = useMediaQuery(theme.breakpoints.up("md"));
  let pageName =
    routsMenu && routsMenu.filter(rout => rout.endPoint === pathname)[0];

  let homePage = pathname === "/" || pathname === "";
  let authPage = pathname === "/auth";
  if (!authStatus)
    return (
      <div>
        <AppBar position="fixed" className={classes.bar}>
          <Toolbar className={classes.homeToolBar}>
            {authPage && (
              <IconButton color="inherit" component={Link} to="/">
                <ArrowBack />
              </IconButton>
            )}

            <Typography variant="h6">{appInfo.title}</Typography>

            <div className={classes.navItems}>
              <LangMenu
                options={langList}
                setCarrentLang={setCarrentLang}
                lang={lang}
              />
              {!authPage && (
                <Button
                  variant="outlined"
                  color="inherit"
                  component={Link}
                  to="/auth"
                >
                  Sing In
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  return (
    <div>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar className={!homePage ? classes.toolBar : classes.homeToolBar}>
          {(homePage || !hideMD) && routsMenu && (
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

          <OptionsMenu
            auth={authStatus}
            user={user}
            getAuthLogout={getAuthLogout}
            langList={langList}
            setCarrentLang={setCarrentLang}
            lang={lang}
          />
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
    routsApp: getRoutsApp(state)
  };
}

export default compose(
  connect(mapStateToProps, { setCarrentLang, getAuthLogout }),
  withRouter
)(AppBarContainer);
