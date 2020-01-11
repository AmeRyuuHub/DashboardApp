

import React from "react";
import { usersRole } from "../../../content/icons";
import { Link } from "react-router-dom";
import { Button, Icon, Avatar } from "@material-ui/core";

const SubMenu = ({ user }) => {

  return (
    user && (
      <Button
        component={Link}
        to="/profile"
        color="inherit"
        endIcon={
          <Avatar>
            <Icon component={usersRole[user.icon]} />
          </Avatar>
        }
      >
        {user.name}
      </Button>
    )
  );
};

export default SubMenu;









  

  





