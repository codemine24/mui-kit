export const avaterCoverProileCardString = `

'use client';

import {
  Box,
  Typography,
  Stack,
  Chip,
  IconButton,
  Link,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



export function AvatarCoverProfileCard() {
  const theme = useTheme();
  const avatarUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80";
  const name="Jessica Pearson"
  const role="Corporate Lawyer"
  const bio="Focused on strategic litigation and corporate governance."
  const techStack=["Law", "Negotiation", "Leadership"]
  const linkedInUrl="https://linkedin.com/in/jessicapearson"
  const githubUrl="https://github.com/jessicapearson" // optional if applicable
  const width = 340;
  const height= 500;
  return (
  <Box
      sx={{
        position: "relative",
        width,
        height,
        borderRadius: 4,
        overflow: "hidden",
        mx: "auto",
        boxShadow: 6,
        color: "#fff",
        backgroundImage: \`url(\${avatarUrl})\`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Content overlay WITHOUT background color */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: 3,
          // Removed backgroundColor
          // backdropFilter can stay if you want slight blur behind text
          backdropFilter: "blur(6px)",
          borderRadius: 3,
          margin: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.85 }} gutterBottom>
          {role}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, opacity: 0.85 }}>
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
            <Chip
              key={idx}
              label={tech}
              size="small"
              sx={{
                bgcolor: "rgba(255,255,255,0.25)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: 2,
              }}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          {linkedInUrl && (
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <IconButton
                sx={{
                  color: "#0e76a8",
                  bgcolor: "rgba(255,255,255,0.15)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                }}
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </IconButton>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <IconButton
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.15)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                }}
                aria-label="GitHub profile"
              >
                <GitHubIcon />
              </IconButton>
            </Link>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

`;