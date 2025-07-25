"use client";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import KeyboardOptionKeyIcon from "@mui/icons-material/KeyboardOptionKey";
import TagIcon from "@mui/icons-material/Tag";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const IconKey = styled(Box)(({ theme }) => ({
  fontSize: 20,
  padding: 10,
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

export const Kbd2Preview = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconKey component="kbd">
          <KeyboardCommandKeyIcon />
        </IconKey>
        <IconKey component="kbd">
          <KeyboardOptionKeyIcon />
        </IconKey>
        <IconKey component="kbd">
          <TagIcon />
        </IconKey>
        <IconKey component="kbd">
          <AlternateEmailIcon />
        </IconKey>
        <IconKey component="kbd">
          <KeyboardControlKeyIcon />
        </IconKey>
      </Stack>
    </>
  );
};
