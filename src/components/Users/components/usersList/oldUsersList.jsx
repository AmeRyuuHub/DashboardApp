import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody ,TableCell, TableHead, TableRow, } from '@material-ui/core';
import { DialogWithClose } from '../../../../common/Dialogs';
import ListUser from './UsersList';



const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    fontWeight: 550,
  },
  
});



function Users(props) {
  const classes = useStyles();
  const {dataUsers, deleteUser, editUser} = props;
  // const [open, setOpen] = useState(false);
  // const [openID, setOpenID] = useState(null);
  // const handleClickDelete = (index) => {
  //   setOpen(true);
  //   setOpenID(index);
  // };
  // const handleClickEdit = (index) => {
  //   setOpen(true);
  //   setOpenID(index);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  //   setOpenID(null);

  // };
  // const handleSuccess = () => {
  //   setOpen(false);
  //   props.getDelNewUser(rows[openID]._id);
  //   setOpenID(null);
  // };
  
  return (
    <div className={classes.root}>
      {/* <DialogWithClose
        open={open}
        onClose={handleClose}
        id="delete-alert"
       title={"Delete User"}
       actions={true}
       actionsValue={[{name:"No",action:handleClose},{name:"Yes",action:handleSuccess}]}
      >
        
            Are you shure, that you want to delete this user?
          
      </DialogWithClose> */}

      <Table  aria-label="table" size="small">
        <TableHead >
          <TableRow>
            <TableCell className={classes.table}>Login</TableCell>
            <TableCell align="right" className={classes.table}>Fullname</TableCell>
            <TableCell align="right" className={classes.table}>Email</TableCell>
            <TableCell align="right" className={classes.table}>Status</TableCell>
            <TableCell align="center" className={classes.table}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ListUser  dataUsers={ dataUsers}  deleteUser={deleteUser} editUser={editUser} />
        </TableBody>
      </Table>
    </div>
  );
}



export default Users;

