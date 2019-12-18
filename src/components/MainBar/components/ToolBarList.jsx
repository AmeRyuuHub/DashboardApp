
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Typography, ListItemText, List, ListItem, Drawer,  ListItemIcon, Divider, Box, Icon } from '@material-ui/core';
import {Link} from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  list: {
    width: drawerWidth,
    marginTop: theme.spacing(1),
    display: "flex"
  },
  brandImg: {
    width: "45%"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

 const CustomListItem = withStyles(theme => ({
   root: {
     "&.Mui-selected": {
       fontWeight: "bold",
       backgroundColor: theme.palette.primary.main,
       color: theme.palette.common.white,
     },
     "&.Mui-selected svg": {
      color: theme.palette.common.white,
     }
   }
 }))(ListItem);
   

const ToolBarList = props => {
    const classes = useStyles(); 
  const { routs, logo, title, pathname,routsApp} = props;

  return (
   
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    
    <Box textAlign="center" color="text.secondary" pt={1}>
          <img src={logo} alt="logo" className={classes.brandImg} />
          <Box letterSpacing={4} mt={1} fontWeight={550}>
          <Typography variant="h6" paragraph color="primary">
              {title}
          </Typography>
          </Box>
        </Box>
        <Divider />
        <List>
          {routs && routs.map((rout) => (
            <CustomListItem
              button
              selected={rout.endPoint === pathname}
              key={rout.id}
              component={Link}
              to={rout.endPoint} >
              <ListItemIcon >
                <Icon component={rout.icon}  />
              </ListItemIcon>
              <ListItemText primary={rout.value}  />
            </CustomListItem>
          ))}
        </List>
        <Divider />
        {routsApp && routsApp.map((rout) => (
            <CustomListItem
              button
              selected={rout.endPoint === pathname}
              key={rout.id}
              component={Link}
              to={rout.endPoint} 
              disabled={rout.disabled}>
              <ListItemIcon >
                <Icon component={rout.icon}  />
              </ListItemIcon>
              <ListItemText primary={rout.value}  />
            </CustomListItem>
          ))}
  </Drawer>
  
  );
};

export default ToolBarList;
