import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDeviceStatusByMac, getStatusPing } from "../store/redusers/dashboard/status/status";
import { compose } from "redux";
import { withAuthRole, withMainDiv } from "../common/HOC";
import {
  getStatusFetching,
  getStatusStbType,
  getStatusLastReport,
  getDetailsValue,
  getConnectValue,
  getStatusStbModel,
  getStatusSearchMac,
  getStatusSearchStatus,
  getStatusValueRow,
  getSearchFormWithLang,
  getStatusPinghMac,
  getStatusPingFailed,
  getStatusPingFetching,
  getDataStatusPingRouter,
} from "../store/selectors/dashboard/status/statusSelectors.js";
import { Status, Ping, Dvbc } from "../components/Dashboard";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { getUILang } from "../store/selectors/appInit/initSelectors";
import { checkHexWithLang } from "../common/ReduxValidators";
import { getStatusMainWithLang } from "../store/selectors/dashboard/dashboardSelectors";
import { Redirect } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';
import { ArrowBack } from "@material-ui/icons";
import { SearchForm, SubMenuButtons } from "../components/Dashboard/components";

const useStyles = makeStyles(theme => ({
  toolbar: {
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)"
  },
  searchForm: {
    maxWidth: "400px"
  }
}));

const StatusContainer = React.memo( props => {
  const classes = useStyles();
  const {
    getDeviceStatusByMac,
    macValue,
    searchStatus,
    isFetching,
    searchFormContent,
    lang,
    boxType,
    mainContent,
    pingMacValue,
    match,
    dataRouter,
    ...rest
  } = props;
  const urlMac = match.params.mac;
  useEffect(() => {
    if (urlMac && urlMac !== macValue) {
      getDeviceStatusByMac(urlMac);
    }
  }, [urlMac, getDeviceStatusByMac, macValue]);


  const buttonRedirect = value => {
    return props.history.push(`/dashboard/status/${value}`);
  };
  let pingAvailable =boxType && urlMac && urlMac.length === 12;
  let dvbcAvailable = boxType && boxType === "HYBRID";


if (match.params.tab && (match.params.tab ==="dvbc"|| match.params.tab ==="ping") && !dvbcAvailable && !boxType ) {
  return <Redirect to={`/dashboard/status/${match.params.mac}`}/>
}

  const checkHex = checkHexWithLang(lang);



  return (
    <>
      <AppBar position="static" color="inherit" className={classes.toolbar}>
        <Toolbar disableGutters>
          <Container maxWidth="lg">
            <Box width="100%" display="flex" flexDirection="column">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="back"
                >
                  <ArrowBack />
                </IconButton>
                <Box>
                  <SubMenuButtons active={match.params.tab} mac={match.params.mac} dvbcAvailable={dvbcAvailable} pingAvailable={pingAvailable} />
                
                </Box>
              </Box>
              <Box className={classes.searchForm}>
                <SearchForm
                  getStbStatusByMac={getDeviceStatusByMac}
                  {...searchFormContent}
                  checkHex={checkHex}
                  buttonRedirect={buttonRedirect}
                  initialValues={urlMac ? { macInput: urlMac } : null}
                />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        {!isFetching && searchStatus && props.boxType ? (
          match.params.tab && match.params.tab === "ping" ? (
            <Ping  getStatusPing={props.getStatusPing} mac={match.params.mac} macStateValue={pingMacValue} failed={props.pingFailed} isFatching={props.pingFetching} dataRouter={dataRouter}/>
          ) : match.params.tab && match.params.tab === "dvbc" ? (
            <Dvbc />
          ) : (
            <Status {...rest} photoAvailable={pingAvailable} />
          )
        ) : (
          ""
        )}
      </Container>
    </>
  );
});

function mapStateToProps(state) {
  return {
    searchStatus: getStatusSearchStatus(state),
    isFetching: getStatusFetching(state),
    macValue: getStatusSearchMac(state),

    boxType: getStatusStbType(state),
    lastReport: getStatusLastReport(state),
    dataDetailsRow: getDetailsValue(state),
    dataConnectRow: getConnectValue(state),
    boxModel: getStatusStbModel(state),
    lang: getUILang(state),
    searchFormContent: getSearchFormWithLang(state),
    mainContent: getStatusMainWithLang(state),
    dataStatusCards: getStatusValueRow(state),
    pingMacValue: getStatusPinghMac(state),
    pingFailed: getStatusPingFailed(state),
    pingFetching: getStatusPingFetching(state),
    dataRouter:getDataStatusPingRouter(state),
  };
}

export default compose(
  withMainDiv,
  withAuthRole,
  connect(mapStateToProps, {
    getDeviceStatusByMac, getStatusPing
  })
)(StatusContainer);
