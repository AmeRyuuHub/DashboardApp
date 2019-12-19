
import React from "react";
import { Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const StyledDrawer = withStyles(theme => ({
  paper: {
    width: drawerWidth
  },
  root: {
    width: drawerWidth,
    flexShrink: 0
  }
}))(props => <Drawer  {...props} />);

export default StyledDrawer;