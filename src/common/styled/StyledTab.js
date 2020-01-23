
import { withStyles } from "@material-ui/core/styles";
import { Tab } from "@material-ui/core";

const StyledTab = withStyles(theme => ({
  root: {

    "&.MuiTab-root":{
        fontWeight:550,
        minWidth:'72px',
        zIndex: 1,
        color:theme.palette.primary.main
    },
    "&.Mui-selected":{
        color:theme.palette.getContrastText(theme.palette.primary.main)
    },
    "&.Mui-disabled":{
      color:theme.palette.grey[400]
    }
  }
}))(Tab);

export default StyledTab;