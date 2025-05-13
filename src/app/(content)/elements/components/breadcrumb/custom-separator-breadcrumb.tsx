import * as React from "react";
import Stack from "@mui/material/Stack";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export default function CustomSeparatorBreadcrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="#">
      MUI Kit
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="#">
      Core
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Breadcrumb
    </Typography>,
  ];

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}
    >
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<ArrowRightIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<TrendingFlatIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
