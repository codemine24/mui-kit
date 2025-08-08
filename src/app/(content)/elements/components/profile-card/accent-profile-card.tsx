'use client';

import { Card, Avatar, Typography, Box } from "@mui/material";



export function AccentProfileCard() {
    const name = 'Jone Doe'
    const avatar = "https://randomuser.me/api/portraits/women/71.jpg"
    const role= "Full-stack developer passionate about UI/UX and open source."
    const bio = "Loves working with React and building beautiful web applications."
    const accentColor = "primary.main";
  return (
    <Card
      sx={{
        maxWidth: 300,
        mx: "auto",
        borderRadius: 2,
        boxShadow: 3,
        position: "relative",
        pt: 2,
      }}
    >
      <Box
        sx={{
          height: 6,
          bgcolor: accentColor,
          borderRadius: "4px 4px 0 0",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />
      <Avatar
        src={avatar}
        alt={name}
        sx={{
          width: 88,
          height: 88,
          mx: "auto",
          mt: 3,
          border: "3px solid white",
          position: "relative",
          zIndex: 1,
        }}
      />
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </Box>
    </Card>
  );
}
