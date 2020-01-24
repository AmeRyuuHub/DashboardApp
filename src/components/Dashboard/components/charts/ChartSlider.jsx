import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Grid, Box, Typography, Slider, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  margin: {
    height: theme.spacing(3),
  },
  slider:{
    display:'block',
    margin:'auto',
    width:'90%',

  },
}));

// const marks = [
//   {
//     value: 0,
//     label: '13.12',
//   },
//   {
//     value: 15,
//     label: '14.12',
//   },
//   {
//     value: 30,
//     label: '15.12',
//   },
//   {
//     value: 45,
//     label: '16.12',
//   },
//   {
//     value: 60,
//     label: '17.12',
//   },
//   {
//     value: 75,
//     label: '18.12',
//   },
//   {
//     value: 88,
//     label: '19.12',
//   },
 
//   {
//     value: 100,
//     label: '20.12',
//   },
// ];

const marksValues = [0,14,29,44,59,74,86,100];

function valuetext(value) {
  return `${value}`;
}



const ChartSlider = React.memo((props)=> {
  const classes = useStyles();
  const {dateArray, hideMD, getRouterFilter} = props;
  const marks = marksValues.map((item, index) => ({value:item, label:moment(dateArray[index]).format(hideMD ? "DD.MM": "DD")}));
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    if (newValue[0]<newValue[1]) {
      setValue(newValue);
    }
    
  };
  const applyFilter = () => {
let firstIndex = marksValues.findIndex(item => item === value[0]);
let secondIndex = marksValues.findIndex(item => item === value[1]);
getRouterFilter([dateArray[firstIndex],dateArray[secondIndex]])
  };

  const valueLabelFormat = (value) => {
    let currentLabel = marks.filter(mark => mark.value === value)[0];
  return currentLabel ? currentLabel.label.split(".")[0] : "";
};

  return (
    <Box width={1}>
     
     
      <Typography id="route-slider" gutterBottom variant="subtitle1">
      Filter
      </Typography>
    
<Grid container>
  <Grid item xs={12} sm={12} md={10} lg={11}> 
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
      <div className={classes.margin}/>
  </Grid>
  <Grid item xs={12} sm={12} md={2} lg={1}>
<Button variant="contained" fullWidth color="primary" disabled={false} onClick={applyFilter}> Apply</Button>
  </Grid>
</Grid>
      
      
      
    </Box>
  );
}
)


export default ChartSlider;