import React from "react";
import {CloudDownload} from "@material-ui/icons";
import {  Button, Card, CardHeader, CardContent, CircularProgress, Typography, } from "@material-ui/core";
import {  getDvbcRequestStatus, getDvbcRequestFailed, getDvbcFetching, getDataDvbcFreq, getDvbcFreqList } from "../store/selectors/DashboardSelectors";
import { connect } from 'react-redux';
import DvbcChart from "../components/Dashboard/DashboardItems/DvbcCharts/DvbcChart";
import DvbcTimeChart from "../components/Dashboard/DashboardItems/DvbcCharts/DvbcTimeChart";




const DvbcContainer = React.memo(props => {




  let buttonPading={marginTop:'8px',marginRight: '8px'};
  return (
    <Card>
      <CardHeader
        action={
          !props.requestDvbcStatus && (
            <>
              {props.requestDvbcFailed && (
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
                onClick={props.getDvbcByMac}
              >
                upload charts
              </Button>
            </>
          
            
          )
        }
        title={<Typography variant="h6">DVB-C</Typography>}
      />

      {props.requestDvbcStatus && (
        <CardContent>
          <DvbcChart
            
            lang={props.lang}
           data ={props.data}
           list={props.list}
          />
           <DvbcTimeChart
            
            lang={props.lang}
           data ={props.data}
           list={props.list}
          />
          
        </CardContent>
      )}
    </Card>
  );
});



function mapStateToProps(state) {
 
  return {
      requestDvbcStatus: getDvbcRequestStatus(state),
      requestDvbcFailed:getDvbcRequestFailed(state),
    isFetching: getDvbcFetching(state),
     data: getDataDvbcFreq(state),
     list:getDvbcFreqList(state),
    
  };
}

export default 
 
  connect(mapStateToProps,null)(DvbcContainer);










