"use client";

import {
  Card,
  Avatar,
  Typography,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const DarkFloatingProfileCardView = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const socials = [
    { icon: <GitHubIcon />, url: "https://github.com/janedoe" },
    { icon: <TwitterIcon />, url: "https://twitter.com/janedoe" },
    { icon: <LinkedInIcon />, url: "https://linkedin.com/in/janedoe" },
  ];

  return (
    <Card
      sx={{
        maxWidth: 320,
        mx: "auto",
        bgcolor: isDark ? theme.palette.background.paper : "#f0f4f8",
        color: isDark ? "common.white" : "text.primary",
        p: 3,
        borderRadius: 3,
        boxShadow: isDark
          ? "0 8px 30px rgba(0, 255, 255, 0.3)"
          : "0 8px 20px rgba(0, 123, 255, 0.2)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Avatar
        src="https://randomuser.me/api/portraits/women/70.jpg"
        alt="Jane Doe"
        sx={{
          width: 96,
          height: 96,
          mx: "auto",
          mb: 2,
          border: `3px solid ${isDark ? "cyan" : "#007bff"}`,
          boxShadow: isDark
            ? "0 0 12px cyan"
            : "0 0 12px rgba(0, 123, 255, 0.6)",
        }}
      />
      <Typography variant="h6" gutterBottom>
        Jane Doe
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, opacity: 0.75 }}>
        Frontend developer passionate about UI/UX, crafting beautiful interfaces
        and seamless user experiences. Loves React, design systems, and building
        for the web.
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2}>
        {socials.map(({ icon, url }, idx) => (
          <IconButton
            key={idx}
            color="inherit"
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              "&:hover": {
                color: isDark ? "cyan" : "#007bff",
                filter: isDark
                  ? "drop-shadow(0 0 4px cyan)"
                  : "drop-shadow(0 0 4px #007bff)",
              },
            }}
          >
            {icon}
          </IconButton>
        ))}
      </Stack>
    </Card>
  );
};
