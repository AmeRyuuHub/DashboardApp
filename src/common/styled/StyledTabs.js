import { withStyles } from "@material-ui/core/styles";
import { Tabs } from "@material-ui/core";

const StyledTabs = withStyles(theme => ({
  root: {
// "& .PrivateTabIndicator-root-218":{
//     top:'10px',
//     bottom: '10px',
//     borderRadius:'15px',
//     height:'auto',
//     zIndex:-1,
 
// },
"& * > span":{
  top:'10px',
  bottom: '10px',
  borderRadius:'15px',
  height:'auto',
  // zIndex:-1,
},
    // "&.MuiTab-root":{
    //     fontWeight:550,
    //     minWidth:'72px',
    // },
    // "&.Mui-selected":{
    //     color:theme.palette.getContrastText(theme.palette.primary.main)
    // }
    // "&:focus": {
    //   backgroundColor: theme.palette.primary.main,
    //   "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    //     color: theme.palette.common.white
    //   }
    // },
    // "& .MuiListItemIcon-root": {
    //   minWidth: "3rem",
    //   color: theme.palette.common.white
    // },
    // "&.MuiListItem-root.Mui-disabled": {
    //   backgroundColor: theme.palette.text.secondary,
    //   color: theme.palette.common.white,
    //   opacity: 1
    // }
  }
}))(Tabs);

export default StyledTabs;