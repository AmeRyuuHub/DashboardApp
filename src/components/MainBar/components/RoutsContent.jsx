
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ListItemText, List,  ListItemIcon, Divider, Box, Icon } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {StyledListItem} from '../../common/styled';


const useStyles = makeStyles(theme => ({
  brandImg: {
    width: "45%"
  },
}));

const RoutsContent =({ routs, logo,title , pathname,routsApp}) =>{
    const classes = useStyles(); 
    return ( <>
<Box textAlign="center" color="text.secondary" pt={1}>
          <img src={logo} alt="logo" className={classes.brandImg} />
          <Box letterSpacing={4} mt={1} fontWeight={550}>
          <Typography variant="h6" paragraph color="primary">
              {title}
          </Typography>
          </Box>
        </Box>
        <Divider />
        <List>
          {routs && routs.map((rout) => (
            <StyledListItem
              button
              selected={rout.endPoint === pathname}
              key={rout.id}
              component={Link}
              to={rout.endPoint} >
              <ListItemIcon >
                <Icon component={rout.icon}  />
              </ListItemIcon>
              <ListItemText primary={rout.value}  />
            </StyledListItem>
          ))}
        
        <Divider />
        {routsApp && routsApp.map((rout) => (
            <StyledListItem
              button
              selected={rout.endPoint === pathname}
              key={rout.id}
              component={Link}
              to={rout.endPoint} 
              disabled={rout.disabled}>
              <ListItemIcon >
                <Icon component={rout.icon}  />
              </ListItemIcon>
              <ListItemText primary={rout.value}  />
            </StyledListItem>
          ))}
          </List>
          </>
    )
}

export default RoutsContent;