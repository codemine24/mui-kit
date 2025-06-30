export const OutlinedAlertsCodeString = `
import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import Box from "@mui/material/Box";
import { keyframes } from "@mui/material/styles";

export default function OutlinedAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {/* Success */}
      <Alert variant="outlined" severity="success">
        This is a success Alert.
      </Alert>

      {/* Info */}
      <Alert variant="outlined" severity="info">
        This is an info Alert.
      </Alert>

      {/* Warning */}
      <Alert variant="outlined" severity="warning">
        This is a warning Alert.
      </Alert>

      {/* Error */}
      <Alert variant="outlined" severity="error">
        This is an error Alert.
      </Alert>

      {/* Custom Icon */}
      <Alert variant="outlined" severity="success" icon={<DoneAllIcon />}>
        This is a custom icon Alert.
      </Alert>

      {/* Without Icon */}
      <Alert variant="outlined" severity="info" icon={false}>
        This is a without icon Alert.
      </Alert>

      {/* Rounded */}
      <Alert
        variant="outlined"
        severity="warning"
        icon={<HelpOutlineIcon />}
        sx={{ borderRadius: "50px" }}
      >
        This is a rounded Alert.
      </Alert>

      {/* Custom color */}
      <Alert
        variant="outlined"
        severity="success"
        sx={{
          border: "1px solid #e600e6",
          color: "#e600e6",
          "& .MuiAlert-icon": {
            color: "#e600e6",
          },
        }}
      >
        This is a custom color Alert.
      </Alert>

      {/* Center aligned */}
      <Alert
        variant="outlined"
        severity="success"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        This is a center-aligned Alert.
      </Alert>

      {/* Right aligned */}
      <Alert
        variant="outlined"
        severity="info"
        icon={false}
        sx={{
          justifyContent: "flex-end",
          textAlign: "right",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <span>This is a right-aligned alert</span>
          <EmergencyShareIcon sx={{ color: "info.main" }} />
        </Box>
      </Alert>

      {/* Animated */}
      <Alert
        variant="outlined"
        severity="warning"
        sx={{
          "& .MuiAlert-icon": {
            animation: \`\${bounce} 1s infinite ease alternate\`,
          },
        }}
      >
        This is a animated Alert.
      </Alert>
    </Stack>
  );
}

const bounce = keyframes\`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
\`;
`;
