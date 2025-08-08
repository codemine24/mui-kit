export const TachStackProfileCardString = `
'use client';

import React from "react";
import {
  Card,
  Avatar,
  Typography,
//   Box,
  Chip,
  Stack,
} from "@mui/material";


export function TechStackProfileCard() {

  const avatar = "https://randomuser.me/api/portraits/women/70.jpg";
  const name = "Jane Doe";
  const role = "Frontend Developer";
  const bio = \`Frontend developer passionate about UI/UX, crafting beautiful interfaces
        and seamless user experiences. Loves React, design systems, and
        building for the web.\`
  const techStack = ["React", "TypeScript", "Material-UI"];

  return (
    <Card
      sx={{
        maxWidth: 320,
        mx: "auto",
        p: 3,
        borderRadius: 3,
        boxShadow: 4,
        textAlign: "center",
      }}
    >
      <Avatar
        src={avatar}
        alt={name}
        sx={{ width: 96, height: 96, margin: "auto", mb: 2 }}
      />
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {name}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {role}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        {bio}
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
        {techStack.map((tech, idx) => (
          <Chip key={idx} label={tech} size="small" color="primary" />
        ))}
      </Stack>
    </Card>
  );
}

`;