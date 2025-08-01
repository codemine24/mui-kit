import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const VerticalProgressBar = ({ progress }: { progress: number }) => (
  <Box
    sx={{
      width: 20,
      height: 200,
      borderRadius: 1,
      backgroundColor: "#e0e0e0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Filled part with label inside */}
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        height: `${progress}%`,
        width: "100%",
        backgroundColor: "#E60076",
        transition: "height 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: "white",
          fontWeight: 600,
          fontSize: "0.75rem",
          rotate: "-90deg",
          transformOrigin: "center",
        }}
      >
        {progress}%
      </Typography>
    </Box>
  </Box>
);

export const ProgressbarVerticalPreview = () => {
  return (
    <Stack width={["100%", "80%"]} direction="row" spacing={4}>
      <VerticalProgressBar progress={0} />
      <VerticalProgressBar progress={25} />
      <VerticalProgressBar progress={50} />
      <VerticalProgressBar progress={75} />
      <VerticalProgressBar progress={100} />
    </Stack>
  );
};
