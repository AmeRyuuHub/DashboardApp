import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";

const StyledMenu = withStyles(theme => ({
  paper: {
    border: "1px solid #d3d4d5",
    padding: theme.spacing(1)
  }
}))(props => (
  <Menu
    disableAutoFocusItem={true}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

export default StyledMenu;
