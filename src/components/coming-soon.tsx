import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export const ComingSoon = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 124px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", md: "5rem" },
          fontWeight: "bold",
          color: "text.primary",
          mb: 2,
        }}
      >
        Coming Soon
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          mb: 4,
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        We&apos;re working hard to bring you this page. Stay tuned for something
        awesome!
      </Typography>
      <Link href="/" passHref>
        <Button
          variant="text"
          color="primary"
          size="small"
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            px: 4,
            py: 1.5,
          }}
        >
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};
