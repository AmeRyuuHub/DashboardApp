import React from "react";
import { Grid} from "@material-ui/core";
import StatusCard from "./components/StatusCard";
import CardsWithoutStatus from "./components/CardsWithoutStatus";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 -8px 8px -8px"
  }
}));



 
const Dashboard = React.memo(props => {
  const { boxType, dataStatusCards, ...rest } = props;
  const classes = useStyles();
  return (
    <>
      
      <Grid container className={classes.root}  spacing={2}>
        {
          dataStatusCards.map(card => (
            <Grid item lg={3} sm={6} xl={3} xs={12} key={card.id}>
              <StatusCard data={card} />
            </Grid>
          ))}
      </Grid>

      {<CardsWithoutStatus {...rest} boxType={boxType}/>}
    </>
  );
});

export default Dashboard;