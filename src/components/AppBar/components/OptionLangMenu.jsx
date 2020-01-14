import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  Collapse
} from "@material-ui/core";
import { StyledMenuItem } from "../../../common/styled";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const OptionLangMenu = ({ options, lang, setCarrentLang }) => {
  const classes = useStyles();
  const [openList, setOpenList] = React.useState(false);
  const handleClickList = () => {
    setOpenList(!openList);
  };
  const handleLangMenuItemClick = index => {
    setCarrentLang(options[index].name);
  };

  return (
    <>
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
                <ListItemIcon>
                  <img src={option.img} alt={option.value} />
                </ListItemIcon>
                <ListItemText primary={option.value} />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </>
  );
};
export default OptionLangMenu;
