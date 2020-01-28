import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import {
  Grid,
  Box,
  Slider,
  Button,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  margin: {
    height: theme.spacing(3)
  },
  slider: {
    display: "block",
    margin: "auto",
    width: "90%"
  }
}));



function valuetext(value) {
  return `${value}`;
}

const ChartSlider = React.memo(props => {
 
  const classes = useStyles();
  const { dateArray, hideMD, getRouterFilter } = props;


  const marks = dateArray.map((item, index,arr) => ({
    value: +((100/(arr.length-1) * index).toFixed(0)),
    label: moment(dateArray[index]).format(hideMD ? "DD.MM" : "DD")
  }));
 
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    if (newValue[0] < newValue[1]) {
      setValue(newValue);
    }
  };
  const applyFilter = () => {
    let firstIndex = marks.findIndex(item => item.value === value[0]);
    let secondIndex = marks.findIndex(item => item.value === value[1]);
    getRouterFilter([dateArray[firstIndex], dateArray[secondIndex]]);
  };

  const valueLabelFormat = value => {
    let currentLabel = marks.filter(mark => mark.value === value)[0];
    return currentLabel ? currentLabel.label.split(".")[0] : "";
  };

  return (
    <Paper variant="outlined" width={1}>
      <Box textAlign="center" p={1}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={10} md={10} lg={11}>
            <Slider
              onChange={handleChange}
              value={value}
              step={null}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              className={classes.slider}
              valueLabelDisplay="auto"
              marks={marks}
            />
            <div className={classes.margin} />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={1}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              disabled={false}
              onClick={applyFilter}
            >
              {" "}
              Apply
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
});

export default ChartSlider;
