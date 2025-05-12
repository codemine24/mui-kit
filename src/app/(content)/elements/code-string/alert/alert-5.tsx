export const ActionAlertsCodeString = `
import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Button, Chip, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import SchoolIcon from "@mui/icons-material/School";

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {/* Icon Action */}
      <Alert
        severity="success"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              window.alert("close");
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        This is a icon action Alert.
      </Alert>
      {/* Text Action */}
      <Alert
        severity="info"
        action={
          <Button
            aria-label="undo"
            color="inherit"
            size="small"
            variant="text"
            onClick={() => {
              window.alert("undo");
            }}
          >
            UNDO
          </Button>
        }
      >
        This is a text action Alert.
      </Alert>
      {/* With Chip */}
      <Alert
        severity="error"
        variant="outlined"
        icon={false}
        action={
          <Button
            aria-label="undo"
            color="error"
            size="small"
            variant="text"
            onClick={() => {
              window.alert("undo");
            }}
            sx={{ mt: 0.5 }}
          >
            AGREE
          </Button>
        }
        sx={{ borderRadius: "50px" }}
      >
        <Chip
          color="error"
          label="Caution"
          icon={<FmdBadIcon />}
          sx={{ mr: 1 }}
        />
        This is a caution Alert with chip & action.
      </Alert>

      {/* With Chip */}
      <Alert
        severity="info"
        variant="outlined"
        icon={false}
        action={
          <Chip
            variant="outlined"
            color="info"
            label="Learn more"
            icon={<SchoolIcon />}
            sx={{ mt: 0.5 }}
          />
        }
        sx={{ borderRadius: "50px" }}
      >
        <Button
          aria-label="undo"
          color="info"
          size="small"
          variant="contained"
          onClick={() => {
            window.alert("undo");
          }}
          sx={{ borderRadius: "50px", mr: 1 }}
        >
          AGREE
        </Button>
        This is a info Alert with chip & action.
      </Alert>
    </Stack>
  );
}

`;
