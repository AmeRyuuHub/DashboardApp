import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getDeviceStatusByMac,
  getStatusPing,
  setStatusPingRouterFilter,
  setStatusPingPlatformFilter,
} from "../store/redusers/dashboard/status/status";
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
  getStatusPingRouterWithFilter,
  getDateArrayRouter,
  getStatusPingRouterPeakValues,
  getStatusPingRouterFilterValue,
  getStatusPingPlatformWithFilter,
  getDateArrayPlatform,
  getStatusPingPlatformPeakValues,
  getStatusPingPlatformFilterValue
} from "../store/selectors/dashboard/status/statusSelectors.js";
import { Status, Ping, Dvbc } from "../components/Dashboard";
import { Container, Box, IconButton } from "@material-ui/core";
import { getUILang } from "../store/selectors/appInit/initSelectors";
import { checkHexWithLang } from "../common/ReduxValidators";
import { getStatusMainWithLang } from "../store/selectors/dashboard/dashboardSelectors";
import { Redirect } from "react-router";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';
import { ArrowBack } from "@material-ui/icons";
import { SearchForm, SubMenuButtons } from "../components/Dashboard/components";

const useStyles = makeStyles(theme => ({
  toolbar: {
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)"
  },
  searchForm: {
    width: "100%",
    maxWidth: "500px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "1rem",
      marginLeft: "2rem"
    },

    minWidth: "200px"
  },
  mainDiv: {
    paddingTop: theme.spacing(2)
  }
}));

const StatusContainer = React.memo(props => {
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
    dataPlatform,
    ...rest
  } = props;
  const urlMac = match.params.mac;
  useEffect(() => {
    if (urlMac && urlMac !== macValue) {
      getDeviceStatusByMac(urlMac);
    }
  }, [urlMac, getDeviceStatusByMac, macValue]);

  const theme = useTheme();
  const hideMD = useMediaQuery(theme.breakpoints.up("sm"));

  const buttonRedirect = value => {
    return props.history.push(`/dashboard/status/${value}`);
  };
  let pingAvailable =
    boxType && urlMac && urlMac.length === 12 && macValue === urlMac;
  let dvbcAvailable = boxType && boxType === "HYBRID" && macValue === urlMac;

  if (
    match.params.tab &&
    (match.params.tab === "dvbc" || match.params.tab === "ping") &&
    !dvbcAvailable &&
    !boxType
  ) {
    return <Redirect to={`/dashboard/status/${match.params.mac}`} />;
  }

  const checkHex = checkHexWithLang(lang);

  return (
    <>
      <Box className={classes.toolbar}>
        <Container maxWidth="lg">
          <Box width="100%" display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              flexWrap={hideMD ? "initial" : "wrap"}
            >
              <Box order={0}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="back"
                  onClick={() => props.history.goBack()}
                >
                  <ArrowBack />
                </IconButton>
              </Box>
              <Box className={classes.searchForm} order={hideMD ? 1 : 3}>
                <SearchForm
                  getStbStatusByMac={getDeviceStatusByMac}
                  {...searchFormContent}
                  checkHex={checkHex}
                  buttonRedirect={buttonRedirect}
                  initialValues={urlMac ? { macInput: urlMac } : null}
                />
              </Box>

              <Box order={2} flexGrow={1}>
                <Box display="flex" justifyContent="end">
                  <SubMenuButtons
                    active={match.params.tab}
                    mac={match.params.mac}
                    dvbcAvailable={dvbcAvailable}
                    pingAvailable={pingAvailable}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" className={classes.mainDiv}>
        {!isFetching && searchStatus && props.boxType && urlMac ? (
          match.params.tab && match.params.tab === "ping" ? (
            <Ping
              getStatusPing={props.getStatusPing}
              mac={match.params.mac}
              macStateValue={pingMacValue}
              failed={props.pingFailed}
              isFatching={props.pingFetching}
              lang={lang}
              hideMD={hideMD}
              
              dataRouter={dataRouter}
              dateArrayRouter={props.dateArrayRouter}
              dataPeakValuesRouter={props.dataPeakValuesRouter}
              setRouterFilter={props.setStatusPingRouterFilter}
              currentFilterRouter={props.currentFilterRouter}
        
              dataPlatform={dataPlatform}
              dateArrayPlatform={props.dateArrayPlatform}
              dataPeakValuesPlatform={props.dataPeakValuesPlatform}
              setPlatformFilter={props.setStatusPingPlatformFilter}
              currentFilterPlatform={props.currentFilterPlatform}
             
             
            />
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
    dataRouter: getStatusPingRouterWithFilter(state),
    dateArrayRouter: getDateArrayRouter(state),
    dataPeakValuesRouter: getStatusPingRouterPeakValues(state),
    currentFilterRouter: getStatusPingRouterFilterValue(state),

    dataPlatform: getStatusPingPlatformWithFilter(state),
    dateArrayPlatform: getDateArrayPlatform(state),
    dataPeakValuesPlatform: getStatusPingPlatformPeakValues(state),
    currentFilterPlatform: getStatusPingPlatformFilterValue(state),
  };
}

export default compose(
  withMainDiv,
  withAuthRole,
  connect(mapStateToProps, {
    getDeviceStatusByMac,
    getStatusPing,
    setStatusPingRouterFilter,
    setStatusPingPlatformFilter,
  })
)(StatusContainer);
