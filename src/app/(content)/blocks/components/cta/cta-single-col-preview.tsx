import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";

export const CTASingleColPreview = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
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
        <Divider
          sx={{
            borderColor: "common.white",
            width: "130px",
            borderBottomWidth: ".5px",
          }}
        />
        <Typography
          sx={{
            color: "common.white",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          A Call To Action
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
          Start your free 14-day trial today!
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
          maiores error aliquid ipsum soluta sed aspernatur debitis consequuntur
          quibusdam. Aliquid eaque dolor, magnam saepe nihil perferendis beatae
          enim aperiam quod. Quos, rerum!
        </Typography>

        <Button
          variant="text"
          endIcon={<ArrowForward />}
          sx={{
            borderTop: ".5px solid #fff",
            borderRadius: "0",
            color: "common.white",
            "&:hover": {
              color: "primary.main",
              background: "transparent",
            },
          }}
        >
          Get Started{" "}
        </Button>
      </Box>
    </Box>
  );
};
