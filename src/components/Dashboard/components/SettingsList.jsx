 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import {Icon, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton,  ListItemIcon, Card, CardContent, CardHeader, Divider} from '@material-ui/core';
 import {InfoOutlined} from '@material-ui/icons';
 import {settingList} from '../../../content/icons';



 const useStyles = makeStyles(theme => ({
   root: {
    //  width: '100%',
  //  padding:theme.spacing(1),
     backgroundColor: theme.palette.background.paper,
    //  paddingTop:'0'
    
   },
   listPrimaryText:{
     textAlign:'right'
   },
   listIcons:{
    minWidth:'40px'
  },
   
 }));
 
const DetailsConnectRow= React.memo((props) => {
   const classes = useStyles();
   const {data} = props;

   return (
    
     <Card >
        <CardHeader
       
       subheader={props.cardName}
      />
      <Divider />
     
      <List
      
         className={classes.root}
       >
         {data &&
           data.map(item => (
             <>
             <ListItem dense  key={item.id}>
               <ListItemIcon className={classes.listIcons}>
                 
                   <Icon component={settingList[item.name]} />
                 
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
             <Divider variant="middle"  />
             </>
           ))}
       </List>
     
       
     </Card>
   )
 });
 export default  DetailsConnectRow;