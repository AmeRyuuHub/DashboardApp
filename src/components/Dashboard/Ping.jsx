import React, { useEffect } from "react";
import {
  Box,
} from "@material-ui/core";

import NotFound from "./components/NotFound";
import { MainLinearProgress } from "../../common/ProgressLines";
import PingSkeleton from "./components/skeletons/PingSkeleton";
import PingCard from "./components/PingCharts/PingCard";


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
    setRouterFilter,
    currentFilterRouter,
    hideMD,
    lang,
  } = props;

  useEffect(() => {
    if (macStateValue !== mac) {
      getStatusPing(mac);
    }
  }, [getStatusPing, mac, macStateValue]);


  if (isFatching) {
    return (<><MainLinearProgress /> <Box mb={2}><PingSkeleton/></Box><Box mb={2}><PingSkeleton/></Box></>);
  }
  
  return (
    <Box>
      {!failed ? ( <>
        <PingCard  title={"Ping to Router"}
        chartId={"router"}
        data={dataRouter}
        dateArray={dateArrayRouter}
        dataPeakValues={dataPeakValuesRouter}
        currentFilter={currentFilterRouter}
        setFilter={setRouterFilter}
        hideMD={hideMD}
        lang={lang} />

        <PingCard  title={"Ping to Platform"}
        color={"palette2"}
        chartId={"platform"}
        data={props.dataPlatform}
        dateArray={props.dateArrayPlatform}
        dataPeakValues={props.dataPeakValuesPlatform}
        currentFilter={props.currentFilterPlatform}
        setFilter={props.setPlatformFilter}
        hideMD={hideMD}
        lang={lang} />
        </>
      ) : (
        <NotFound />
      )}
    </Box>
  );
});

export default Ping;

