'use client'

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



export function FullCoverProfileCard() {
  const theme = useTheme();

 const  coverImageUrl="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80"
 const  avatarUrl="https://randomuser.me/api/portraits/men/75.jpg"
 const  name="Michael Scott"
 const  role="Regional Manager"
 const bio="Dunder Mifflin Paper Company — Leading the Scranton branch with enthusiasm and humor."
  const techStack=["Leadership", "Sales", "Comedy"]
  const  linkedInUrl="https://linkedin.com/in/michaelscott"
  const githubUrl="https://github.com/michaelscott"

  return (
    <Box
      sx={{
        position: "relative",
        width: 360,
        height: 480,
        borderRadius: 4,
        overflow: "hidden",
        mx: "auto",
        boxShadow: 6,
        backgroundImage: `url(${coverImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(0,0,0,0.65)"
              : "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: 3,
          backdropFilter: "blur(8px)",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.3)"
              : "rgba(255, 255, 255, 0.15)",
          borderRadius: 3,
          margin: 2,
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={avatarUrl}
          alt={name}
          sx={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "3px solid white",
            mb: 2,
            objectFit: "cover",
          }}
        />

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
