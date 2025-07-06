export const breadcrumbBasicString = `import * as React from "react";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";

interface BreadcrumbOptions {
  color?: string;
  linkSx?: SxProps<Theme>;
  typographyFontWeight?: string | number;
  typographySx?: SxProps<Theme>;
}

export const BreadcrumbBasicPreview = () => {
  const breadcrumbItems = [
    { title: "MUI Kit", href: "#" },
    { title: "Core", href: "#" },
    { title: "Breadcrumbs" },
  ];

  const renderBreadcrumbs = (options: BreadcrumbOptions = {}) => {
    return breadcrumbItems.map((item, index) => {
      if (item.href) {
        return (
          <Link
            key={index}
            underline="hover"
            color={options.color || "inherit"}
            href={item.href}
            sx={options.linkSx}
          >
            {item.title}
          </Link>
        );
      } else {
        return (
          <Typography
            key={index}
            sx={{
              color: "text.primary",
              fontWeight: options.typographyFontWeight,
              ...options.typographySx,
            }}
          >
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
      spacing={2}
    >
      {/* Basic Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb">{renderBreadcrumbs()}</Breadcrumbs>

      <Divider sx={{ my: 4 }} />

      {/* Breadcrumbs with custom separator and styling */}
      <Breadcrumbs separator="›" color="primary" aria-label="breadcrumb">
        {renderBreadcrumbs({
          typographyFontWeight: "medium",
          linkSx: { color: "primary.main" },
        })}
      </Breadcrumbs>
    </Stack>
  );
};`;
