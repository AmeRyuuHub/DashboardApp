import React from "react";
import { Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PhotoRow, SettingsList, StatusCard } from "./components";


const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 -8px 8px -8px"
  }
}));



 
const Status = React.memo(props => {
  const { boxType, dataStatusCards} = props;
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

      <Grid container spacing={2}>
         { props.photoAvailable && <Grid item xs={12}>
            <PhotoRow boxModel={props.boxModel} />
          </Grid>} 
          <Grid item md={6} sm={12} xs={12}>
            <SettingsList
              data={props.dataDetailsRow}
              cardName={"More Settings"}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <SettingsList
              data={props.dataConnectRow}
              cardName={"DHCP Settings"}
            />
          </Grid>        
        </Grid>
    </>
  );
});

export default Status;






