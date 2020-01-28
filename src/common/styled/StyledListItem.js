import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";

const StyledListItem = withStyles(theme => ({
  root: {
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    "&.Mui-selected": {
      fontWeight: "bold",
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      '&:hover':{
        // backgroundColor: theme.palette.primary.main,
      }
    },
    "&.Mui-selected svg": {
      color: theme.palette.primary.main,
    }
  }
}))(ListItem);

export default StyledListItem;
