import DoneAllIcon from "@mui/icons-material/DoneAll";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { alpha, keyframes } from "@mui/material/styles";

export default function SoftAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {/* Success */}
      <Alert severity="success">This is a success Alert.</Alert>
      {/* Info */}
      <Alert severity="info">This is an info Alert.</Alert>
      {/* Warning */}
      <Alert severity="warning">This is a warning Alert.</Alert>
      {/* Error */}
      <Alert severity="error">This is an error Alert.</Alert>
      {/* Custom Icon */}
      <Alert severity="success" icon={<DoneAllIcon />}>
        This is a custom icon Alert.
      </Alert>
      {/* Without Icon */}
      <Alert severity="info" icon={false}>
        This is a without icon Alert.
      </Alert>
      {/* Rounded */}
      <Alert severity="warning" icon={<HelpOutlineIcon />} sx={{ borderRadius: "50px" }}>
        This is a rounded Alert.
      </Alert>
      {/* Custom color */}
      <Alert
        severity="success"
        sx={{
          backgroundColor: alpha("#e600e6", 0.08),
          color: "#e600e6",
          "& .MuiAlert-icon": {
            color: "#e600e6"
          }
        }}>
        This is a custom color Alert.
      </Alert>
      {/* Center aligned */}
      <Alert
        severity="success"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        This is a center-aligned Alert.
      </Alert>
      {/* Right aligned */}
      <Alert
        severity="info"
        icon={false}
        sx={{
          justifyContent: "flex-end",
          textAlign: "right"
        }}>
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
            animation: `${bounce} 1s infinite ease alternate`
          }
        }}>
        This is a animated Alert.
      </Alert>

      {/* Soft border */}
      <Alert
        severity="success"
        sx={{
          border: "1px solid #0000ff",
          backgroundColor: alpha("#0000ff", 0.08),
          color: "#0000ff",
          "& .MuiAlert-icon": {
            color: "#0000ff"
          }
        }}>
        This is a custom color Alert.
      </Alert>
      {/* Alert with external link */}
      <Alert severity="warning">
        This is an external link
        <Box
          component={"a"}
          href="https://www.codeminetechnologies.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "underline", color: "inherit", ml: 1 }}>
          Click here
        </Box>
      </Alert>
    </Stack>
  );
}

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;
