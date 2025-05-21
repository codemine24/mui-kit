export const avatarLetterString = `
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { pink } from "@mui/material/colors";

export default function LetterVariants() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={3}
    >
      {/* Custom Letter */}
      <Avatar alt="John Doe" sx={{ bgcolor: pink[500] }}>
        R
      </Avatar>

      {/* When image is broken */}
      <Avatar
        src="/broken.png"
        alt="John Doe"
        variant="square"
        sx={{ borderRadius: "4px", bgcolor: "green" }}
      />

      {/* Two Letter */}
      <Avatar
        alt="John Doe"
        variant="square"
        sx={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          bgcolor: "blue",
        }}
      >
        JN
      </Avatar>
    </Stack>
  );
}
`;
