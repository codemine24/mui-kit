"use client";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { Box, Divider, Stack, TextField, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import { blockArr } from "./constants/data";

export const BlockView = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState(blockArr);

  React.useEffect(() => {
    if (searchText) {
      const filtered = blockArr.filter((item) =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(blockArr);
    }
  }, [searchText]);

  return (
    <Box>
      <CustomBreadCrumbs pathArr={[{ label: "Blocks", path: "" }]} />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ xs: "start", md: "center" }}
        spacing={{ xs: 2, md: 0 }}
      >
        <PageTitle
          title="Blocks"
          description="Custom Utility components using Material UI core components with extended design, and functionality. "
        />
        <TextField
          placeholder="Search..."
          id="outlined-size-small"
          size="small"
          sx={{ width: { xs: "100%", md: "25%" } }}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Stack>
      <Divider sx={{ my: 4 }} />
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        {filteredData.map((item) => (
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
                color: theme.palette.primary.main,
              },
            }}
          >
            {item.label}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
