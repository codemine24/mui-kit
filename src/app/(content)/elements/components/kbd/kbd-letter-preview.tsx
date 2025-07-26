"use client";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const LetterBox = styled(Box)<{ component: string }>(({ theme }) => ({
  fontSize: "24px",
  padding: "5px 16px",
  aspectRatio: "1 / 1",
  borderRadius: 8,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  transition: "all 0.2s ease",
  boxSizing: "border-box",
}));

export const KbdLetterPreview = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {letters.map((letter) => (
        <LetterBox component="kbd" key={letter}>
          {letter}
        </LetterBox>
      ))}
    </Stack>
  );
};
