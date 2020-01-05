import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody ,TableCell, TableHead, TableRow,  IconButton} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { DialogWithClose } from '../../common/Dialogs';



const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    fontWeight: 550,
  },
  
});


const statusRole ={
  1:"User",
  2:"Tech User",
  3:"Administrator"
}

function Users(props) {
  const classes = useStyles();
  const rows = props.dataUsers;
  const [open, setOpen] = useState(false);
  const [openID, setOpenID] = useState(null);
  const handleClickDelete = (index) => {
    setOpen(true);
    setOpenID(index);
  };
  const handleClickEdit = (index) => {
    setOpen(true);
    setOpenID(index);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenID(null);

  };
  const handleSuccess = () => {
    setOpen(false);
    props.getDelNewUser(rows[openID]._id);
    setOpenID(null);
  };
  
  return (
    <div className={classes.root}>
      <DialogWithClose
        open={open}
        onClose={handleClose}
        id="delete-alert"
       title={"Delete User"}
       actions={true}
       actionsValue={[{name:"No",action:handleClose},{name:"Yes",action:handleSuccess}]}
      >
        
            Are you shure, that you want to delete this user?
          
      </DialogWithClose>

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
          {rows.map((row, index) => (
            <TableRow key={row._id}>
             
              <TableCell component="th" scope="row">
                {row.login}
              </TableCell>
              <TableCell align="right">{row.fullName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{statusRole[row.role]}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => {
                    handleClickEdit(index);
                  }}>
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleClickDelete(index);
                  }}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}



export default Users;

