"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const IconKey = styled(Box)(({ theme }) => ({
  fontSize: 40,
  padding: 5,
  borderRadius: 8,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  transition: "all 0.2s ease",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
}));
type IconStyles = {
  fontSize: number;
};

const iconStyles: IconStyles = {
  fontSize: 30,
};

export const Kbd3Preview = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconKey component="kbd">
          <ArrowDropUpIcon sx={iconStyles} />
        </IconKey>
        <IconKey component="kbd">
          <ArrowRightIcon sx={iconStyles} />
        </IconKey>
        <IconKey component="kbd">
          <ArrowDropDownIcon sx={iconStyles} />
        </IconKey>
        <IconKey component="kbd">
          <ArrowLeftIcon sx={iconStyles} />
        </IconKey>
      </Stack>
    </>
  );
};
