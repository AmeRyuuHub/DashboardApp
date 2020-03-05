import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRole, withMainDiv } from "../common/HOC";
import {
  Grid,
  Container,
  Divider,
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getUILang } from "../store/selectors/appInit/initSelectors";
import { Link } from "react-router-dom";
import {
  getDashMainHeaderWithLang,
  getDashMainOptionsWithLang
} from "../store/selectors/dashboard/dashboardSelectors";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2)
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  media: {
    maxWidth: "12rem"
    // minHeight: 140,
  },
  card: {
    height: "100%"
  }
}));

const DashboardContainer = props => {
  const classes = useStyles();
  const { headerContent, mainContent } = props;

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography variant="h2" align="center" gutterBottom color="primary">
          {headerContent.title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          color="textSecondary"
        >
          {headerContent.subTitle}
        </Typography>
      </Box>
      <Divider />
      <Grid container className={classes.root} spacing={4}>
        {mainContent &&
          mainContent.map(block => (
            <Grid item xs={12} sm={4} md={4} key={block.id}>
              <Card className={classes.card}>
                <CardActionArea component={Link} to={block.link} className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image={block.imgUrl}
                      title={block.title}
                    />

                    <Typography gutterBottom variant="h5">
                      {block.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {block.access}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {block.about}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    lang: getUILang(state),
    headerContent: getDashMainHeaderWithLang(state),
    mainContent: getDashMainOptionsWithLang(state)
  };
}

export default compose(
  withMainDiv,
  withAuthRole,
  connect(mapStateToProps, null)
)(DashboardContainer);
