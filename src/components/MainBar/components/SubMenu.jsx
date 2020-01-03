

import React from "react";
import { dataUsersRoleIcons } from "../../../common/Icons";
import { Link } from "react-router-dom";
import { Button, Icon, Avatar } from "@material-ui/core";

const SubMenu = ({ auth, user }) => {
  if (!auth) {
    return (
      <Button variant="outlined" color="inherit" component={Link} to="/auth">
        Log In
      </Button>
    );
  }
  return (
    user && (
      <Button
        component={Link}
        to="/profile"
        color="inherit"
        endIcon={
          <Avatar>
            <Icon component={dataUsersRoleIcons[user.icon]} />
          </Avatar>
        }
      >
        {user.name}
      </Button>
    )
  );
};

export default SubMenu;









  

  





