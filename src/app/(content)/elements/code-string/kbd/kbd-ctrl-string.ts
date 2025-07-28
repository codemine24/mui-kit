export const kbdCtrlString = `"use client";

import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

type KeyboardKeySize = "xsmall" | "small" | "medium" | "large" | "xlarge";

interface KeyboardKeyProps extends BoxProps {
  size?: KeyboardKeySize;
}

const KeyboardKey = styled(Box)<KeyboardKeyProps>(
  ({ theme, size = "small" }) => {
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
      borderRadius: "3px",
      border: \`1px solid \${theme.palette.divider}\`,
      marginRight: "10px",
      fontWeight: 700,
      ...sizeStyles[size],
    };
  }
);

export const KbdCtrlPreview = () => {
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
};`