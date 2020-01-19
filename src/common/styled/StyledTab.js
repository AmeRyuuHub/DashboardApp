
import { withStyles } from "@material-ui/core/styles";
import { Tab } from "@material-ui/core";

const StyledTab = withStyles(theme => ({
  root: {

    "&.MuiTab-root":{
        fontWeight:550,
        minWidth:'72px',
        zIndex: 0,
    },
    "&.Mui-selected":{
        color:theme.palette.getContrastText(theme.palette.primary.main)
    }
  }
}))(Tab);

export default StyledTab;