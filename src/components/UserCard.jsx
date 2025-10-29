import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function UserCard({ user }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">{user.company.name}</Typography>
        <Typography variant="body2">{user.address.city}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
