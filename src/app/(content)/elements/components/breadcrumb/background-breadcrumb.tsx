import * as React from "react";
import Stack from "@mui/material/Stack";
import { alpha, Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import WebIcon from "@mui/icons-material/Web";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";

const items = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon fontSize="small" />,
    active: false,
  },
  {
    name: "Gallery",
    href: "#",
    icon: <CollectionsIcon fontSize="small" />,
    active: false,
  },
  {
    name: "Web",
    href: "#",
    icon: <WebIcon fontSize="small" />,
    active: false,
  },
  {
    name: "Project",
    href: "#",
    icon: <FolderSpecialIcon fontSize="small" />,
    active: true,
  },
];

export default function BackgroundBreadcrumbs() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{
          backgroundColor: "#f5f5f5",
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return isLast ? (
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Typography>
          ) : (
            <Link
              color="inherit"
              href={item.href}
              sx={{
                fontSize: "0.8rem",
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </Breadcrumbs>

      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{
          backgroundColor: alpha("#0066ff", 0.1),
          color: "#0066ff",
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return isLast ? (
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Typography>
          ) : (
            <Link
              color="inherit"
              href={item.href}
              sx={{
                fontSize: "0.8rem",
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </Breadcrumbs>

      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{
          backgroundColor: "#f5f5f5",
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return isLast ? (
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "0.8rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {item.icon}
              {item.name}
            </Typography>
          ) : (
            <Link
              color="inherit"
              href={item.href}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: "0.8rem",
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </Breadcrumbs>

      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{
          backgroundColor: alpha("#ff00ff", 0.08),
          color: alpha("#ff00ff", 0.7),
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return isLast ? (
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {item.icon}
              {item.name}
            </Typography>
          ) : (
            <Link
              color="inherit"
              href={item.href}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: "0.8rem",
                textDecoration: "none",
                "&:hover": { color: "#ff00ff" },
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </Breadcrumbs>

      <Breadcrumbs
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiBreadcrumbs-separator": { display: "none" },
        }}
        separator={false}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return isLast ? (
            <Box
              component="a"
              href={item.href}
              sx={{
                fontSize: "0.8rem",
                textDecoration: "none",
                fontWeight: "bold",
                backgroundColor: "primary.main",
                color: "white",
                py: 1,
                pr: 2,
                pl: 3.5,
                borderRadius: "0px 4px 4px 0px",
                clipPath:
                  "polygon(100% 0%, 100% 55%, 100% 100%, 0 100%, 16% 50%, 0 0)",
              }}
            >
              {item.name}
            </Box>
          ) : (
            <Box
              component="a"
              href={item.href}
              sx={{
                fontSize: "0.8rem",
                textDecoration: "none",
                fontWeight: "bold",
                backgroundColor: "#f5f5",
                color: "inherit",
                py: 1,
                pr: 2,
                pl: 3.5,
                mr: -1.4,
                borderRadius: "0px 4px 4px 0px",
                clipPath:
                  "polygon(81% 0, 100% 50%, 81% 99%, 0 100%, 16% 50%, 0 0)",
              }}
            >
              {item.name}
            </Box>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
}
