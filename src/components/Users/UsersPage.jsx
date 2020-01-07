import React, { useEffect } from "react";

import { AddUser, UsersList, DeleteUser, MobileUsersList } from "./components";
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Grid,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Accessible } from "@material-ui/icons";
import useMediaQuery from '@material-ui/core/useMediaQuery';


 



const useStyles = makeStyles(theme =>({
  root:{
    paddingTop:theme.spacing(2)
  },
  table: {
    fontWeight: 550,
  },
}));

const UsersPage = React.memo(props => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const {
    dataUsers,
    editUser,
    getUsersListItems,
    getAddNewUser,
    statusDeleteDialog,
    valueDeleteDialog,
    setCloseDeleteDialog,
    setOpenDeleteDialog,
    getDelNewUser,
  } = props;
 

  useEffect(() => {
    if (!dataUsers) {
      getUsersListItems();
    }
  }, [dataUsers, getUsersListItems]);

  return (
    <Container maxWidth="lg" className={classes.root}>
      {valueDeleteDialog && <DeleteUser user={valueDeleteDialog} open = {statusDeleteDialog} setClose ={setCloseDeleteDialog} getDelNewUser={getDelNewUser}/>}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              avatar={<Accessible fontSize="large" color="primary" />}
              action={<AddUser getAddNewUser={getAddNewUser} />}
              title={"Пользователи"}
              titleTypographyProps={{ color: "primary", variant: "h5" }}
            />

            <CardContent>
{(matches)?  <UsersList
                      dataUsers={dataUsers}
                      deleteUser={setOpenDeleteDialog}
                      editUser={editUser}

                    /> : <MobileUsersList  dataUsers={dataUsers}
                    deleteUser={setOpenDeleteDialog}
                    editUser={editUser}/>}

              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
});




export default (UsersPage);










