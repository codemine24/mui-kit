export const avatarIconString = `
import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import { pink } from "@mui/material/colors";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export default function IconVariants() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={3}
    >
      {/* Circle */}
      <Avatar alt="John Doe" sx={{ bgcolor: pink[500] }}>
        <FaceIcon />
      </Avatar>

      {/* Square */}
      <Avatar
        alt="John Doe"
        variant="square"
        sx={{ borderRadius: "4px", bgcolor: "green" }}
      >
        <SupervisorAccountIcon fontSize="large" />
      </Avatar>

      {/* Hexagon */}
      <Avatar
        alt="John Doe"
        variant="square"
        sx={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          bgcolor: "blue",
        }}
      >
        <PersonOutlineIcon />
      </Avatar>

      {/* Triangle */}
      <Avatar
        alt="John Doe"
        variant="square"
        sx={{
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          bgcolor: "red",
        }}
      >
        <NoAccountsIcon fontSize="small" />
      </Avatar>

      {/* Oval */}
      <Avatar
        alt="John Doe"
        variant="square"
        sx={{
          clipPath: "ellipse(40% 50% at 50% 50%)",
          bgcolor: "purple",
        }}
      >
        <PersonSearchIcon />
      </Avatar>

      {/* Notched */}
      <Avatar
        alt="John Doe"
        variant="square"
        sx={{
          clipPath:
            "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
          borderRadius: 1,
          bgcolor: "magenta",
        }}
      >
        <ContactPageIcon fontSize="large" />
      </Avatar>
    </Stack>
  );
}
`;
