import React from "react";
import {CloudDownload,FilterList} from "@material-ui/icons";
import {  Button, Card, CardHeader, FormControl, Select, CardContent, CircularProgress, MenuItem, Typography, InputAdornment} from "@material-ui/core";
import { getDataPingRouter, getDataPingPlatform, getPingFetching, getPingRequestStatus, getPingRequestFailed } from "../store/selectors/DashboardSelectors";
import { connect } from 'react-redux';
import ChartUnit from "../components/ContentPages/Dashboard/DashboardItems/PingCharts/ChartUnit";



const PingChartContainer = React.memo(props => {
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


let buttonPading={marginTop:'8px',marginRight: '8px'};
  let startDate = new Date(new Date().setDate(new Date().getDate()-(+period))).setHours(0, 0, 0, 0);
  return (
    <Card>
      <CardHeader
        action={
          !props.requestPingStatus ? (
            <>
              {props.requestPingFailed && (
                <Typography color="error" component="span" variant="body2">
                  Something wrone, try again{" "}
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
  );
});



function mapStateToProps(state) {
 
  return {
     requestPingStatus: getPingRequestStatus(state),
     requestPingFailed:getPingRequestFailed(state),
     isFetching: getPingFetching(state),
    dataRouter: getDataPingRouter(state),
    dataPlatform: getDataPingPlatform(state),
  };
}

export default 
 
  connect(mapStateToProps,null)(PingChartContainer);










