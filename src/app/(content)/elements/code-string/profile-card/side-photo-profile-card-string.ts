export const sidePhotoProfileCard = `
'use client';

import React from "react";
import {
  Card,
  Avatar,
  Typography,
  Box,
  Link,
  Button,
  Stack,
  Divider
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function SidePhotoProfileCard() {
  const avatar = "https://randomuser.me/api/portraits/women/70.jpg";
  const name = "Jane Doe";
  const position = "Frontend Developer";
  const email = "jane.doe@example.com";
  const linkedIn = "https://linkedin.com/in/janedoe";

  return (
    <Card
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 3,
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Profile Header */}
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Avatar
          src={avatar}
          alt={name}
          sx={{
            width: 96,
            height: 96,
            border: "3px solid #1976d2",
          }}
        />
        <Box flexGrow={2}>
          <Typography variant="h6" fontWeight="bold">
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {position}
          </Typography>
        </Box>  
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              borderRadius: 20,
              px: 2,
            }}
          >
            Message
          </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Contact Info */}
      <Box>
        <Typography variant="body2" color="text.secondary">
          Email:{" "}
          <Link
            href={\`mailto:\${email}\`}
            underline="hover"
            sx={{ fontWeight: 500 }}
          >
            {email}
          </Link>
        </Typography>
        {linkedIn && (
                    
            <Link
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mt: 2,
                px: 1.5,
                py: 0.75,
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#fff",
                bgcolor: "#0A66C2",
                borderRadius: 20,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                bgcolor: "#004182",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                transform: "translateY(-1px)",
                },
            }}
            >
            <LinkedInIcon sx={{ fontSize: 18 }} />
            LinkedIn Profile
            </Link>
        )}
      </Box>
    </Card>
  );
}
`;