export const buttonSocialIconString = `import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Icon } from "@iconify/react";

export const ButtonSocialIconPreview = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
        alignItems="center"
      >
        {/* Facebook */}
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "#385caa",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "#4372d6",
            padding: 1,
            "&:hover": {
              backgroundColor: "#1F56CC",
            },
          }}
        >
          <FacebookIcon />
        </IconButton>

        {/* Youtube */}
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "#cf2849",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "#cf2849",
            padding: 1,
            "&:hover": {
              backgroundColor: "#FF0033",
            },
          }}
        >
          <YouTubeIcon />
        </IconButton>

        {/* Twitter */}
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "#000",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "#000",
            padding: 1,
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          <TwitterIcon />
        </IconButton>

        {/* X */}
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "#000",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "#000",
            padding: 1,
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          <XIcon />
        </IconButton>

        {/* Instagram (Camera icon as substitute) */}
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "#FF4740",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "#FF4740",
            padding: 1,
            "&:hover": {
              backgroundColor: "#de0b04",
            },
          }}
        >
          <Icon icon="mdi:instagram" />
        </IconButton>

        {/* Linkedin */}
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "#2c8fc4",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "#2c8fc4",
            padding: 1,
            "&:hover": {
              backgroundColor: "#005580",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        {/* Pinterest (PushPin as a symbolic substitute) */}
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "#d72e47",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "#de0b04",
            padding: 1,
            "&:hover": {
              backgroundColor: "#FF0033",
            },
          }}
        >
          <Icon icon="mdi:pinterest" />
        </IconButton>
      </Stack>
    </Box>
  );
};`;
