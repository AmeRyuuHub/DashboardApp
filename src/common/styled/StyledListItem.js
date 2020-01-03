import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";

const StyledListItem = withStyles(theme => ({
  root: {
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
    }
  }
}))(ListItem);

export default StyledListItem;
