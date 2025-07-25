"use client";
import { lightPalette } from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const KeyboardKey = styled(Box)(({ size = "medium" }) => {
  const sizeStyles = {
    xsmall: {
      fontSize: "0.65em",
      padding: "1px 2px",
    },
    small: {
      fontSize: "0.75em",
      padding: "2px 3px",
    },
    medium: {
      fontSize: "0.85em",
      padding: "2px 4px",
    },
    large: {
      fontSize: "0.95em",
      padding: "3px 6px",
    },
    xlarge: {
      fontSize: "1.1em",
      padding: "4px 8px",
    },
  };

  return {
    color: lightPalette.text.primary,
    backgroundColor: lightPalette.background?.paper,
    borderRadius: "3px",
    border: "1px solid #b4b4b4",
    boxShadow: `0 1px 1px rgb(0 0 0 / 0.2), 0 2px 0 0 rgb(255 255 255 / 0.7) inset`,
    display: "inline-block",
    marginRight: "10px",
    fontWeight: 700,
    lineHeight: 1,
    whiteSpace: "nowrap",
    ...sizeStyles[size],
  };
});

export const Kbd1Preview = () => {
  return (
    <div>
      <KeyboardKey component="kbd" size="xsmall">
        ctrl
      </KeyboardKey>
      <KeyboardKey component="kbd" size="small">
        ctrl
      </KeyboardKey>
      <KeyboardKey component="kbd" size="medium">
        ctrl
      </KeyboardKey>
      <KeyboardKey component="kbd" size="large">
        ctrl
      </KeyboardKey>
      <KeyboardKey component="kbd" size="xlarge">
        ctrl
      </KeyboardKey>
    </div>
  );
};
