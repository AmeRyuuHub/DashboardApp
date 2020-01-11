
import { withStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";

const StyledMenuUserItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    },
    "& .MuiListItemIcon-root": {
      minWidth: "3rem",
      color: theme.palette.common.white
    },
    "&.MuiListItem-root.Mui-disabled": {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.common.white,
      opacity: 1
    }
  }
}))(MenuItem);

export default StyledMenuUserItem;
