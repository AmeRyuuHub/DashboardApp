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
  IconButton,
  Box
} from "@material-ui/core";
import {
  AsideBar,
  LangMenu,
  SideBar,
  OptionsMenu,
  OptionsList
} from "../components/AppBar";
import { setCarrentLang } from "../store/redusers/lang/lang";
import { compose } from "redux";
import { getAuthLogout } from "../store/redusers/auth/Auth";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import { getRoutPathName } from "../common";

const useStyles = makeStyles(theme => ({
  toolBar: {
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: "250px"
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
  let pageName = routsMenu && getRoutPathName(pathname, routsMenu);

  let homePage = pathname === "/" || pathname === "";
  let authPage = pathname === "/auth";
  if (pathname === "/profile") {
    pageName = { value: "Profile" };
  }
  if (!authStatus)
    return (
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar className={classes.homeToolBar}>
        <Box display="flex" alignItems="center" className={classes.optionsRight}>
          {authPage && (
            <IconButton color="inherit" component={Link} to="/">
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
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to="/auth"
                className={classes.loginButton}
              >
                Sing In
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    );
  return (
    <>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar className={!homePage ? classes.toolBar : classes.homeToolBar}>
        <Box display="flex" alignItems="center" className={classes.optionsRight}>
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
          {!hideMD ? (
            <OptionsMenu
              user={user}
              getAuthLogout={getAuthLogout}
              langList={langList}
              setCarrentLang={setCarrentLang}
              lang={lang}
            />
          ) : (
            <Box display="flex" alignItems="center" className={classes.optionsLeft}>
              <LangMenu
                options={langList}
                setCarrentLang={setCarrentLang}
                lang={lang}
              />
              <OptionsList user={user} getAuthLogout={getAuthLogout} />
            </Box>
          )}
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
    routsApp: getRoutsApp(state)
  };
}

export default compose(
  connect(mapStateToProps, { setCarrentLang, getAuthLogout }),
  withRouter
)(AppBarContainer);
