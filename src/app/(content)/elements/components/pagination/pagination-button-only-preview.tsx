"use client";

import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const totalCount = 100;
const rowsPerPage = 10;
const totalPages = Math.ceil(totalCount / rowsPerPage);

export const PaginationButtonOnlyPreview = () => {
  const [page, setPage] = React.useState(1);

  // Calculate range: e.g., "1–10", "11–20"
  const start = (page - 1) * rowsPerPage + 1;
  const end = Math.min(page * rowsPerPage, totalCount);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Typography variant="body2">
          {start}–{end} of {totalCount}
        </Typography>

        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          renderItem={(item) => {
            if (item.type !== "previous" && item.type !== "next") return null;

            return (
              <PaginationItem
                {...item}
                slots={{
                  previous: () => (
                    <Box
                      component={"span"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <ArrowBackIcon fontSize="small" />
                      Prev
                    </Box>
                  ),
                  next: () => (
                    <Box
                      component={"span"}
                      sx={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      Next
                      <ArrowForwardIcon fontSize="small" />
                    </Box>
                  ),
                }}
                sx={{
                  borderRadius: 0,
                  bgcolor: "#E60076",
                  color: "white",
                  margin: 0,
                  "&:hover": {
                    bgcolor: "primary.main",
                  },
                }}
              />
            );
          }}
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          siblingCount={0}
          boundaryCount={0}
          renderItem={(item) => {
            const isPrev = item.type === "previous";
            const isNext = item.type === "next";
            const isCurrent = item.page === page && item.type === "page";

            if (!isPrev && !isNext && !isCurrent) return null;

            return (
              <PaginationItem
                {...item}
                slots={{
                  previous: () => (
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <ChevronLeft fontSize="small" />
                    </span>
                  ),
                  next: () => (
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <ChevronRight fontSize="small" />
                    </span>
                  ),
                }}
                sx={{
                  borderRadius: 0,
                  backgroundColor: isCurrent
                    ? "transparent"
                    : "rgba(230, 0, 118, 0.1)",
                  border: isCurrent ? "none" : "1px solid #E60076",
                  color: "#E60076",
                  margin: 1,
                  fontSize: isCurrent ? "20px" : undefined,
                  "&.Mui-selected": {
                    backgroundColor: "transparent",
                    color: "#E60076",
                    fontWeight: "bold",
                    fontSize: "20px",
                    border: "none",
                  },
                }}
              />
            );
          }}
        />
      </Box>
    </Box>
  );
};
