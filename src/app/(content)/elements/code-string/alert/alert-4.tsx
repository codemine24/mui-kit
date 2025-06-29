export const DescriptionAlertsCodeString = `
import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AlertTitle from "@mui/material/AlertTitle";
import { alpha, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {/* Success */}
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert>

      {/* Info */}
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info Alert with an informative title.
      </Alert>

      {/* Warning */}
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning Alert with a cautious title.
      </Alert>

      {/* Error */}
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error Alert with a scary title.
      </Alert>

      {/* Custom Icon */}
      <Alert severity="success" icon={<DoneAllIcon />}>
        <AlertTitle>Custom Icon</AlertTitle>
        This is a custom icon Alert with an encouraging title.
      </Alert>

      {/* Without Icon */}
      <Alert severity="info" icon={false}>
        <AlertTitle>Without Icon</AlertTitle>
        This is a without icon Alert with an informative title.
      </Alert>

      {/* Rounded */}
      <Alert
        severity="warning"
        icon={<HelpOutlineIcon />}
        sx={{ borderRadius: "50px" }}
      >
        <AlertTitle>Rounded</AlertTitle>
        This is a rounded Alert with an cautious title.
      </Alert>

      {/* Custom color */}
      <Alert
        severity="success"
        sx={{
          backgroundColor: alpha("#e600e6", 0.08),
          color: "#e600e6",
          "& .MuiAlert-icon": {
            color: "#e600e6",
          },
        }}
      >
        <AlertTitle>Custom Color</AlertTitle>
        This is a custom color Alert with an encouraging title.
      </Alert>

      {/* Center aligned */}
      <Alert
        severity="success"
        sx={{ display: "flex", alignItems: "start", justifyContent: "center" }}
      >
        <AlertTitle>Center Aligned</AlertTitle>
        This is a center-aligned Alert with an encouraging title.
      </Alert>

      {/* Right aligned */}
      <Alert
        severity="info"
        icon={false}
        sx={{
          justifyContent: "flex-end",
          textAlign: "right",
        }}
      >
        <AlertTitle>Right Aligned</AlertTitle>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <span>This is a right-aligned alert</span>
          <EmergencyShareIcon sx={{ color: "info.main" }} />
        </Box>
      </Alert>

      {/* Animated */}
      <Alert
        severity="warning"
        sx={{
          "& .MuiAlert-icon": {
            animation: \`\${bounce} 1s infinite ease alternate\`,
          },
        }}
      >
        <AlertTitle>Right Aligned</AlertTitle>
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
