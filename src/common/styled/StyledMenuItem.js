
import { withStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";

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

export default StyledMenuItem;
