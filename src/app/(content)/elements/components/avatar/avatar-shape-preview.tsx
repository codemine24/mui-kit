import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const squareAvatarSrc = "/images/avatar-2.png";

export default function AvatarShapePreview() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={3}>
      {/* Circle */}
      <Avatar src={squareAvatarSrc} alt="John Doe" />

      {/* Square */}
      <Avatar src={squareAvatarSrc} alt="John Doe" variant="square" sx={{ borderRadius: "4px" }} />

      {/* Hexagon */}
      <Avatar
        src={squareAvatarSrc}
        alt="John Doe"
        variant="square"
        sx={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
        }}
      />

      {/* Triangle */}
      <Avatar
        src={squareAvatarSrc}
        alt="John Doe"
        variant="square"
        sx={{
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
        }}
      />

      {/* Oval */}
      <Avatar
        src={squareAvatarSrc}
        alt="John Doe"
        variant="square"
        sx={{
          clipPath: "ellipse(40% 50% at 50% 50%)"
        }}
      />

      {/* Notched */}
      <Avatar
        src={squareAvatarSrc}
        alt="John Doe"
        variant="square"
        sx={{
          clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
          borderRadius: 1
        }}
      />
    </Stack>
  );
}
