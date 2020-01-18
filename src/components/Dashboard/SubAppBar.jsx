import React from "react";
import { SearchForm} from "./components";
import {  Box, AppBar, Toolbar, Button, IconButton, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';
import { ArrowBack } from "@material-ui/icons";


const useStyles = makeStyles(theme => ({
//   root: {
//     paddingTop: theme.spacing(2)
//   },

//   menuButton: {
//     marginRight: theme.spacing(2),
//   },

toolbar:{
    boxShadow:'0px 2px 4px -1px rgba(0,0,0,0.2)'
},
  searchForm:{
    maxWidth:'400px'
  },
}));

const SubAppBar = props => {
  const classes = useStyles();
  const {
    getStbStatusByMac,
    searchFormContent,
    checkHex,
  } = props;

  return (
  
   
      <AppBar position="static" color="inherit" className={classes.toolbar}>
        <Toolbar >
            <Container maxWidth="lg" >
         <Box width="100%" display="flex" flexDirection="column" >
           <Box  display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
           <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="back"
          >
            <ArrowBack />
           
          </IconButton>
          <Box>
          <Button aria-label="display DVB-C" size="small" color="inherit"  disabled  >
           DVB-C
          </Button>
          <Button aria-label="display PING" size="small" color="inherit" disabled >
           Ping
          </Button>
          <Button aria-label="display Status" size="small" color="inherit" variant="contained" color="primary" >
           Status
          </Button>
          </Box>
          
           </Box>
           <Box className={classes.searchForm}>
           <SearchForm
              getStbStatusByMac={getStbStatusByMac}
              {...searchFormContent}
              checkHex={checkHex}
            />
           </Box>
         </Box>
         
         </Container>
         
         
        </Toolbar>
      </AppBar>
   

     
   
  );
};


export default SubAppBar;



