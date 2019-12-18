import React from 'react';
import {Button, Card, CardActions,CardContent,CardMedia,CssBaseline, Grid,Typography, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import logo from '../../../pics/logo-main2.svg'
import { Box } from '@material-ui/core';
import { Copyright } from '../../common/Copyright';
import { withAuthRole, withMainDiv } from '../../common/HOC/';
import { withRouter } from 'react-router';
import { compose } from 'redux';
// import backImage from '../../../pics/main_background_black.svg'


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url('/img/tv-cat.jpg')",
     
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: "url('/img/tv-cat.jpg')",
      
    },
    // [theme.breakpoints.up('lg')]: {
    //     backgroundImage: 'url("/main-container_fullhd.jpg")',
    // },
    // backgroundImage: 'url("/main_container2.png")',
    backgroundRepeat: "no-repeat",
    //  backgroundAttachment: 'fixed',
    backgroundPosition: "right  ",
    // backgroundSize: 'cover',
    backgroundColor: theme.palette.background.paper
  },
  mainConteiner: {
    padding: theme.spacing(2),
    minHeight: "50vh"
  },
  img: {
    minWidth: "100px",

    width: "50%"
  },
  title: {
    display: "flex",
    flexDirection: "colomn",
    justifyContent: "space-around"
  },
  icon: {
    marginRight: theme.spacing(2)
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper
    // padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" ,// 16:9
    backgroundSize: 'contain',
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  
  
  
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tools = [{id:'1', name:'React', response:'Front-end', imgUrl:'/img/react.png'},
{id:'2', name:'Redux', response:'Front-end', imgUrl:'/img/redux.svg'},
{id:'3', name:'Node JS', response:'Front-end/Back-end', imgUrl:'/img/node.svg'},
{id:'4', name:'Material UI', response:'UI', imgUrl:'/img/material-ui.svg'}]
function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.root}>
          <Container className={classes.mainConteiner} maxWidth="xl">
            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="center"
              style={{ minHeight: "50vh" }}
            >
              {/* <Grid item xs={12} sm={6} md={6} lg={4} align="center">
                <img src={logo} alt="TVMon logo" className={classes.img} />
              </Grid> */}
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                noWrap
                  align="center"
                >
                  TV Monitoring
                </Typography>
                <Box fontStyle="oblique">
                <Typography
                  variant="h6"
                  color="textSecondary"
                  align="center"
                  paragraph
                  gutterBottom
                >
                  
                    "Только те, кто предпринимают абсурдные попытки, смогут
                    достичь невозможного."
               
                </Typography>
                </Box>
                <Box align="center" mt={3}>
                  <Button variant="contained" color="primary">
                    Get Started
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item> #5e5e5e63
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <div>
          <Container className={classes.cardGrid} maxWidth="md">
         
          <Grid container spacing={4}>
            {tools.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imgUrl}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                    {card.response}
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
export default compose (
  withMainDiv,
  withRouter,withAuthRole
  )(About);