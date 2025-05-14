import { Box, Button, Divider, Stack } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the Loader2 icon
const SpinningIcon = styled(RefreshIcon)(() => ({
  animation: `${spin} 1s linear infinite`,
  fontSize: "24px",
}));

export const ButtonLoaderPreview = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<SpinningIcon />}
        >
          Loading...
        </Button>

        <Button variant="outlined" color="primary" startIcon={<SpinningIcon />}>
          Loading...
        </Button>

        <Button
          sx={{
            bgcolor: "transparent",
            ":disabled": {
              cursor: "not-allowed",
              pointerEvents: "all !important",
            },
          }}
          startIcon={<SpinningIcon />}
        >
          Loading...
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E60076",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#9b0653",
            },
          }}
          startIcon={<SpinningIcon />}
        >
          Loading...
        </Button>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            borderColor: "#E60076",
            color: "#E60076",
          }}
          startIcon={<SpinningIcon />}
        >
          Loading...
        </Button>

        <Button
          sx={{
            bgcolor: "transparent",
            color: "#E60076",
          }}
          startIcon={<SpinningIcon />}
        >
          Loading...
        </Button>
      </Stack>
    </Box>
  );
};
