import { PlayCircle, Stop } from "@mui/icons-material";
import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

export function PlayButton({
  isPlaying,
  ...other
}: ButtonProps & {
  isPlaying: boolean;
}) {
  return (
    <Button
      color={isPlaying ? "error" : "primary"}
      variant="contained"
      startIcon={isPlaying ? <Stop /> : <PlayCircle />}
      {...other}
    >
      {isPlaying ? "Stop" : "Play"}
    </Button>
  );
}
