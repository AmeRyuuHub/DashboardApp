import React  from "react";
import { DialogWithClose } from "../../../../common/Dialogs";

const DeleteUser = props => {
  const {user, open, setClose, getDelNewUser} = props;
  

  

  const handleClose = () => {
    setClose();
  };
  const handleSuccess = () => {
   
    getDelNewUser(user._id);
    setClose();
  };

  return (
   
     
      <DialogWithClose
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        id="delete-alert"
        title={"Delete User"}
        actions={true}
        actionsValue={[
          { name: "No", action: handleClose },
          { name: "Yes", action: handleSuccess }
        ]}
      >
       Are you shure want to delete <b>{user.login}</b> ? 
      </DialogWithClose>
   
  );
};

export default DeleteUser;
