import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import { Card,  Grid, MobileStepper, Button,  CardContent } from "@material-ui/core";
// import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableViews from "react-swipeable-views";

 const useStyles = makeStyles(theme => ({
   root: {
     flexGrow: 1
   },
   header: {
     display: "flex",
     alignItems: "center",
     height: 50,
     paddingLeft: theme.spacing(4),
     backgroundColor: theme.palette.background.default
   },
   img: {
     maxWidth: "100%",
     overflow: "hidden",
     display: "block",
   margin:'auto'
   }
 }));

 const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const PhotoRow=React.memo((props) =>{
   let stbImgs = [
     `/img/boxs/${props.boxModel}_front.png`,
     `/img/boxs/${props.boxModel}_pers.png`,
     `/img/boxs/${props.boxModel}_back.png`
   ];

   const classes = useStyles();
   const theme = useTheme();
   const [activeStep, setActiveStep] = React.useState(0);
   const maxSteps = stbImgs.length;

   const handleNext = () => {
     setActiveStep(prevActiveStep => prevActiveStep + 1);
   };

   const handleBack = () => {
     setActiveStep(prevActiveStep => prevActiveStep - 1);
   };
   const handleStepChange = step => {
     setActiveStep(step);
   };
  
   const hideMD = useMediaQuery(theme.breakpoints.up("md"));

   return (
     
   
    
    <Card >
    
  <CardContent>
      {hideMD ? <Grid container spacing={2}>
           {stbImgs.map(step => (
             <Grid item  xs={4} key={step}>
               <img className={classes.img} src={step} alt={props.boxModel} />
             </Grid>
           ))}
         </Grid>:
         <>

<AutoPlaySwipeableViews
           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
           index={activeStep}
           onChangeIndex={handleStepChange}
           enableMouseEvents
           interval={7000}
         >
           {stbImgs.map((step, index) => (
             <div key={step}>
               {Math.abs(activeStep - index) <= 2 ? (
                 <img className={classes.img} src={step} alt={props.boxModel} />
               ) : null}
             </div>
           ))}
         </AutoPlaySwipeableViews>

         <MobileStepper
           steps={maxSteps}
           position="static"
           variant="dots"
           activeStep={activeStep}
           nextButton={
             <Button
               size="small"
               onClick={handleNext}
               disabled={activeStep === maxSteps - 1}
             >
               
               {theme.direction === "rtl" ? (
                 <KeyboardArrowLeft />
               ) : (
                 <KeyboardArrowRight />
               )}
             </Button>
           }
           backButton={
             <Button
               size="small"
               onClick={handleBack}
               disabled={activeStep === 0}
             >
               {theme.direction === "rtl" ? (
                 <KeyboardArrowRight />
               ) : (
                 <KeyboardArrowLeft />
               )}
              
             </Button>
           }
         />

         </>
         }
         
     
       
      </CardContent>
     </Card>
    
     
   );
 })



 export default PhotoRow;







