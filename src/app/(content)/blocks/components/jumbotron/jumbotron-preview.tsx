"use client";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export const JumbotronPreview = () => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
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
              color: "primary.white",
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: 32, md: 44, lg: 52 },
              lineHeight: 1,
            }}
          >
            We invest in the world&apos;s potential
          </Typography>

          <Typography
            sx={{
              color: "primary.white",
              textAlign: "center",
              fontWeight: 400,
              fontSize: { xs: 16, md: 16 },
              px: { xs: 0, md: "15%" },
              lineHeight: 1.5,
            }}
          >
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Button
              endIcon={<ArrowForward />}
              variant="contained"
              color="primary"
              sx={{
                border: 2,
                borderColor: "#1C4ED8",
                bgcolor: "#1C4ED8",
                color: "#fff",
                borderRadius: 2,
                transition: "all 0.3s",
                "&:hover": {
                  background: "#0e45deff",
                  color: "#fff",
                },
              }}
            >
              Get Started{" "}
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: 2,
                borderColor: "#1C4ED8",
                borderRadius: 2,
                color: "#0e45deff",
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
