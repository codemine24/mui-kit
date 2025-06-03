import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";

export const CTAImageBgPreview = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 4 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(256, 256, 256, 0.9)",
            zIndex: 1,
            borderRadius: 2,
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
            py: 4,
            px: 2,
          }}
        >
          <Typography
            sx={{
              color: "common.black",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Call to action
          </Typography>
          <Typography
            sx={{
              color: "common.black",
              textAlign: "center",
              fontWeight: 500,
              fontSize: { xs: 32, md: 44, lg: 52 },

              lineHeight: 1,
            }}
          >
            Main Heading Here
          </Typography>
          <Divider
            sx={{
              borderColor: "#28AFB0",
              width: "130px",
              borderBottomWidth: "2px",
            }}
          />
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontWeight: 400,
              fontSize: { xs: 16, md: 16 },
              px: { xs: 0, md: "15%" },
              lineHeight: 1.5,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
            maiores error aliquid ipsum soluta sed aspernatur debitis
            consequuntur quibusdam. Aliquid eaque dolor, magnam saepe nihil
            perferendis beatae enim aperiam quod. Quos, rerum!
          </Typography>

          <Button
            variant="outlined"
            endIcon={<ArrowForward />}
            sx={{
              border: 2,
              borderColor: "#28AFB0",
              color: "#28AFB0",
              borderRadius: "0",
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            Get Started{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
