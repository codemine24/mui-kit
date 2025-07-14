export const jumbotronTwoString = `import { ArrowForward } from "@mui/icons-material";
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
             Winter Sale
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "primary.white",
              fontWeight: 700,
              fontSize: { xs: 32, md: 44, lg: 52 },
              lineHeight: 1,
              fontFamily: "cursive",
            }}
          >
            Get 20% off in winter collection!
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
            Grab 20% hot deals on our winter collection. All exclusive product
            with cheap price that you never seen before.
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
            Explore now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};`;
