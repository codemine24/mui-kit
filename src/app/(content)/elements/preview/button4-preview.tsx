import { Box, Button, Stack } from "@mui/material";

const softColors = {
  primary: "#e3f2fd",
  secondary: "#ede7f6",
  info: "#e0f7fa",
  success: "#e8f5e9",
  warning: "#fff3e0",
  error: "#ffebee",
};

const textColors = {
  primary: "#1976d2",
  secondary: "#673ab7",
  info: "#0288d1",
  success: "#2e7d32",
  warning: "#f57c00",
  error: "#d32f2f",
};

export const Button4Preview = () => {
  return (
    <Box p={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {Object.entries(softColors).map(([key, bg]) => (
          <Button
            key={key}
            variant="text"
            disableElevation
            sx={{
              backgroundColor: bg,
              color: textColors[key as keyof typeof textColors],
              textTransform: "capitalize",
              fontWeight: 600,
              borderRadius: "10px",
              px: 2.5,
              py: 1,
              minWidth: "auto",
              "&:hover": {
                backgroundColor: bg,
                opacity: 0.9,
              },
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
