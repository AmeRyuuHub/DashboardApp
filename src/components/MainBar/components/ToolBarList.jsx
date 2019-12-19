
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';
import RoutsContent from './RoutsContent';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  list: {
    width: drawerWidth,
    marginTop: theme.spacing(1),
    display: "flex"
  },
  

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

const ToolBarList = (props) => {
    const classes = useStyles(); 

  return (
   
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
   
  <RoutsContent  {...props} />
  </Drawer>
  
  );
};

export default ToolBarList;
