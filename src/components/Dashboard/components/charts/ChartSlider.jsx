import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '13.12',
  },
  {
    value: 15,
    label: '14.12',
  },
  {
    value: 30,
    label: '15.12',
  },
  {
    value: 45,
    label: '16.12',
  },
  {
    value: 60,
    label: '17.12',
  },
  {
    value: 75,
    label: '18.12',
  },
  {
    value: 88,
    label: '19.12',
  },
 
  {
    value: 100,
    label: '20.12',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
    let currentLabel = marks.filter(mark => mark.value === value)[0];
  return currentLabel ? currentLabel.label.split(".")[0] : "";
}

export default function ChartSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography>
      <Slider
        defaultValue={100}
        value={[30,75]}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
       
        valueLabelDisplay="auto"
        marks={marks}
      />
     
    </div>
  );
}


