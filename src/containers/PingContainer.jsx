import React from "react";
import {CloudDownload,FilterList} from "@material-ui/icons";
import { Button, Card, CardHeader, FormControl, Select, CardContent, CircularProgress, MenuItem, Typography, InputAdornment} from "@material-ui/core";
import { getDataPingRouter, getDataPingPlatform, getPingFetching, getPingRequestStatus, getPingRequestFailed } from "../store/selectors/dashboard/ping/pingSelectors";
import { connect } from 'react-redux';
import ChartUnit from "../components/Dashboard/components/PingCharts/ChartUnit";

import { compose } from "redux";
import { withAuthRole, withMainDiv } from "../common/HOC";
import {
  getStatusStbType,
  getStatusLastReport,
  getStatusSearchMac,
  getStatusSearchStatus,
  getStatusValueRow,
  getSearchFormWithLang,
} from "../store/selectors/dashboard/status/statusSelectors";
import { SearchForm} from "../components/Dashboard/components";
import { Grid, Container, Divider, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getUILang } from "../store/selectors/appInit/initSelectors";
import { checkHexWithLang } from "../common/ReduxValidators";
import { getPingInfoByMac } from "../store/redusers/dashboard/ping/ping";
import { getStatusMainWithLang } from "../store/selectors/dashboard/dashboardSelectors";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2)
  }
}));

const PingChartContainer = React.memo(props => {
  const {
    getPingInfoByMac,
    searchStatus,
    isFetching,
    searchFormContent,
    lang,
    mainContent,
    ...rest
  } = props;

  const classes = useStyles();
  const [period, setPeriod] = React.useState(6);
  const handleChange = event => {
    setPeriod(+(event.target.value));
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const checkHex = checkHexWithLang(lang);
let buttonPading={marginTop:'8px',marginRight: '8px'};
  let startDate = new Date(new Date().setDate(new Date().getDate()-(+period))).setHours(0, 0, 0, 0);
  return (
    
<Container maxWidth="lg">
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
            <SearchForm
              getStbStatusByMac={props.getStbStatusByMac}
              {...searchFormContent}
              checkHex={checkHex}
            />
          </Grid>
        </Grid>
        <Box color="text.secondary">
          <Typography variant="h6" component="span">
            {mainContent.title}
          </Typography>
          <Typography variant="h6" component="span">
            {props.macValue && ` ${props.macValue} `}
          </Typography>
          {props.lastReport && (
            <Typography variant="h6" component="span">
              {`( ${mainContent.date} ${props.lastReport} )`}
            </Typography>
          )}
          <Divider />
        </Box>
     
      {!isFetching && searchStatus && props.boxType && (
        
        <Card>
        <CardHeader
          action={
            !props.requestPingStatus ? (
              <>
                {props.requestPingFailed && (
                  <Typography color="error" component="span" variant="body2">
                    Something wrone, try again
                  </Typography>
                )}
                <Button style={buttonPading}
                  disabled={props.isFetching}
                  variant="contained"
                  color="primary"
                  startIcon={
                    props.isFetching ? (
                      <CircularProgress size={22} />
                    ) : (
                      <CloudDownload />
                    )
                  }
                  onClick={props.getPingByMac}
                >
                  upload charts
                </Button>
              </>
            ) : (
              
              <FormControl style={buttonPading}>
                <Select
                  
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  id={`select`}
                  value={period}
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterList />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={6}>Last 7 days</MenuItem>
                  <MenuItem value={5}>Last 6 days</MenuItem>
                  <MenuItem value={4}>Last 5 days</MenuItem>
                  <MenuItem value={3}>Last 4 days</MenuItem>
                  <MenuItem value={2}>Last 3 days</MenuItem>
                  <MenuItem value={1}>Last 2 days</MenuItem>
                  <MenuItem value={0}>Today</MenuItem>
                </Select>
              </FormControl>
              
            )
          }
          title={<Typography variant="h6">Ping</Typography>}
        />
  
        {props.requestPingStatus && (
          <CardContent>
            <ChartUnit
              data={props.dataRouter}
              lang={props.lang}
              title={"router"}
              startDate={startDate}
            />
            <ChartUnit
              data={props.dataPlatform}
              lang={props.lang}
              title={"platform"}
              color={"palette2"}
              startDate={startDate}
            />
          </CardContent>
        )}
      </Card>
      
      )}
   </Container>

    
  );
});



function mapStateToProps(state) {
 
  return {
     requestPingStatus: getPingRequestStatus(state),
     requestPingFailed:getPingRequestFailed(state),
     isFetching: getPingFetching(state),
    dataRouter: getDataPingRouter(state),
    dataPlatform: getDataPingPlatform(state),

    searchStatus: getStatusSearchStatus(state),
    
    macValue: getStatusSearchMac(state),
    
    boxType: getStatusStbType(state),
    lastReport: getStatusLastReport(state),
    
    
    lang: getUILang(state),
    searchFormContent: getSearchFormWithLang(state),
    mainContent: getStatusMainWithLang(state),
    dataStatusCards: getStatusValueRow(state),

  };
}

export default compose(
  withMainDiv,
  withAuthRole,
  connect(mapStateToProps,getPingInfoByMac)
)(PingChartContainer);










