import React from "react";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Icon,
  SvgIcon,
  Button
} from "@material-ui/core";
import { usersRole } from "../../content/icons";


import { Link } from "react-router-dom";
import {
  StyledMenu,
  StyledMenuItem,

} from "../../common/styled";


const OptionsMenu = ({
  routsApp,
  user,
  getAuthLogout,
  hideMD,
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
       {!hideMD ? <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <Avatar fontSize="small">
            <Icon fontSize="small" component={usersRole[user.icon]} />
          </Avatar>
        </IconButton> : <Button
          aria-label="profile"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
         
          endIcon={ <Avatar >
          <Icon  component={usersRole[user.icon]} />
        </Avatar>}
        >
          {user.name}
        </Button>} 
        
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
         {/* { !hideMD && <><Typography
            variant="subtitle2"
            color="textSecondary"
            align="center"
            noWrap
            gutterBottom
          >
            {user.name}
          </Typography>
          <Divider variant="middle" />
          </>} */}

          {routsApp &&
            routsApp.map(rout => (
              <StyledMenuItem
                onClick={rout.name === "logout" ? getAuthLogout : handleClose}
                component={Link}
                to={rout.endPoint}
                disabled={rout.disabled}
                key={rout.id}
              >
                <ListItemIcon>
                  {typeof rout.icon !== "string" ? (
                    <SvgIcon component={rout.icon} />
                  ) : (
                    <SvgIcon>
                      <path d={rout.icon} />
                    </SvgIcon>
                  )}
                </ListItemIcon>
                <ListItemText primary={rout.value} />
              </StyledMenuItem>
            ))}

          {/* <StyledMenuItem disabled={true}>
            <ListItemIcon>
              <SettingsApplications />
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
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </StyledMenuItem> */}
        </StyledMenu>
      </>
    )
  );
};
export default OptionsMenu;



{/* <>
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
      <SettingsApplications />
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
      <ExitToApp />
    </ListItemIcon>
    <ListItemText primary="Log Out" />
  </StyledMenuItem>
</StyledMenu>
</> */}