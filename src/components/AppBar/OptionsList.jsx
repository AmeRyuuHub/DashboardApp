import React from "react";
import { IconButton, Avatar, Icon, Button } from "@material-ui/core";
import { usersRole } from "../../content/icons";

import { ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";

const OptionsList = ({ user, getAuthLogout }) => {
  return (
    user && (
      <>
        <Button
          component={Link}
          to="/profile"
          color="inherit"
          endIcon={
            <Avatar fontSize="small">
              <Icon fontSize="small" component={usersRole[user.icon]} />
            </Avatar>
          }
        >
          {user && user.name}
        </Button>
        <IconButton
          aria-label="log out"
          aria-controls="long out"
          aria-haspopup="true"
          onClick={getAuthLogout}
          color="inherit"
        >
          <ExitToApp fontSize="large" />
        </IconButton>
      </>
    )
  );
};
export default OptionsList;
