export const ProgressbarFloatingLabelString = `import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const ProgressBar = ({ progress }: { progress: number }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box position="relative" width="100%">
      {/* Floating label */}
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          top: -30,
          left: \`\${progress}%\`,
          transform:
            progress === 0
              ? "translateX(0%)"
              : progress === 100
              ? "translateX(-100%)"
              : "translateX(-50%)",
          fontWeight: 600,
          color: "#1a90ff",
          backgroundColor: "white",
          px: 1,
          py: "1px",
          borderRadius: 1,
          fontSize: "0.75rem",
          zIndex: 2,
          whiteSpace: "nowrap",
          border: "1px solid #1a90ff",
          bgcolor: "#e1e8ee",
        }}
      >
        {progress}%
      </Typography>

      {/* Progress bar background and fill */}
      <Box
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: isDarkMode
            ? theme.palette.grey[800]
            : theme.palette.grey[200],
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: \`\${progress}%\`,
            backgroundColor: "#1a90ff",
            borderRadius: 5,
            transition: "width 0.3s ease",
          }}
        />
      </Box>
    </Box>
  );
};

export const ProgressbarFloatingLabelPreview = () => {
  return (
    <Stack width={["100%", "80%"]} spacing={6} pt={5}>
      <ProgressBar progress={0} />
      <ProgressBar progress={25} />
      <ProgressBar progress={50} />
      <ProgressBar progress={75} />
      <ProgressBar progress={100} />
    </Stack>
  );
};`;
