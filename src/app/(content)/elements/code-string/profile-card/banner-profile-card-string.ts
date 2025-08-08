export const bannerProfileCard = `
'use client';

import React from "react";
import {
  Card,
  Avatar,
  Typography,
  Box,
  Chip,
  Stack,
  IconButton,
  useTheme,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


export function BannerProfileCard() {
  const theme = useTheme();
  const bannerUrl="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80"
  const avatarUrl="https://randomuser.me/api/portraits/men/75.jpg"
  const name="John Doe"
  const bio="Full-stack developer focused on React and Node.js. Loves building modern web apps."
  const linkedInUrl="https://linkedin.com/in/johndoe"
  const githubUrl="https://github.com/johndoe"
  const  techStack= ["React", "TypeScript", "Node.js", "GraphQL"]
  ;

  return (
    <Card
      sx={{
        maxWidth: 360,
        mx: "auto",
        borderRadius: 3,
        boxShadow: 4,
        overflow: "hidden",
        bgcolor: theme.palette.background.paper,
      }}
    >
      {/* Banner background */}
      <Box
        sx={{
          height: 120,
          backgroundImage: \`url(\${bannerUrl})\`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay to darken banner for contrast */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.4)",
          }}
        />
        {/* Avatar overlapping banner */}
        <Avatar
          src={avatarUrl}
          alt={name}
          sx={{
            width: 96,
            height: 96,
            position: "absolute",
            bottom: -48,
            left: "50%",
            transform: "translateX(-50%)",
            border: \`3px solid \${theme.palette.background.paper}\`,
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content below banner */}
      <Box sx={{ pt: 6, px: 3, pb: 3, textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, minHeight: 48 }}
        >
          {bio}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ mb: 2 }}
        >
          {techStack.map((tech, idx) => (
            <Chip key={idx} label={tech} size="small" color="primary" />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          {linkedInUrl && (
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <IconButton color="primary" aria-label="LinkedIn profile">
                <LinkedInIcon />
              </IconButton>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <IconButton color="primary" aria-label="GitHub profile">
                <GitHubIcon />
              </IconButton>
            </Link>
          )}
        </Stack>
      </Box>
    </Card>
  );
}

`;