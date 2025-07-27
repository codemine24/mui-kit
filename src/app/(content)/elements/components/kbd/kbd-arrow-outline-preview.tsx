"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const IconKey = styled(Box)<{ component: string }>(({ theme }) => ({
  fontSize: 40,
  padding: 5,
  borderRadius: 8,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.2s ease",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
}));
type IconStyles = {
  fontSize: number;
};

const iconStyles: IconStyles = {
  fontSize: 30,
};

export const KbdArrowOutlinePreview = () => {
  return (
    <Stack direction="row" spacing={2}>
      <IconKey component="kbd">
        <KeyboardArrowUpIcon sx={iconStyles} />
      </IconKey>
      <IconKey component="kbd">
        <KeyboardArrowRightIcon sx={iconStyles} />
      </IconKey>
      <IconKey component="kbd">
        <KeyboardArrowDownIcon sx={iconStyles} />
      </IconKey>
      <IconKey component="kbd">
        <KeyboardArrowLeftIcon sx={iconStyles} />
      </IconKey>
    </Stack>
  );
};
