import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  Divider,
  CardContent
} from "@material-ui/core";

const AccountSessions = props => {
  return (
    <Card>
      <CardHeader subheader="Details about session" title="Sessions" />
      <Divider />
      <CardContent>
        <Typography component="p" variant="body1" color="textSecondary">
          {" "}
          This is a place for details about user session
        </Typography>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default AccountSessions;
