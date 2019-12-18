import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';
import { MenuItem, Menu, ListItemText, List, ListItem, ListItemIcon, } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  navItemIcons: {
    minWidth: "32px"
  }
}));

const LangMenu = props => {
  const classes = useStyles();
  const [anchorLang, setAnchorLang] = React.useState(null);
  const { options, lang, setCarrentLang } = props;
  const handleLangClick = event => {
    setAnchorLang(event.currentTarget);
  };

  const handleLangMenuItemClick = index => {
    setCarrentLang(options[index].name);
    setAnchorLang(null);
  };

  const handleLangClose = () => {
    setAnchorLang(null);
  };

  return (
    <>
      {options && (
        <List component="nav" aria-label="Language settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="language-menu"
            aria-label="used language"
            onClick={handleLangClick}
          >
            <ListItemIcon className={classes.navItemIcons}>
              <img src={lang.img} alt={lang.value} />
            </ListItemIcon>
            <ListItemText primary={lang.value} />
            <ExpandMore />
          </ListItem>
        </List>
      )}
      <Menu
        id="language-menu"
        anchorEl={anchorLang}
        open={Boolean(anchorLang)}
        onClose={handleLangClose}
      >
        {options &&
          options.map((option, index) => (
            <MenuItem
              key={option.name}
              selected={option.name === lang.name}
              onClick={() => handleLangMenuItemClick(index)}
              value={index}
            >
              <ListItemIcon className={classes.navItemIcons}>
                <img src={option.img} alt={option.value} />
              </ListItemIcon>
              {option.value}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

export default LangMenu;







  

  




