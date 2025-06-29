"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "calc(100vh - 124px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 3
      }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", md: "5rem" },
          fontWeight: "bold",
          color: "text.primary",
          mb: 2
        }}>
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          mb: 4,
          textAlign: "center"
          // maxWidth: "600px",
        }}>
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </Typography>
      <Link href="/" style={{ textDecoration: "none", color: theme.palette.primary.main }}>
        Back to home
      </Link>
    </Box>
  );
}
