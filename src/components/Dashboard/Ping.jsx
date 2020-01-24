import React, { useEffect } from "react";
import { Grid, Box, Typography, Button, Paper,  SvgIcon } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import ChartUnit from "./components/charts/ChartUnit";
import PieChart from "./components/charts/PieChart";
import ChartSlider from "./components/charts/ChartSlider";
import { StatusCard } from "./components";
import {
  mdiTelevisionBox,
  mdiSwapHorizontal,
  mdiRouterWireless,
 
} from "@mdi/js";
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  backdrop: {
    // zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  wrapper: {
    // position:"relative",
    // height:'80vh'
  },

  errorImg: {
    marginTop: "15vh",
    width: "30%",
    opacity: 0.7,
    minWidth: "10rem",
    marginBottom: "1rem"
  },
  root: {
    height: "100%"
  },

  title: {
    fontWeight: 550
  },
  icon: {
    height: 40,
    width: 40,
    margin:'0 1rem'
  },
}));

function Media() {
  return (
    <Grid container wrap="nowrap">
      {Array.from(new Array(3)).map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          <Skeleton variant="rect" width={210} height={118} />

          <Box pt={0.5}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

const Ping = React.memo(props => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    getStatusPing,
    mac,
    macStateValue,
    isFatching,
    failed,
    dataRouter,
    dateArrayRouter,
    dataPeakValuesRouter,
  } = props;

  useEffect(() => {
    if (macStateValue !== mac) {
      getStatusPing(mac);
    }
  }, [getStatusPing, mac, macStateValue]);
  if (isFatching) {
    return <Media />;
  }
  return (
    <Box>
      {!failed ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
<Box display="flex" justifyContent="center">
<SvgIcon className={classes.icon}>
          <path
            fill={theme.palette.grey[500] }
            d={
              mdiTelevisionBox 
            }
          />
        </SvgIcon>
        <SvgIcon className={classes.icon}>
          <path
            fill={theme.palette.grey[500] }
            d={
              mdiSwapHorizontal 
            }
          />
        </SvgIcon>
        <SvgIcon className={classes.icon}>
          <path
            fill={theme.palette.grey[500] }
            d={
              mdiRouterWireless 
            }
          />
        </SvgIcon>

</Box>
          </Grid>
          <Grid item xs={12}>
          <ChartSlider  dateArray={dateArrayRouter} hideMD={props.hideMD} getRouterFilter={props.getRouterFilter} currentFilter={props.currentFilterRouter}/>
          </Grid>
            
            <Grid item  xs={12} sm={12} md={8} lg={8} >
            <Paper>
          
            <ChartUnit data={dataRouter} lang={props.lang} title={"router"} />
            </Paper>
           
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper>
            <PieChart />
            </Paper>
         
          </Grid>

          
        {
          dataPeakValuesRouter && dataPeakValuesRouter.map(card => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={card.id}>
              <StatusCard data={card} />
            </Grid>
          ))}
    
          
          
          <Grid item></Grid>
        </Grid>
      ) : (
        <Box
          className={classes.wrapper}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <img
            src="/svg/bug_fixing.svg"
            alt="Failed"
            className={classes.errorImg}
          />
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Data not found.
          </Typography>
          <Button variant="contained" color="primary">
            {" "}
            Retry
          </Button>
        </Box>
      )}
    </Box>
  );
});

export default Ping;
