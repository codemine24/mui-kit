"use client";
import { ArrowForward } from "@mui/icons-material";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Box, Button, Typography } from "@mui/material";

export const JumbotronTwoPreview = () => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            zIndex: 40,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: 2,
            py: 4,
            px: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              bgcolor: "#DBE9FE",
              justifyContent: "center",
              alignItems: "center",
              px: 1,
              borderRadius: 1,
              color: "#1C4ED8",
            }}
          >
            <VideocamIcon />
            <Typography
              sx={{
                color: "primary.white",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1,
              }}
            >
              Tutorial
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "primary.white",
              fontWeight: 700,
              fontSize: { xs: 32, md: 44, lg: 52 },
              lineHeight: 1,
            }}
          >
            How to quickly deploy a static website
          </Typography>

          <Typography
            sx={{
              color: "primary.white",
              textAlign: "start",
              fontWeight: 400,
              fontSize: { xs: 16, md: 16 },
              width: { xs: "100%", md: "80%" },
              lineHeight: 1.5,
            }}
          >
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers.
          </Typography>
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
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
