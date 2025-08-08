'use client';

import { Card, Avatar, Typography,Stack, IconButton } from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function OutlineProfileCard() {
    const socials = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/janedoe"
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/janedoe"
    },
    {
      icon: <LinkedInIcon />,
      url: "https://linkedin.com/in/janedoe"
    }
  ];

  return (
    <Card
      sx={{
        maxWidth: 280,
        mx: "auto",
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
      elevation={0}
    >
      <Avatar
        src={"https://randomuser.me/api/portraits/women/63.jpg"}
        alt={"Jane Doe"}
        sx={{
          width: 88,
          height: 88,
          margin: "auto",
          border: (theme) => `3px solid ${theme.palette.primary.main}`,
          transition: "border-color 0.3s",
          "&:hover": { borderColor: (theme) => theme.palette.secondary.main },
        }}
      />
      <Typography variant="h6" mt={2}>Jane Doe</Typography>
    <Typography variant="body2" color="text.secondary">
      Frontend Developer passionate about UI/UX and building beautiful web experiences.
    </Typography>
    <Stack direction="row" justifyContent="center" spacing={2}>
          {socials.map(({ icon, url }, idx) => (
            <Link
              href={url}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label={`Link to social profile ${url}`}
            >
              <IconButton color="primary">{icon}</IconButton>
            </Link>
          ))}
        </Stack>
    </Card>
  );
}
