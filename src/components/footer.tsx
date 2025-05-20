"use client";
import { Box, Container, Fab, Link, Typography, useTheme } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const Footer = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: "background.default",
        color: "text.secondary",
        // mt: "auto",
        borderTop: `.5px solid ${theme.palette.divider}`,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          Built with ♥ by{" "}
          <Link
            href="https://www.linkedin.com/company/codemine24/"
            target="_blank"
            sx={{
              color: "primary.main",
              textDecoration: "none",
              mx: 0.5,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Codemine
          </Link>
        </Typography>

        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          aria-label="scroll to top"
          sx={{
            transition:
              "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
              bgcolor: "grey.100",
            },
            bgcolor: "background.paper",
            color: "primary.main",
            boxShadow: 1,
            "& svg": {
              animation: "bounce 1s infinite",
            },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Container>
    </Box>
  );
};
