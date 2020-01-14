
import React from 'react';
import {Menu as MenuIcon} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import RoutsContent from './components/RoutsContent';
import { StyledDrawer } from '../../common/styled';



const AsideBar = props => {
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
      <StyledDrawer
        open={asideView}
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        variant="temporary"
      >
        <RoutsContent {...props} />
      </StyledDrawer>
    </>
  );
};

export default AsideBar;
