import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDeviceStatusByMac } from "../store/redusers/dashboard/status/status";
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
} from "../store/selectors/dashboard/status/statusSelectors.js";
import { Status,  } from "../components/Dashboard";
import { Container, Box,
  AppBar,
  Toolbar,
  Button,
  IconButton, } from "@material-ui/core";
import { getUILang } from "../store/selectors/appInit/initSelectors";
import { checkHexWithLang } from "../common/ReduxValidators";
import { getStatusMainWithLang } from "../store/selectors/dashboard/dashboardSelectors";
import { Redirect } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';
import { ArrowBack } from "@material-ui/icons";
import { SearchForm } from "../components/Dashboard/components";

const useStyles = makeStyles(theme => ({
  toolbar: {
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)"
  },
  searchForm: {
    maxWidth: "400px"
  }
}));



const StatusContainer = props => {
  const {
    getDeviceStatusByMac,
    searchStatus,
    isFetching,
    searchFormContent,
    lang,
    boxType,
    mainContent,
    match,
    location:{pathname},
    ...rest
   
  } = props;
  const urlMac=match.params.mac;
  useEffect(()=>{
    if (urlMac) {getDeviceStatusByMac(urlMac)}
    },[urlMac,getDeviceStatusByMac]);

  const classes = useStyles()
const buttonRedirect = (value) => {return props.history.push(`/dashboard/status/${value}`)};
 
  if (pathname !== match.url ) { return <Redirect to={match.url} />}
     

  const checkHex = checkHexWithLang(lang);

let pingAvailable = urlMac && urlMac.length === 12;
console.log(boxType);
let dvbcAvailable = boxType && boxType==='HYBRID';

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
                <Button
                  aria-label="display DVB-C"
                  size="small"
                  color="inherit"
                  disabled={!dvbcAvailable}
                >
                  DVB-C
                </Button>
                <Button
                  aria-label="display PING"
                  size="small"
                  color="inherit"
                  disabled={!pingAvailable}
                >
                  Ping
                </Button>
                <Button
                  aria-label="display Status"
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Status
                </Button>
              </Box>
            </Box>
            <Box className={classes.searchForm}>
              <SearchForm
                getStbStatusByMac={getDeviceStatusByMac}
                {...searchFormContent}
                checkHex={checkHex}
                buttonRedirect={buttonRedirect}
                initialValues={(urlMac)?{macInput: urlMac}:null}
              />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
      <Container maxWidth="lg">

        {!isFetching && searchStatus && props.boxType ? <Status {...rest}  photoAvailable={pingAvailable}/> :""}
      </Container>
    </>
  );
};

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
    dataStatusCards: getStatusValueRow(state)
  };
}

export default compose(
  withMainDiv,
  withAuthRole,
  connect(mapStateToProps, {
    getDeviceStatusByMac
  })
)(StatusContainer);



    