import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";

const StyledListSubItem = withStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(4),
    "&.Mui-selected": {
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover':{
        backgroundColor: theme.palette.primary.main,
      }
    },
    "&.Mui-selected svg": {
      color: theme.palette.common.white
    },
    
  }
}))(ListItem);

export default StyledListSubItem;
