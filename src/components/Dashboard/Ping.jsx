import React, { useEffect } from "react";
import { Grid, Box, Typography, Button, Paper, Icon } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import ChartUnit from "./components/charts/ChartUnit";
import PieChart from "./components/charts/PieChart";
import ChartSlider from "./components/charts/ChartSlider";
import { ArrowDownward, ArrowUpward, VerticalAlignCenter } from "@material-ui/icons";
import moment from "moment";

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
    height: 80,
    width: 80
  },
  iconMin: {
    height: 80,
    width: 80,
    color: theme.palette.success.main
  },
  iconMax: {
    height: 80,
    width: 80,
    color: theme.palette.error.main
  },
  iconAvg: {
    height: 80,
    width: 80,
    color: theme.palette.grey[400]
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

const Ping = React.memo(props => {
  const classes = useStyles();
  const {
    getStatusPing,
    mac,
    macStateValue,
    isFatching,
    failed,
    dataRouter,
    maxRouter,
    minRouter,
    avgRouter,
    dateArrayRouter,
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
            <ChartSlider  dateArray={dateArrayRouter}/>
            <Grid item xs={12} sm={12} md={8} lg={8}>
            <Paper>
          
            <ChartUnit data={dataRouter} lang={props.lang} title={"router"} />
            </Paper>
           
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper>
            <PieChart />
            </Paper>
         
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper className={classes.root}>
              <div className={classes.divIcon}>
                <div>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="button"
                  >
                    MIN
                  </Typography>
                  <Typography variant="h6">{`${minRouter[1]} ms`}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">{`${ moment(+minRouter[0]).format(
          "DD.MM.YYYY HH:mm"
        )}`}</Typography>
                </div>

                <Icon className={classes.icon}>
                  <ArrowDownward className={classes.iconMin} />
                </Icon>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper className={classes.root}>
              <div className={classes.divIcon}>
                <div>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="button"
                  >
                    Max
                  </Typography>
                  <Typography variant="h6">{`${maxRouter[1]} ms`}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">{`${ moment(+maxRouter[0]).format(
          "DD.MM.YYYY HH:mm"
        )}`}</Typography>
                </div>

                <Icon className={classes.icon}>
                  <ArrowUpward className={classes.iconMax} />
                </Icon>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper className={classes.root}>
              <div className={classes.divIcon}>
                <div>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="button"
                  >
                    AVG
                  </Typography>
                  <Typography variant="h6">{`${avgRouter.toFixed(2)} ms`}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">{`in 7 days`}</Typography>
                </div>

                <Icon className={classes.icon}>
                  <VerticalAlignCenter className={classes.iconAvg} />
                </Icon>
              </div>
            </Paper>
          </Grid>
          
          
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
