"use client";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import React from "react";
import { elementsArr } from "@/router/router";

export const ElementView = () => {
  const theme = useTheme();
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections([]);
  }, [setSections]);


  return (
    <Box>
      <CustomBreadCrumbs pathArr={[{ label: "Elements", path: "" }]} />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ xs: "start", md: "center" }}
        spacing={{ xs: 2, md: 0 }}>
        <PageTitle
          title="Elements"
          description="Material UI core components with extended design, and functionality. "
        />

      </Stack>
      <Divider sx={{ my: 4 }} />
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        {elementsArr.map((item) => (
          <Box
            key={item?.path}
            border={`.5px solid ${theme.palette.divider}`}
            component={Link}
            href={item?.path}
            sx={{
              bgcolor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              px: 2,
              py: 1,
              textDecoration: "none",
              fontWeight: 500,
              width: "fit-content",
              transition: "0.3s",
              "&:hover": {
                color: theme.palette.primary.main
              }
            }}>
            {item.label}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
