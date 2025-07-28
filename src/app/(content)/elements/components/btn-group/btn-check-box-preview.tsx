import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton, { toggleButtonClasses } from "@mui/material/ToggleButton";
import { alpha, Stack } from "@mui/material";

export const BtnCheckBoxPreview = () => {
  const [selected, setSelected] = React.useState(false);

  return (
    <Stack direction="row" spacing={2}>
      <ToggleButton
        value="check"
        selected={selected}
        sx={{
          borderRadius: "8px",
          border: `1px solid ${alpha("#1C252E", 0.2)}`,
          "&:hover": {
            bgcolor: alpha("#000000", 0.05),
          },
          [`&.${toggleButtonClasses.selected}`]: {
            bgcolor: alpha("#1C252E", 0.1),
            color: "primary",
            border: `1px solid ${alpha("#1C252E", 1)}`,
            "&:hover": {
              bgcolor: alpha("#1C252E", 0.2),
            },
          },
        }}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
      >
        <CheckIcon />
      </ToggleButton>
      <ToggleButton
        value="check"
        selected={selected}
        sx={{
          borderRadius: "8px",
          border: `1px solid ${alpha("#ff0000", 0.2)}`,
          "&:hover": {
            bgcolor: alpha("#000000", 0.05),
          },
          [`&.${toggleButtonClasses.selected}`]: {
            bgcolor: alpha("#ff0000", 0.1),
            color: "#ff0000",
            border: `1px solid ${alpha("#ff0000", 1)}`,
            "&:hover": {
              bgcolor: alpha("#ff0000", 0.2),
            },
          },
        }}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
      >
        <CheckIcon />
      </ToggleButton>
      <ToggleButton
        value="check"
        selected={selected}
        sx={{
          borderRadius: "8px",
          border: `1px solid ${alpha("#892BFF", 0.2)}`,
          "&:hover": {
            bgcolor: alpha("#000000", 0.05),
          },
          [`&.${toggleButtonClasses.selected}`]: {
            bgcolor: alpha("#892BFF", 0.1),
            color: "#892BFF",
            border: `1px solid ${alpha("#892BFF", 1)}`,
            "&:hover": {
              bgcolor: alpha("#892BFF", 0.2),
            },
          },
        }}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
      >
        <CheckIcon />
      </ToggleButton>
      <ToggleButton
        value="check"
        selected={selected}
        sx={{
          borderRadius: "8px",
          border: `1px solid ${alpha("#00B8D9", 0.2)}`,
          "&:hover": {
            bgcolor: alpha("#000000", 0.05),
          },
          [`&.${toggleButtonClasses.selected}`]: {
            bgcolor: alpha("#00B8D9", 0.1),
            color: "#00B8D9",
            border: `1px solid ${alpha("#00B8D9", 1)}`,
            "&:hover": {
              bgcolor: alpha("#00B8D9", 0.2),
            },
          },
        }}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
      >
        <CheckIcon />
      </ToggleButton>
      <ToggleButton
        value="check"
        selected={selected}
        sx={{
          borderRadius: "8px",
          border: `1px solid ${alpha("#FFAB00", 0.2)}`,
          "&:hover": {
            bgcolor: alpha("#000000", 0.05),
          },
          [`&.${toggleButtonClasses.selected}`]: {
            bgcolor: alpha("#FFAB00", 0.1),
            color: "#FFAB00",
            border: `1px solid ${alpha("#FFAB00", 1)}`,
            "&:hover": {
              bgcolor: alpha("#FFAB00", 0.2),
            },
          },
        }}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
      >
        <CheckIcon />
      </ToggleButton>
      <ToggleButton
        value="check"
        selected={selected}
        sx={{
          borderRadius: "8px",
          border: `1px solid ${alpha("#22C55D", 0.2)}`,
          "&:hover": {
            bgcolor: alpha("#000000", 0.05),
          },
          [`&.${toggleButtonClasses.selected}`]: {
            bgcolor: alpha("#22C55D", 0.1),
            color: "#22C55D",
            border: `1px solid ${alpha("#22C55D", 1)}`,
            "&:hover": {
              bgcolor: alpha("#22C55D", 0.2),
            },
          },
        }}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
      >
        <CheckIcon />
      </ToggleButton>
    </Stack>
  );
};
