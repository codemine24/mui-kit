export const contactClassicString = `import { Facebook, X } from "@mui/icons-material";
import {
  alpha,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export const ContactClassicPreview = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: \`url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")\`,
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          zIndex: 40,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            color: "common.white",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Social Media
        </Typography>
        <Typography
          sx={{
            color: "common.white",
            fontFamily: "serif",
            textAlign: "center",
            fontWeight: 500,
            fontSize: { xs: 32, md: 44, lg: 52 },

            lineHeight: 1,
          }}
        >
          Get Connected
        </Typography>
        <Typography
          sx={{
            color: "#cdcdcd",
            textAlign: "center",
            fontWeight: 400,
            fontSize: { xs: 16, md: 16 },
            px: { xs: 0, md: "15%" },
            lineHeight: 1.5,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
          maiores error aliquid ipsum !
        </Typography>

        <Divider
          sx={{
            borderColor: "common.white",
            width: "130px",
            borderBottomWidth: ".5px",
          }}
        />

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <IconButton
            sx={{
              color: "#fff",
              padding: 1,
              background: alpha("#cdcdcd", 0.3),
              "&:hover": {
                background: alpha("#cdcdcd", 0.4),
              },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              color: "#cdcdcd",
              padding: 1,
              background: alpha("#cdcdcd", 0.3),
              "&:hover": {
                background: alpha("#cdcdcd", 0.4),
              },
            }}
          >
            <X />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};`;
