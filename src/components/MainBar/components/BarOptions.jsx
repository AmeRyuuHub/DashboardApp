import React from 'react';
import { withStyles, makeStyles  } from '@material-ui/core/styles';
import {IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Avatar, Icon, Divider, ListSubheader, ListItem, List, Collapse,} from '@material-ui/core';
import {dataUsersRoleIcons} from '../../common/DataIcons/DataIcons';

import { MoreVert, AssignmentInd, MeetingRoom, Inbox, ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

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

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    },
    "& .MuiListItemIcon-root": {
      minWidth: "3rem"
    },
    "&.MuiListItem-root.Mui-disabled": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      opacity: 1
    }
  }
}))(MenuItem);

export default function CustomizedMenus(props) {
  const classes = useStyles();
  const { options, lang, setCarrentLang } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openList, setOpenList] = React.useState(false);

  const handleClickList = () => {
    setOpenList(!openList);
  };

  const handleLangMenuItemClick = index => {
    setCarrentLang(options[index].name);
  };

  return (
    props.auth &&
    props.user && (
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
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <StyledMenuItem onClick={handleClose} disabled>
              <ListItemText primary={props.user && props.user.name} />
              <ListItemIcon style={{ justifyContent: "flex-end" }}>
                <Avatar fontSize="small">
                  <Icon
                    fontSize="small"
                    component={dataUsersRoleIcons[props.user.icon]}
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
                props.getAuthLogout();
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
}