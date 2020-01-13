import React from 'react';
import { connect } from 'react-redux';
import { getStbStatusByMac} from '../store/redusers/statusByMac/StatusByMac';
import {getPingInfoByMac} from '../store/redusers/pingByMac/PingByMac';
import {getDvbcInfoByMac} from '../store/redusers/dvbcByMac/DvbcByMac';
import {compose} from 'redux';
import { withAuthRole, withMainDiv } from '../common/HOC'
import { getStatusFetching, getStatusStbType, getStatusLastReport, getDetailsValue, getConnectValue, getStatusStbModel, getStatusSearchMac, getStatusSearchStatus, getStatusValueRow, getSearchFormWithLang } from '../store/selectors/dashboardSelectors';
import Dashboard from '../components/Dashboard/Dashboard';
import SearchMacForm from '../components/Dashboard/SearchMacForm';
import {  Grid, Container, Divider, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getUILang } from '../store/selectors/contentSelectors';
import { checkHexWithLang } from '../common/ReduxValidators';
// import { SubmissionError } from 'redux-form';





const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2)
  }
}));

const DashboardContainer = props => {
  

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
    searchFormContent,
    lang,
    ...rest
  } = props;
  const checkHex = checkHexWithLang(lang);
  return (
    <div className={classes.root}>
     
      
      <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
          <SearchMacForm getStbStatusByMac={props.getStbStatusByMac} {...searchFormContent} checkHex={checkHex} />
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
    searchFormContent:getSearchFormWithLang(state),
    
    
    
   
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


  


