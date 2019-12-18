
import { withStyles } from "@material-ui/core/styles";
import {LinearProgress} from "@material-ui/core";


export const SearchLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: "#6c757d",
      height: "3px"
    },
    barColorPrimary: {
      backgroundColor: "#b7b7b7"
    }
  })(LinearProgress);

  export const MainLinearProgress = withStyles(theme =>({
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      position: "absolute",
      width: "100%",
      zIndex: "10001",
      top: "0",
      left:"0",
      height: "4px"
    },
    barColorPrimary: {
      backgroundColor: "white"
    }
  }))(LinearProgress);