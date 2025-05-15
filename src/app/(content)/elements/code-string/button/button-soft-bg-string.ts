export const buttonSoftBgString = `import { Box, Button, Stack } from "@mui/material";

export const ButtonSoftBgPreview = () => {
  return (
    <Box p={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e3f2fd",
            color: "#1976d2",
            textTransform: "capitalize",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e3f2fd",
              opacity: 0.9,
            },
          }}
        >
          Primary
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#ede7f6",
            color: "#673ab7",
            textTransform: "capitalize",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#ede7f6",
              opacity: 0.9,
            },
          }}
        >
          Secondary
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e0f7fa",
            color: "#0288d1",
            textTransform: "capitalize",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e0f7fa",
              opacity: 0.9,
            },
          }}
        >
          Info
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e8f5e9",
            color: "#2e7d32",
            textTransform: "capitalize",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e8f5e9",
              opacity: 0.9,
            },
          }}
        >
          Success
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#fff3e0",
            color: "#f57c00",
            textTransform: "capitalize",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#fff3e0",
              opacity: 0.9,
            },
          }}
        >
          Warning
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#ffebee",
            color: "#d32f2f",
            textTransform: "capitalize",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#ffebee",
              opacity: 0.9,
            },
          }}
        >
          Error
        </Button>
      </Stack>
    </Box>
  );
};`