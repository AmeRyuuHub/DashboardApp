import React from 'react';
import { connect } from 'react-redux';
import { getStbStatusByMac} from '../store/redusers/StatusByMac/StatusByMac';
import {getPingInfoByMac} from '../store/redusers/PingByMac/PingByMac';
import {getDvbcInfoByMac} from '../store/redusers/DvbcByMac/DvbcByMac';
import {compose} from 'redux';
import { withAuthRole, withMainDiv } from '../components/Common/HOC/'
import { getStatusFetching, getStatusStbType, getStatusLastReport, getDetailsValue, getConnectValue, getStatusStbModel, getStatusSearchMac, getStatusSearchStatus, getStatusValueRow } from '../store/selectors/DashboardSelectors';
import Dashboard from '../components/ContentPages/Dashboard/Dashboard';
import SearchMacForm from '../components/ContentPages/Dashboard/SearchMacForm';
import {  Grid, Container, Divider, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getUILang } from '../store/selectors/dataUISelectors';
import { SubmissionError } from 'redux-form';





const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const DashboardContainer = props => {
  const startSearch = ({ macInput, deviceType }, dispatch) => {
    switch (deviceType) {
      case "stb":
        if (!macInput || macInput.length !== 12) {
          throw new SubmissionError({
            macInput: "Must be 12 symbols",
            _error: "MAC failed!"
          });
        } else {
          return props.getStbStatusByMac(macInput);
        }
      case "mob":
        if (!macInput || macInput.length !== 16) {
          throw new SubmissionError({
            macInput: "Must be 16 symbols",
            _error: "MAC failed!"
          });
        } else {
          return dispatch(props.getStbStatusByMac(macInput));
        }

      default:
        break;
    }
  };

  const getPingByMac = () => {
    props.getPingInfoByMac(props.macValue);
  };

  const getDvbcByMac = () => {
    props.getDvbcInfoByMac(props.macValue);
  };

  const classes = useStyles();
  const {
    getStbStatusByMac,
    getPingInfoByMac,
    searchStatus,
    isFetching,

    ...rest
  } = props;

  return (
    <div className={classes.root}>
     
      
      <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
          <SearchMacForm onSubmit={startSearch} />
        </Grid>
      </Grid>
      <Box color="text.secondary">
        <Typography variant="h6" >
          {(props.macValue && props.lastReport)?`Dashboard: ${props.macValue} ( last update: ${props.lastReport} )`:"Dashboard"}
        </Typography>
        <Divider/>
      </Box>
      
      </Container>
      {!isFetching && searchStatus && props.boxType && (
         <Container maxWidth="lg">
          <Dashboard
            {...rest}
            getPingByMac={getPingByMac}
            getDvbcByMac={getDvbcByMac}
          />
        </Container>
      
      
      )}
    
    </div>
  );
};

function mapStateToProps(state) {
  return {
    searchStatus: getStatusSearchStatus(state),
    isFetching: getStatusFetching(state),
    macValue: getStatusSearchMac(state),
    dataStatusCards: getStatusValueRow(state),
    boxType: getStatusStbType(state),
    lastReport: getStatusLastReport(state),
    dataDetailsRow: getDetailsValue(state),
    dataConnectRow: getConnectValue(state),
    boxModel: getStatusStbModel(state),
    lang: getUILang(state),
    
    
    
   
  };
}

export default compose(
  withMainDiv,
  withAuthRole,
  connect(mapStateToProps, {
    getStbStatusByMac,
    getPingInfoByMac,
    getDvbcInfoByMac
  })
)(DashboardContainer);


  


