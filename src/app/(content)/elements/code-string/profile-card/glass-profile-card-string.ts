export const glassProfileCard = `"use client";

import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const GlassCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "blurIntensity",
})<{ blurIntensity: number }>(({ theme, blurIntensity }) => ({
  position: "relative",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 100%)"
      : "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.85) 100%)",
  backdropFilter: \`blur(\${blurIntensity}px) saturate(180%)\`,
  WebkitBackdropFilter: \`blur(\${blurIntensity}px) saturate(180%)\`,
  borderRadius: theme.shape.borderRadius,
  border:
    theme.palette.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.2)"
      : "1px solid rgba(255, 255, 255, 0.4)",
  boxShadow:
    theme.palette.mode === "dark"
      ? "inset 0 0 30px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(31, 38, 135, 0.2)"
      : "inset 0 0 20px rgba(255, 255, 255, 0.6), 0 8px 32px rgba(0, 0, 0, 0.1)",
  color: theme.palette.text.primary,
  maxWidth: 320,
  margin: "auto",
  textAlign: "center",
  paddingTop: theme.spacing(4),
  overflow: "hidden",
}));

export const GlassProfileCard = () => {
  const theme = useTheme();
  const blurIntensity = 10; // default blur intensity
  const socials = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/janedoe",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/janedoe",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://linkedin.com/in/janedoe",
    },
  ];

  return (
    <GlassCard blurIntensity={blurIntensity} elevation={3}>
      <Avatar
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="Jane Doe"
        sx={{
          width: 96,
          height: 96,
          margin: "auto",
          border: \`3px solid \${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.6)"
              : "rgba(255,255,255,0.9)"
          }\`,
          mb: 2,
        }}
      />
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Jane Doe
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.text.secondary}
          sx={{ mb: 3 }}
        >
          Full-stack developer passionate about UI/UX and open source.
        </Typography>

        <Stack direction="row" justifyContent="center" spacing={2}>
          {socials.map(({ icon, url }, idx) => (
            <Link
              href={url}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label={\`Link to social profile \${url}\`}
            >
              <IconButton color="primary">{icon}</IconButton>
            </Link>
          ))}
        </Stack>
      </CardContent>
    </GlassCard>
  );
};
`;
