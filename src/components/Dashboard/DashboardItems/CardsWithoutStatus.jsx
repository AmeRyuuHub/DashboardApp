import React from "react";
import { Grid} from "@material-ui/core";
import PhotoRow from "./PhotoRow";
import SettingsList from "./SettingsList";
import PingChartContainer from "../../../containers/PingContainer";
import DvbcContainer from "../../../containers/DvbcContainer";





const CardsWithoutStatus = React.memo(props => {
  const { boxType } = props;

  switch (boxType) {
    case "HYBRID":
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PhotoRow boxModel={props.boxModel} />
          </Grid>
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
          <Grid item xs={12}>
            <PingChartContainer
              getPingByMac={props.getPingByMac}
              macValue={props.macValue}
              lang={props.lang}
            />
          </Grid>
          <Grid item xs={12}>
            <DvbcContainer
              getDvbcByMac={props.getDvbcByMac}
              macValue={props.macValue}
              lang={props.lang}
            />
          </Grid>
        </Grid>
      );

    case "IP":
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PhotoRow boxModel={props.boxModel} />
          </Grid>

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
          <Grid item xs={12}>
            <PingChartContainer
              getPingByMac={props.getPingByMac}
              macValue={props.macValue}
              lang={props.lang}
            />
          </Grid>
        </Grid>
      );
    case "MOBILE":
      return (
        <Grid container spacing={2}>
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
      );
    default:
      break;
  }
});

export default CardsWithoutStatus;






