import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Slide, SvgIcon} from "@material-ui/core";
import { dashboardStatus } from "../../../content/icons";


const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    
  },

  title: {
    fontWeight: 550
  },

  icon: {
    height: 80,
    width: 80
  },
  divIcon: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  
  }
}));

const StatusCard = React.memo(({ data }) => {
  const classes = useStyles();

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={300}>
      <Paper className={classes.root}>
        <div className={classes.divIcon}>
          <div>
            <Typography
               className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="button"
            >
              {data.text}
            </Typography>
            <Typography variant="h6">{data.value}</Typography>
          </div>

          <SvgIcon className={classes.icon}>
            <path
              fill={
                data.status === "success"
                  ? "#28a745"
                  : data.status === "danger"
                  ? "#dc3545"
                  : "#c8c8c8"
              }
              d={
                data.value === "mobile"
                  ? dashboardStatus.mobile
                  : dashboardStatus[data.name]
              }
            />
          </SvgIcon>
        </div>
      </Paper>
    </Slide>
  );
});

export default StatusCard;