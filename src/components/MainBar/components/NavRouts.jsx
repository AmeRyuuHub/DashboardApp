import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  navItems: {
    display: "flex",
    alignItems: "center",
    
  },
  link: {
   
    fontWeight: theme.typography.fontWeightMedium,
  fontSize:'inherit',
  minWidth:'80px',
    fontFamily: 'inherit',
    "&:hover": {
      color: "inherit",
     
    }
  }
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    
    '& > div': {
      width: '100%',
      backgroundColor: 'white',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }}  />);


const NavRouts =(props) =>{
  const classes = useStyles();
 const {routs, pathname} = props;


 let menuValue = routs && routs.findIndex(rout => rout.endPoint === pathname);
  return (

    <StyledTabs className={classes.navItems} value={menuValue} >
      {routs &&
        routs.map(rout => (
          <Tab
            key={rout.id}
           
            component={Link}
            to={rout.endPoint}
            className={classes.link}
            label = {rout.value}
          />
           
         
        ))}
   
    
  </StyledTabs>

    // <MenuList >
    //   {routs &&
    //     routs.map(rout => (
    //       <MenuItem
    //         key={rout.id}
    //         selected={rout.endPoint===pathname}
    //         component={Link}
    //         to={rout.endPoint}
    //         className={classes.link}
    //       >
    //         {rout.value}
    //       </MenuItem>
    //     ))}
    // </MenuList>
  );
}
export default NavRouts;