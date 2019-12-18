import React from "react";
import { Grid} from "@material-ui/core";
import StatusCard from "./DashboardItems/StatusCard";
import CardsWithoutStatus from "./DashboardItems/CardsWithoutStatus";


const Dashboard = React.memo(props => {
  const { boxType, dataStatusCards, ...rest } = props;

  return (
    <>
      
      <Grid container spacing={2}>
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