import React from "react";
import {
  Grid,
  CardHeader,
  IconButton,
  Collapse,
  CardContent,
  Card,
  Divider,
  Box
} from "@material-ui/core";

import ChartUnit from "../charts/ChartUnit";
import ChartSlider from "../charts/ChartSlider";
import { StatusCard } from "../../components";
import { FilterList } from "@material-ui/icons";
import moment from "moment";
import PingAvatar from "./PingAvatar";

const PingCard = React.memo(props => {
  const {
      chartId,
    title,
    data,
    dateArray,
    dataPeakValues,
    currentFilter,
    setFilter,
    hideMD,
    lang,
    color,
  } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  let subheaderText = currentFilter
    ? `from ${moment(currentFilter[0]).format("DD.MM")} to ${moment(
        currentFilter[1]
      ).format("DD.MM")} `
    : `from ${moment(dateArray[0]).format("DD.MM")} to ${moment(
        dateArray[dateArray.length - 1]
      ).format("DD.MM")}`;


  return (
      <Box mb={2}>

<Card>
      <CardHeader
        avatar={<PingAvatar variant={chartId}/>}
        action={
          <IconButton
            aria-label="settings"
            onClick={handleChange}
            color={expanded ? "secondary" : "default"}
          >
            <FilterList />
          </IconButton>
        }
        title={title}
        subheader={subheaderText}
      />
      <Divider />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ChartSlider
            dateArray={dateArray}
            hideMD={hideMD}
            setFilter={setFilter}
            currentFilter={currentFilter}
          />
        </CardContent>
      </Collapse>
      <CardContent>
        <ChartUnit data={data} lang={lang} chartId={chartId}  color={color}/>

        <Grid container spacing={2}>
          {dataPeakValues &&
            dataPeakValues.map(card => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={card.id}>
                <StatusCard data={card} variant={"outlined"} />
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </Card>
      </Box>
    
  );
});

export default PingCard;
