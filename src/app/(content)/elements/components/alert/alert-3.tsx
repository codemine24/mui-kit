import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Box from "@mui/material/Box";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import { keyframes } from "@mui/material/styles";

export default function SolidAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {/* Success */}
      <Alert variant="filled" severity="success">
        This is a success Alert.
      </Alert>
      {/* Info */}
      <Alert variant="filled" severity="info">
        This is an info Alert.
      </Alert>
      {/* Warning */}
      <Alert variant="filled" severity="warning">
        This is a warning Alert.
      </Alert>
      {/* Error */}
      <Alert variant="filled" severity="error">
        This is an error Alert.
      </Alert>
      {/* Custom Icon */}
      <Alert variant="filled" severity="success" icon={<DoneAllIcon />}>
        This is a custom icon Alert.
      </Alert>
      {/* Without Icon */}
      <Alert variant="filled" severity="info" icon={false}>
        This is a without icon Alert.
      </Alert>
      {/* Rounded */}
      <Alert
        variant="filled"
        severity="warning"
        icon={<HelpOutlineIcon />}
        sx={{ borderRadius: "50px" }}>
        This is a rounded Alert.
      </Alert>
      {/* Custom color */}
      <Alert
        variant="filled"
        severity="success"
        sx={{
          backgroundColor: " #e600e6",
          color: "#fff",
          "& .MuiAlert-icon": {
            color: "#fff"
          }
        }}>
        This is a custom color Alert.
      </Alert>
      {/* Center aligned */}
      <Alert
        variant="filled"
        severity="success"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        This is a center-aligned Alert.
      </Alert>
      {/* Right aligned */}
      <Alert
        variant="filled"
        severity="info"
        icon={false}
        sx={{
          justifyContent: "flex-end",
          textAlign: "right"
        }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <span>This is a right-aligned alert</span>
          <EmergencyShareIcon sx={{ color: "#fff" }} />
        </Box>
      </Alert>

      {/* Animated */}
      <Alert
        variant="filled"
        severity="warning"
        sx={{
          "& .MuiAlert-icon": {
            animation: `${bounce} 1s infinite ease alternate`
          }
        }}>
        This is a animated Alert.
      </Alert>
    </Stack>
  );
}

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;
