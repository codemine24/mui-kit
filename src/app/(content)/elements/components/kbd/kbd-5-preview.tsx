"use client";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const NumberBox = styled(Box)(({ theme }) => ({
  fontSize: "24px",
  padding: "5px 16px",
  aspectRatio: "1 / 1", // Ensures the box remains square
  borderRadius: 8,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  transition: "all 0.2s ease",
}));

export const Kbd5Preview = () => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
        <NumberBox component="kbd" key={number}>
          {number}
        </NumberBox>
      ))}
    </Stack>
  );
};
