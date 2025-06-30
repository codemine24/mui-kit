export const avatarStatusString = `
import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge, { badgeClasses } from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const squareAvatarSrc = "/images/avatar-2.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  [\`& .\${badgeClasses.badge}\`]: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: \`0 0 0 2px \${theme.palette.background.paper}\`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}));

export default function StatusVariants() {
  const activeStatus = true;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={3}
    >
      {/* Dot Animation */}
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>

      {/* Circle Animation */}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundColor: activeStatus ? "#44b700" : "grey",
            width: 46,
            height: 46,
            borderRadius: "50%",
            animation: activeStatus
              ? "ripple 1.9s infinite ease-in-out"
              : "none",
            "@keyframes ripple": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
              },
              "100%": {
                transform: "scale(1.1)",
                opacity: 0,
              },
            },
          }}
        />
        <Avatar
          src={squareAvatarSrc}
          alt="John Doe"
          sx={{
            width: 40,
            height: 40,
            border: "2px solid #fff",
            position: "absolute",
            top: 3,
            left: 3,
          }}
        />
      </Box>

      {/* Square */}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundColor: activeStatus ? "#44b700" : "grey",
            width: 46,
            height: 46,
            borderRadius: "4px",
            animation: activeStatus
              ? "ripple 1.9s infinite ease-in-out"
              : "none",
            "@keyframes ripple": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
              },
              "100%": {
                transform: "scale(1.1)",
                opacity: 0,
              },
            },
          }}
        ></Box>
        <Avatar
          src={squareAvatarSrc}
          alt="John Doe"
          variant="square"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "4px",
            border: "2px solid #fff",
            position: "absolute",
            top: 3.5,
            left: 3,
          }}
        />
      </Box>

      {/* Oval */}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundColor: activeStatus ? "#44b700" : "grey",
            width: 48,
            height: 48,
            clipPath: "ellipse(40% 50% at 50% 50%)",
            animation: activeStatus
              ? "ripple 1.9s infinite ease-in-out"
              : "none",
            "@keyframes ripple": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
              },
              "100%": {
                transform: "scale(1.1)",
                opacity: 0,
              },
            },
          }}
        />
        <Box
          sx={{
            backgroundColor: "#fff",
            width: 44,
            height: 44,
            position: "absolute",
            top: 2,
            left: 2,
            clipPath: "ellipse(40% 50% at 50% 50%)",
          }}
        />
        <Avatar
          src={squareAvatarSrc}
          alt="John Doe"
          variant="square"
          sx={{
            width: 40,
            height: 40,
            position: "absolute",
            top: 4,
            left: 4,
            clipPath: "ellipse(40% 50% at 50% 50%)",
          }}
        />
      </Box>

      {/* Notched */}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundColor: activeStatus ? "#44b700" : "grey",
            width: 48,
            height: 48,
            clipPath:
              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
            borderRadius: 1,
            animation: activeStatus
              ? "ripple 1.9s infinite ease-in-out"
              : "none",
            "@keyframes ripple": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
              },
              "100%": {
                transform: "scale(1.1)",
                opacity: 0,
              },
            },
          }}
        />
        <Box
          sx={{
            backgroundColor: "#fff",
            width: 44,
            height: 44,
            position: "absolute",
            top: 2.6,
            left: 2,
            clipPath:
              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
            borderRadius: 1,
          }}
        />
        <Avatar
          src={squareAvatarSrc}
          alt="John Doe"
          variant="square"
          sx={{
            width: 40,
            height: 40,
            position: "absolute",
            top: 4.3,
            left: 4,
            clipPath:
              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
            borderRadius: 1,
          }}
        />
      </Box>
    </Stack>
  );
}
`;
