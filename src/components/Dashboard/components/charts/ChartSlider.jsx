import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import moment from 'moment';

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
  const {dateArray} = props;
  const marks = marksValues.map((item, index) => ({value:item, label:moment(dateArray[index]).format("DD.MM")}));
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    if (newValue[0]<newValue[1]) {
      setValue(newValue);
    }
    
  };

  const valueLabelFormat = (value) => {
    let currentLabel = marks.filter(mark => mark.value === value)[0];
  return currentLabel ? currentLabel.label.split(".")[0] : "";
};

  return (
    <div className={classes.root}>
     
      <div className={classes.margin} />
      {/* <Typography id="discrete-slider-restrict" gutterBottom variant="h4">
       {`Ping to router from ${dateArray[0]} to ${dateArray[dateArray.length -1]}`}
      </Typography> */}
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
    </div>
  );
}
)


export default ChartSlider;