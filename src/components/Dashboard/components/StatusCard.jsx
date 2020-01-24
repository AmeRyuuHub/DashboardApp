import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, SvgIcon } from "@material-ui/core";
import { dashboardStatus } from "../../../content/icons";
import { useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  
  root: {
    height: "100%"
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
    padding: theme.spacing(2)
  }
}));

const StatusCard = React.memo(({ data }) => {
  const classes = useStyles();
  const theme = useTheme();
  const colors={
    success: theme.palette.success.main,
    danger: theme.palette.error.main,
    main: theme.palette.grey[400]};


  return (
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
  <Typography variant="subtitle2" color="textSecondary">{data.subValue}</Typography>
        </div>

        <SvgIcon className={classes.icon}>
          <path
            fill={colors[data.status] || colors.main }
            d={
              dashboardStatus[data.name] 
            }
          />
        </SvgIcon>
      </div>
    </Paper>
  );
});

export default StatusCard;
