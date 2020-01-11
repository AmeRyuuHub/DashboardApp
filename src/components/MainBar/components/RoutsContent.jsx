import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  ListItemText,
  List,
  ListItemIcon,
  Divider,
  Box,
  Icon,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { StyledListItem } from "../../../common/styled";
import { Copyright } from "../../../common/Copyright";

const useStyles = makeStyles(theme => ({
  brandImg: {
    width: "50%"
  },
  root:{
    height:'100%',
  },

}));

const RoutsContent = ({ routs, logo, title, pathname }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="stretch"
     className={classes.root}
   
    >
      <Grid item xs container  direction="column"   alignItems="stretch">
        <Grid item >
      
        
        <Box textAlign="center" color="text.secondary" p={4}>
          <img src={logo} alt="logo" className={classes.brandImg} />
          <Box letterSpacing={4} mt={1} fontWeight={550}>
            <Typography variant="h6" paragraph color="primary">
              {title}
            </Typography>
           
          </Box>
        </Box>
      </Grid>
      <Grid item >
        <Divider />
        <List>
          {routs &&
            routs.map(rout => (
              <StyledListItem
                button
                selected={rout.endPoint === pathname}
                key={rout.id}
                component={Link}
                to={rout.endPoint}
              >
                <ListItemIcon>
                  <Icon component={rout.icon} />
                </ListItemIcon>
                <ListItemText primary={rout.value} />
              </StyledListItem>
            ))}
        </List>
        <Divider />
      </Grid>
      </Grid>
      <Grid item>

      <Box  p={2}>
         
        <Copyright/>
        </Box>
        {/* <Divider />
        <List>
          {routsApp &&
            routsApp.map(rout => (
              <StyledListItem
                button
                selected={rout.endPoint === pathname}
                key={rout.id}
                component={Link}
                to={rout.endPoint}
                disabled={rout.disabled}
              >
                <ListItemIcon>
                  <Icon component={rout.icon} />
                </ListItemIcon>
                <ListItemText primary={rout.value} />
              </StyledListItem>
            ))}
        </List> */}
      </Grid>
    </Grid>
  );
};

export default RoutsContent;
