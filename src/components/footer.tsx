"use client";
import { Box, Container, Link, Typography, useTheme } from "@mui/material";

export const Footer = () => {
  const theme  = useTheme();
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
      <Container maxWidth="xl">
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
      </Container>
    </Box>
  );
};
