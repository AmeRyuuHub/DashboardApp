

import React from 'react';
import {dataUsersRoleIcons} from '../../common/Icons';
import {Link} from 'react-router-dom';
import { MenuItem, Menu, Button, Icon, Avatar} from '@material-ui/core';



const SubMenu = props => {

 

  return (
    
(props.auth && props.user) ? 

<Button  component={Link} to="/profile"
        color="inherit" endIcon={ <Avatar> <Icon component={dataUsersRoleIcons[props.user.icon]} /> </Avatar>}> {props.user && props.user.name}</Button>
     
  : 
  
  
  <Button variant="outlined" color="inherit" component={Link} to="/auth"> Log In</Button>
      
  );
};

export default SubMenu;









  

  





