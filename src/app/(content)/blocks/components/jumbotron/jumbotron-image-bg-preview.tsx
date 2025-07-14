"use client";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export const JumbotronImageBgPreview = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url("https://cdn.pixabay.com/photo/2016/09/09/08/57/starry-sky-1656491_1280.jpg")`,
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
            backgroundColor: "rgba(0, 0, 0, 0.7)",
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
            py: 4,
            px: 2,
          }}
        >
          <Typography
            sx={{
              color: "common.white",
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: 28, md: 44, lg: 52 },
              lineHeight: 1.2,
            }}
          >
            Get exclusive price for all digital products.
          </Typography>

          <Typography
            sx={{
              color: "common.white",
              textAlign: "center",
              fontWeight: 400,
              fontSize: { xs: 16, md: 16 },
              px: { xs: 0, md: "15%" },
              lineHeight: 1.5,
            }}
          >
            This offer valid for a limited time only. Grab your favorite
            products at the lowest price ever.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Button
              endIcon={<ArrowForward />}
              variant="contained"
              color="primary"
              sx={{
                border: 2,
                borderColor: "primary.main",
                bgcolor: "primary.main",
                color: "#fff",
                borderRadius: 2,
                transition: "all 0.3s",
              }}
            >
              Get Started{" "}
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: 2,
                borderColor: "white",
                borderRadius: 2,
                color: "white",
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
