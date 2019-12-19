 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import {Icon, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton,  ListItemIcon, Card, CardContent, CardHeader, Divider, Slide} from '@material-ui/core';
 import {InfoOutlined} from '@material-ui/icons';
 import {dataListIcons} from '../../../common/Icons';



 const useStyles = makeStyles(theme => ({
   root: {
     width: '100%',
  //  padding:theme.spacing(1),
     backgroundColor: theme.palette.background.paper,
    //  paddingTop:'0'
   },
   listPrimaryText:{
     textAlign:'right'
   },
   
   
 }));
 
const DetailsConnectRow= React.memo((props) => {
   const classes = useStyles();
   const {data} = props;

   return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={700}>
    
     <Card >
        <CardHeader
       
       subheader={props.cardName}
      />
      <Divider />
      <CardContent>
      <List
      
         className={classes.root}
       >
         {data &&
           data.map(item => (
             <ListItem dense divider key={item.id}>
               <ListItemIcon>
                 
                   <Icon component={dataListIcons[item.name]} />
                 
               </ListItemIcon>
               <ListItemText secondary={item.text} />
               <ListItemText
                 primary={item.value}
                 className={classes.listPrimaryText}
               />
               <ListItemSecondaryAction>
                 <IconButton edge="end" aria-label="info" size="small">
                   <InfoOutlined />
                 </IconButton>
               </ListItemSecondaryAction>
             </ListItem>
           ))}
       </List>
      </CardContent>
       
     </Card>
     </Slide>
   )
 });
 export default  DetailsConnectRow;