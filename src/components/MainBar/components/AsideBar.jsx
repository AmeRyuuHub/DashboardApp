
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Menu as MenuIcon} from '@material-ui/icons';
import { Typography, IconButton, ListItemText, List, ListItem, Drawer,  ListItemIcon, Divider, Box, Icon } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
    marginTop: theme.spacing(1)
  },
  brandImg: {
    width: "50%",
  }
}));


   
const AsideBar = props => {
    const classes = useStyles(); 
  const [asideView, setAsideView] = React.useState(false);
  const { routs, logo,title , pathname} = props;
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAsideView(open);
  };

  const asideList = () => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Box textAlign="center" color="text.secondary">
          <img src={logo} alt="Logo" className={classes.brandImg} />
          <Box letterSpacing={4} mt={1}>
          <Typography variant="body1" paragraph>
              {title}
          </Typography>
          </Box>
        </Box>
        <Divider />
        <List>
          {routs && routs.map((rout) => (
            <ListItem
              button
              selected={rout.endPoint === pathname}
              key={rout.id}
              component={Link}
              to={rout.endPoint} >
              <ListItemIcon>
                <Icon component={rout.icon} />
              </ListItemIcon>
              <ListItemText primary={rout.value} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );
  



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
      <Drawer open={asideView} onClose={toggleDrawer(false)}>
        {asideList()}
      </Drawer>
    </>
  );
};

export default AsideBar;
