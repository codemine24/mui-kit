import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

export const ProgressbarDifferentHeightPreview = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Stack width={["100%", "80%"]} spacing={2}>
      <LinearProgress
        variant="determinate"
        value={50}
        sx={{
          height: 5,
          borderRadius: 5,
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: isDarkMode
              ? theme.palette.grey[800]
              : theme.palette.grey[200],
          },
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "secondary.main",
          },
        }}
      />

      <LinearProgress
        variant="determinate"
        value={75}
        sx={{
          height: 10,
          borderRadius: 5,
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: isDarkMode
              ? theme.palette.grey[800]
              : theme.palette.grey[200],
          },
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "secondary.main",
          },
        }}
      />

      <LinearProgress
        variant="determinate"
        value={90}
        sx={{
          height: 15,
          borderRadius: 5,
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: isDarkMode
              ? theme.palette.grey[800]
              : theme.palette.grey[200],
          },
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "secondary.main",
          },
        }}
      />
    </Stack>
  );
};
