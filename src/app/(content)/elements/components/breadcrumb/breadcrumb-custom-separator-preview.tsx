import * as React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export const BreadcrumbCustomSeparatorPreview = () => {
  const breadcrumbItems = [
    { title: "MUI Kit", path: "#" },
    { title: "Core", path: "#" },
    { title: "Breadcrumb", path: null }, 
  ];

  const renderBreadcrumbs = () => {
    return breadcrumbItems.map((item, index) => {
      if (item.path) {
        return (
          <Link key={index} underline="hover" color="inherit" href={item.path}>
            {item.title}
          </Link>
        );
      } else {
        return (
          <Typography key={index} sx={{ color: "text.primary" }}>
            {item.title}
          </Typography>
        );
      }
    });
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {renderBreadcrumbs()}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<ArrowRightIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {renderBreadcrumbs()}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<TrendingFlatIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {renderBreadcrumbs()}
      </Breadcrumbs>
    </Stack>
  );
};
