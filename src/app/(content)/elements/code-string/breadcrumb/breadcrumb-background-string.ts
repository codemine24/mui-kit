export const breadcrumbBackgroundString = `import * as React from "react";
import Stack from "@mui/material/Stack";
import { alpha, Breadcrumbs, Divider, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import WebIcon from "@mui/icons-material/Web";

export const BreadcrumbBackground = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}
    >
      {/* Default */}
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
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Home
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Galle
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Web
        </Link>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          Project
        </Typography>
      </Breadcrumbs>

      <Divider sx={{ my: 4 }} />

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
        <Link
          color="inherit"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          <HomeIcon fontSize="small" />
          Home
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          <CollectionsIcon fontSize="small" />
          Galle
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          <WebIcon fontSize="small" />
          Web
        </Link>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          Project
        </Typography>
      </Breadcrumbs>

      <Divider sx={{ my: 4 }} />

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
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "#ff00ff" },
          }}
        >
          Home
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "#ff00ff" },
          }}
        >
          Galle
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "#ff00ff" },
          }}
        >
          Web
        </Link>
        <Typography
          sx={{
            color: "#ff00ff",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          Project
        </Typography>
      </Breadcrumbs>

      <Divider sx={{ my: 4 }} />

      {/* With Color */}
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{
          backgroundColor: "#E2F8E3",
          color: "#09590F",
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Home
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Galle
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Web
        </Link>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          Project
        </Typography>
      </Breadcrumbs>

      <Divider sx={{ my: 4 }} />

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
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Home
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Galle
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          Web
        </Link>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          Project
        </Typography>
      </Breadcrumbs>

      <Divider sx={{ my: 4 }} />

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
        <Link
          color="inherit"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "#ff00ff" },
          }}
        >
          <HomeIcon fontSize="small" />
          Home
        </Link>
        <Link
          color="inherit"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "#ff00ff" },
          }}
        >
          <CollectionsIcon fontSize="small" />
          Galle
        </Link>

        <Link
          color="inherit"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.8rem",
            textDecoration: "none",
            "&:hover": { color: "#ff00ff" },
          }}
        >
          <WebIcon fontSize="small" />
          Web
        </Link>

        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          Project
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
}
`