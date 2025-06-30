import * as React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import HubIcon from "@mui/icons-material/Hub";
import ApiIcon from "@mui/icons-material/Api";

export const BreadcrumbIconPreview = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MUI Kit
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/material-ui/getting-started/installation/">
          <HubIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Core
        </Link>
        <Typography sx={{ color: "text.primary", display: "flex", alignItems: "center" }}>
          <ApiIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
};
