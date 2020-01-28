import React, { useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  SvgIcon,
  CardHeader,
  IconButton,
  Collapse,
  CardContent,
  Card,
  Divider
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import ChartUnit from "./components/charts/ChartUnit";
// import PieChart from "./components/charts/PieChart";
import ChartSlider from "./components/charts/ChartSlider";
import { StatusCard } from "./components";
import {
  mdiTelevisionBox,
  mdiSwapHorizontal,
  mdiRouterWireless
} from "@mdi/js";
import { useTheme } from "@material-ui/core/styles";
import { FilterList } from "@material-ui/icons";
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
    height: 40,
    width: 40,
    margin: "0 1rem"
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
  const theme = useTheme();
  const {
    getStatusPing,
    mac,
    macStateValue,
    isFatching,
    failed,
    dataRouter,
    dateArrayRouter,
    dataPeakValuesRouter
  } = props;

  useEffect(() => {
    if (macStateValue !== mac) {
      getStatusPing(mac);
    }
  }, [getStatusPing, mac, macStateValue]);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };




  if (isFatching) {
    return <Media />;
  }
  return (
    <Box>
      {!failed ? (
        <Card>
          <CardHeader
            avatar={
              <Box display="flex" justifyContent="center">
                <SvgIcon>
                  <path fill={theme.palette.grey[500]} d={mdiTelevisionBox} />
                </SvgIcon>
                <SvgIcon>
                  <path fill={theme.palette.grey[500]} d={mdiSwapHorizontal} />
                </SvgIcon>
                <SvgIcon>
                  <path fill={theme.palette.grey[500]} d={mdiRouterWireless} />
                </SvgIcon>
              </Box>
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={handleChange}
                color={expanded ? "secondary" : "default"}
              >
                <FilterList />
              </IconButton>
            }
            title="Ping to Router"
            subheader={
              props.currentFilterRouter
                ? `from ${moment(props.currentFilterRouter[0]).format(
                    "DD.MM"
                  )} to ${moment(props.currentFilterRouter[1]).format(
                    "DD.MM"
                  )} `
                : `from ${moment(dateArrayRouter[0]).format("DD.MM")} to ${moment(dateArrayRouter[dateArrayRouter.length -1]).format("DD.MM")}`
            }
          />
          <Divider />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <ChartSlider
                dateArray={dateArrayRouter}
                hideMD={props.hideMD}
                getRouterFilter={props.getRouterFilter}
                currentFilter={props.currentFilterRouter}
              />
            </CardContent>
          </Collapse>
          <CardContent>
            <ChartUnit data={dataRouter} lang={props.lang} title={"router"} />

            <Grid container spacing={2}>
              {dataPeakValuesRouter &&
                dataPeakValuesRouter.map(card => (
                  <Grid item xs={12} sm={6} md={6} lg={3} key={card.id}>
                    <StatusCard data={card} variant={"outlined"} />
                  </Grid>
                ))}
            </Grid>
          </CardContent>
        </Card>
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
