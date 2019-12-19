
import { withStyles } from "@material-ui/core/styles";
import {LinearProgress} from "@material-ui/core";


 const SearchLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: "#6c757d",
      height: "3px"
    },
    barColorPrimary: {
      backgroundColor: "#b7b7b7"
    }
  })(LinearProgress);

 export default SearchLinearProgress;