import React  from "react";
import {
  Grid, Card, CardHeader, Divider, CardContent, Box,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";





const  PingSkeleton = () => {
    return (
        <Card>
        <CardHeader
          avatar={

<Skeleton variant="rect" width={80} height={40} />

              
          }
          action={
              <Box pt={1} pr={1}>
                  <Skeleton variant="circle" width={30} height={30} />
              </Box>

              
          }
          title={<Skeleton variant="text" width={"20%"} height={20} />}
          subheader={
              <Skeleton variant="text" width={"20%"} height={15} />
          }
        />
        <Divider />
        
        <CardContent>
        <Skeleton variant="rect" width={"100%"} height={300}/>
<Box pt={2}>
<Grid container spacing={2}>
            {Array.from(new Array(4)).map((card, index) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                 <Skeleton variant="rect" width={"100%"} height={100}/>
                </Grid>
              ))}
          </Grid>
</Box>
          
        </CardContent>
      </Card>
    );
  };

  export default PingSkeleton;








