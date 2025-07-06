import Check from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export const ButtonSoftWithBorderPreview = () => {
  return (
    <Box p={2}>
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap">
        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e3f2fd",
            color: "#1976d2",
            textTransform: "capitalize",
            border: "2px solid #1976d2",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e3f2fd",
              opacity: 0.9
            }
          }}>
          Primary
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#ede7f6",
            color: "#673ab7",
            textTransform: "capitalize",
            border: "2px solid #673ab7",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#ede7f6",
              opacity: 0.9
            }
          }}>
          Secondary
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e0f7fa",
            color: "#0288d1",
            textTransform: "capitalize",
            border: "2px solid #0288d1",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e0f7fa",
              opacity: 0.9
            }
          }}>
          Info
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e8f5e9",
            color: "#2e7d32",
            textTransform: "capitalize",
            border: "2px solid #2e7d32",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e8f5e9",
              opacity: 0.9
            }
          }}>
          Success
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#fff3e0",
            color: "#f57c00",
            textTransform: "capitalize",
            border: "2px solid #f57c00",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#fff3e0",
              opacity: 0.9
            }
          }}>
          Warning
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#ffebee",
            color: "#d32f2f",
            textTransform: "capitalize",
            border: "2px solid #d32f2f",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#ffebee",
              opacity: 0.9
            }
          }}>
          Error
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Contained */}
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap">
        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e3f2fd",
            color: "#1976d2",
            textTransform: "capitalize",
            border: "2px solid #1976d2",
            fontWeight: 600,
            borderRadius: "10px",
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e3f2fd",
              opacity: 0.9
            }
          }}>
          <Check />
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#ede7f6",
            color: "#673ab7",
            textTransform: "capitalize",
            border: "2px solid #673ab7",
            fontWeight: 600,
            borderRadius: "10px",
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#ede7f6",
              opacity: 0.9
            }
          }}>
          <Check />
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e0f7fa",
            color: "#0288d1",
            textTransform: "capitalize",
            border: "2px solid #0288d1",
            fontWeight: 600,
            borderRadius: "10px",
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e0f7fa",
              opacity: 0.9
            }
          }}>
          <Check />
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#e8f5e9",
            color: "#2e7d32",
            textTransform: "capitalize",
            border: "2px solid #2e7d32",
            fontWeight: 600,
            borderRadius: "10px",
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#e8f5e9",
              opacity: 0.9
            }
          }}>
          <Check />
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#fff3e0",
            color: "#f57c00",
            textTransform: "capitalize",
            border: "2px solid #f57c00",
            fontWeight: 600,
            borderRadius: "10px",
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#fff3e0",
              opacity: 0.9
            }
          }}>
          <Check />
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            backgroundColor: "#ffebee",
            color: "#d32f2f",
            textTransform: "capitalize",
            border: "2px solid #d32f2f",
            fontWeight: 600,
            borderRadius: "10px",
            py: 1,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#ffebee",
              opacity: 0.9
            }
          }}>
          <Check />
        </Button>
      </Stack>
    </Box>
  );
};
