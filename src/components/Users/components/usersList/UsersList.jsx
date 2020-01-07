import React from "react";
import { TableCell, TableRow, IconButton, Table, TableHead, TableBody } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme =>({
  root:{
    paddingTop:theme.spacing(2)
  },
  table: {
    fontWeight: 550,
  },
}));


const UsersList = props => {
  const classes = useStyles();
  const { dataUsers, deleteUser, editUser } = props;

  return (
    dataUsers && 
      <Table aria-label="table" size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.table}>Login</TableCell>
            <TableCell align="right" className={classes.table}>
              Fullname
            </TableCell>
            <TableCell align="right" className={classes.table}>
              Email
            </TableCell>
            <TableCell align="right" className={classes.table}>
              Status
            </TableCell>
            <TableCell align="center" className={classes.table}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {dataUsers.map((row, index) => (
          <TableRow key={row._id}>
            <TableCell component="th" scope="row">
              {row.login}
            </TableCell>
            <TableCell align="right">{row.fullName}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.role}</TableCell>
            <TableCell align="center">
              <IconButton
                onClick={() => {
                  editUser(index);
                }}
              >
                <Edit />
              </IconButton>
              <IconButton
                onClick={() => {
                  deleteUser(row._id);
                }}
              >
                <Delete />
              </IconButton>
            </TableCell>
        </TableRow>))}
        </TableBody>
      </Table>
    )
};

export default UsersList;
