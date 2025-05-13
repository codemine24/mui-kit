import * as React from "react";
import Stack from "@mui/material/Stack";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function BasicBreadcrumbs() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}
    >
      {/* Success */}
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            MUI Kit
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Core
          </Link>
          <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
    </Stack>
  );
}
