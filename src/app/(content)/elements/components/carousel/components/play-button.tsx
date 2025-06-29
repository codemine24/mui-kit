import Stop from "@mui/icons-material/Stop";
import PlayCircle from "@mui/icons-material/PlayCircle";
import Button, { type ButtonProps } from "@mui/material/Button";

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
      {...other}>
      {isPlaying ? "Stop" : "Play"}
    </Button>
  );
}
