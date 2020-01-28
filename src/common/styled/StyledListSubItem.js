import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";

const StyledListSubItem = withStyles(theme => ({
  root: {
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    paddingLeft: theme.spacing(4),
    "&.Mui-selected": {
      fontWeight: "bold",
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      '&:hover':{
        // backgroundColor: theme.palette.primary.main,
      }
    },
    "&.Mui-selected svg": {
      color: theme.palette.primary.main
    },
    
  }
}))(ListItem);

export default StyledListSubItem;
