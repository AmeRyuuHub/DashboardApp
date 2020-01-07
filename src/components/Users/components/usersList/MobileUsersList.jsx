import React from 'react';
import {List,ListItem,Divider,ListItemText,ListItemAvatar,Avatar,Typography, Icon, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import {dataUsersRoleIcons} from '../../../../common/Icons';
import { MoreVert } from '@material-ui/icons';



const MobileUsersList = (props) => {
    const { dataUsers } = props;
    // const { dataUsers, deleteUser, editUser } = props;

  return (
    <List >
     {dataUsers && dataUsers.map((row, index,array) => (
<>
<ListItem  key ={row._id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={row.login}  >
              <Icon component={dataUsersRoleIcons[row.role]}/>
              </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={row.fullName}
          secondary={
            <>
              {row.role}
              <Typography
                component="div"
                variant="body2"
                
                color="textPrimary"
              >
                {row.email}
              </Typography>
              
            </>
          }
        />
         <ListItemSecondaryAction>
                 <IconButton edge="end" aria-label="info" size="small">
                   <MoreVert />
                 </IconButton>
               </ListItemSecondaryAction>
      </ListItem>
      {(index!== array.length - 1) && <Divider variant="inset" component="li" />} 
     </> 
     )) 
   
        }
    </List>
  );
}

export default MobileUsersList;



