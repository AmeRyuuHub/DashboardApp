import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Icon,
  Divider,
  ListItem,
  List,
  Collapse,
  Button
} from "@material-ui/core";
import { dataUsersRoleIcons } from "../../../common/Icons";

import { MoreVert, AssignmentInd, MeetingRoom } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { StyledMenu, StyledMenuItem } from "../../../common/styled";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const OptionsMenu = ({
  options,
  lang,
  setCarrentLang,
  auth,
  user,
  getAuthLogout
}) => {
  const classes = useStyles();
  const [openList, setOpenList] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickList = () => {
    setOpenList(!openList);
  };

  const handleLangMenuItemClick = index => {
    setCarrentLang(options[index].name);
  };
  if (!auth) {
    return (
      <Button variant="outlined" color="inherit" component={Link} to="/auth">
        Log In
      </Button>
    );
  };
  return (
    user && (
      <>
        <div>
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
            <StyledMenuItem onClick={handleClose} disabled>
              <ListItemText primary={user && user.name} />
              <ListItemIcon style={{ justifyContent: "flex-end" }}>
                <Avatar fontSize="small">
                  <Icon
                    fontSize="small"
                    component={dataUsersRoleIcons[user.icon]}
                  />
                </Avatar>
              </ListItemIcon>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem
              onClick={handleClose}
              component={Link}
              to="/profile"
            >
              <ListItemIcon>
                <AssignmentInd />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledMenuItem>

            <StyledMenuItem onClick={handleClickList}>
              <ListItemIcon>
                <img src={lang.img} alt={lang.value} />
              </ListItemIcon>
              <ListItemText primary="Language" />
            </StyledMenuItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {options &&
                  options.map((option, index) => (
                    <ListItem
                      button
                      className={classes.nested}
                      key={option.name}
                      selected={option.name === lang.name}
                      onClick={() => {
                        handleLangMenuItemClick(index);
                        handleClickList();
                      }}
                      value={index}
                    >
                      <ListItemIcon className={classes.navItemIcons}>
                        <img src={option.img} alt={option.value} />
                      </ListItemIcon>
                      <ListItemText primary={option.value} />
                    </ListItem>
                  ))}
              </List>
            </Collapse>
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
        </div>
      </>
    )
  );
};
export default OptionsMenu;
