import * as React from "react";
import Stack from "@mui/material/Stack";
import { Breadcrumbs, Chip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, emphasize } from "@mui/material/styles";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: emphasize(theme.palette.grey[100], 0.06),
      ...theme.applyStyles("dark", {
        backgroundColor: emphasize(theme.palette.grey[800], 0.06),
      }),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[100], 0.12),
      ...theme.applyStyles("dark", {
        backgroundColor: emphasize(theme.palette.grey[800], 0.12),
      }),
    },
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  };
}) as typeof Chip;

export default function ChipBreadcrumbs() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component="a" href="#" label="Catalog" />
        <StyledBreadcrumb label="Accessories" deleteIcon={<ExpandMoreIcon />} />
      </Breadcrumbs>
    </Stack>
  );
}
