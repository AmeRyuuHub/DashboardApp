
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Menu as MenuIcon} from '@material-ui/icons';
import { IconButton,  Drawer} from '@material-ui/core';

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


   
const AsideBar = (props) => {
    const classes = useStyles(); 
  const [asideView, setAsideView] = React.useState(false);
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAsideView(open);
  };


  return (
    <>
      <IconButton
        button="true"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={asideView} onClose={toggleDrawer(false)} className={classes.drawer}
       variant="temporary"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}>
      
       <RoutsContent  {...props} />
      
      </Drawer>
    </>
  );
};

export default AsideBar;
