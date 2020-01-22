import React, { useEffect } from "react";
import { Grid, Box, Typography, Button, Paper, Icon } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from '@material-ui/core/styles';
import ChartUnit from './components/charts/ChartUnit';
import PieChart from "./components/charts/PieChart";
import ChartSlider from "./components/charts/ChartSlider";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


const useStyles = makeStyles(theme => ({
  backdrop: {
    // zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  wrapper:{
    // position:"relative",
    // height:'80vh'
  },

  errorImg:{
  
    marginTop:'15vh', 
    width:'30%',
    opacity:0.7,
    minWidth:'10rem',
    marginBottom:'1rem'
  },
  root: {
    height: "100%"
  },

  title: {
    fontWeight: 550
  },

  icon: {
    height: 80,
    width: 80
  },
  iconMin: {
    height: 80,
    width: 80,
    color:theme.palette.success.main,
  },
  iconMax: {
    height: 80,
    width: 80,
    color:theme.palette.error.main,
  },
  divIcon: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2)
  }
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

const  Ping = React.memo((props) => {
  const classes = useStyles();
  const {getStatusPing, mac, macStateValue, isFatching, failed, dataRouter} = props;
 
  
useEffect(() => {
  if (macStateValue!== mac){
    getStatusPing(mac)
  }
 
}, [getStatusPing, mac, macStateValue]);
if (isFatching) {return <Media />}
  return (
    <Box >
     {!failed ? <Box>

      <Paper className={classes.root}>
      <div className={classes.divIcon}>
        <div>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="button"
          >
            Min Value
          </Typography>
          <Typography variant="h6">12345</Typography>
        </div>

        <Icon className={classes.icon} >
        <ArrowDownward  className={classes.iconMin}/>
        </Icon>
      </div>
    </Paper>
    <Paper className={classes.root}>
      <div className={classes.divIcon}>
        <div>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="button"
          >
            Max Value
          </Typography>
          <Typography variant="h6">987654</Typography>
        </div>

        <Icon className={classes.icon} >
        <ArrowUpward className={classes.iconMax}/>
        </Icon>
      </div>
    </Paper>




       <ChartSlider/>
      <ChartUnit
              data={dataRouter}
              lang={props.lang}
              title={"router"}
              
            />
       <PieChart/>
       </Box> : 
     <Box className={classes.wrapper} display="flex" alignItems="center" flexDirection="column">
       <img src="/svg/bug_fixing.svg" alt="Failed" className={classes.errorImg}/>
       <Typography variant="subtitle1" color="textSecondary" gutterBottom >
         Data not found.
       </Typography>
       <Button variant='contained' color="primary"> Retry</Button>
       </Box>} 
    </Box>
  );
})

export default Ping;