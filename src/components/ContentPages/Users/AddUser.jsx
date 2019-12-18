import React from 'react';
import { IconButton} from '@material-ui/core';
import {PersonAdd} from '@material-ui/icons'
import AddUserForm from './AddUserForm';
import { DialogWithClose } from '../../Common/Dialogs';


export default function AddUser(props) {

  const {getAddNewUser} = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <PersonAdd fontSize="large" />
      </IconButton>
      <DialogWithClose
        fullWidth={true}
        maxWidth={"xs"}
        open={open}
        onClose={handleClose}
        id="user-form-dialog-title"
        title="Add New User"
        divider={true}
      >
        
          <AddUserForm getAddNewUser={getAddNewUser} />
        
      </DialogWithClose>
    </div>
  );
}