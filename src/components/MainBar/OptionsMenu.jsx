import React from "react";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Icon,
  Divider
} from "@material-ui/core";
import { usersRole } from "../../content/icons";

import { MoreVert, AssignmentInd, MeetingRoom } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  StyledMenu,
  StyledMenuItem,
  StyledMenuUserItem
} from "../../common/styled";
import OptionLangMenu from "./components/OptionLangMenu";

const OptionsMenu = ({
  langList,
  lang,
  setCarrentLang,
  user,
  getAuthLogout
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    user && (
      <>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <MoreVert />
        </IconButton>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuUserItem onClick={handleClose} disabled>
            <ListItemText primary={user && user.name} />
            <ListItemIcon style={{ justifyContent: "flex-end" }}>
              <Avatar fontSize="small">
                <Icon fontSize="small" component={usersRole[user.icon]} />
              </Avatar>
            </ListItemIcon>
          </StyledMenuUserItem>
          <Divider />
          <StyledMenuItem onClick={handleClose} component={Link} to="/profile">
            <ListItemIcon>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </StyledMenuItem>

          <OptionLangMenu
            options={langList}
            lang={lang}
            setCarrentLang={setCarrentLang}
          />
          <StyledMenuItem disabled={true}>
            <ListItemIcon>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              getAuthLogout();
              handleClose();
            }}
          >
            <ListItemIcon>
              <MeetingRoom />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </StyledMenuItem>
        </StyledMenu>
      </>
    )
  );
};
export default OptionsMenu;
