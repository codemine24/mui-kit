import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const squareAvatarSrc = "/images/avatar-2.png";

export default function AvatarSizePreview() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={3}>
      {/* Extra small (xs) */}
      <Avatar src={squareAvatarSrc} alt="John Doe" sx={{ width: 24, height: 24 }} />
      {/*  Small (sm)*/}
      <Avatar src={squareAvatarSrc} alt="John Doe" sx={{ width: 32, height: 32 }} />
      {/*  Medium (md)*/}
      <Avatar src={squareAvatarSrc} alt="John Doe" sx={{ width: 40, height: 40 }} />
      {/*  Large (lg)*/}
      <Avatar src={squareAvatarSrc} alt="John Doe" sx={{ width: 56, height: 56 }} />
      {/*  Extra large (xl) */}
      <Avatar src={squareAvatarSrc} alt="John Doe" sx={{ width: 72, height: 72 }} />
      {/*  Extra extra large size (xxl) */}
      <Avatar src={squareAvatarSrc} alt="John Doe" sx={{ width: 104, height: 104 }} />
    </Stack>
  );
}
