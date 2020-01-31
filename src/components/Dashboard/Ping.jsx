import React, { useEffect } from "react";
import {
  Grid,
  Box,
  CardHeader,
  IconButton,
  Collapse,
  CardContent,
  Card,
  Divider
} from "@material-ui/core";

import ChartUnit from "./components/charts/ChartUnit";
// import PieChart from "./components/charts/PieChart";
import ChartSlider from "./components/charts/ChartSlider";
import { StatusCard } from "./components";
import { FilterList } from "@material-ui/icons";
import moment from "moment";
import PingAvatar from "./components/PingCharts/PingAvatar";
import NotFound from "./components/NotFound";
import { MainLinearProgress } from "../../common/ProgressLines";
import PingSkeleton from "./components/skeletons/PingSkeleton";
import { testChartOptions } from "./components/charts/testData";

const Ping = React.memo(props => {
  const {
    getStatusPing,
    mac,
    macStateValue,
    isFatching,
    failed,
    dataRouter,
    dateArrayRouter,
    dataPeakValuesRouter,
    lang,
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
    return (<><MainLinearProgress /> <PingSkeleton/></>);
  }
  const chartOpt=testChartOptions(lang, "red")
  return (
    <Box>
      {!failed ? (
        <Card>
          <CardHeader
            avatar={<PingAvatar />}
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
                : `from ${moment(dateArrayRouter[0]).format(
                    "DD.MM"
                  )} to ${moment(
                    dateArrayRouter[dateArrayRouter.length - 1]
                  ).format("DD.MM")}`
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
            <ChartUnit data={dataRouter} lang={props.lang} title={"router"}  options={chartOpt} langFatching={props.langFatching}/>

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
        <NotFound />
      )}
    </Box>
  );
});

export default Ping;
