import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

function Media() {
  return (
    <Grid container wrap="nowrap">
      {Array.from(new Array(3)).map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          <Skeleton variant="rect" width={210} height={118} />

          <Box pt={0.5}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

const  Ping = React.memo((props) => {
  const {getStatusPing, mac, macStateValue} = props;
useEffect(() => {
  if (macStateValue!== mac){
    getStatusPing(mac)
  }
 
}, [getStatusPing, mac, macStateValue]);
  return (
    <Box overflow="hidden">
      <Media />
    </Box>
  );
}) 

export default Ping;