import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/system";

export const ChipPillBadgePreview = () => {
  return (
    <Stack sx={{ flexWrap: "wrap", gap: 1 }} direction="row">
      <Box>
        <Chip
          label="Default"
          size="small"
          sx={{
            bgcolor: `${alpha("#367BF5", 0.3)}`,
            color: "#367BF5",
            fontWeight: 500,
          }}
        />
      </Box>
      <Box>
        <Chip
          label="Dark"
          size="small"
          sx={{
            borderRadius: "2rem",
            p: "0.1rem",
            fontWeight: 500,
          }}
        />
      </Box>
      <Box>
        {" "}
        <Chip
          label="Red"
          size="small"
          sx={{
            bgcolor: `${alpha("#A22F2D", 0.3)}`,
            color: "#A22F2D",
            borderRadius: "2rem",
            p: "0.1rem",
            fontWeight: 500,
          }}
        />
      </Box>

      <Box>
        <Chip
          label="green"
          size="small"
          sx={{
            bgcolor: `${alpha("#045f45", 0.3)}`,
            color: "#045f45",
            borderRadius: "2rem",
            p: "0.1rem",
            fontWeight: 500,
          }}
        />
      </Box>
      <Box>
        <Chip
          label="Yellow"
          size="small"
          sx={{
            bgcolor: `${alpha("#fef3c7", 1)}`,
            color: "#93410e",
            borderRadius: "2rem",
            p: "0.1rem",
            fontWeight: 500,
          }}
        />
      </Box>
      <Box>
        <Chip
          label="Indigo"
          size="small"
          sx={{
            bgcolor: `${alpha("#413ba9", 0.3)}`,
            color: "#413ba9",
            borderRadius: "2rem",
            p: "0.1rem",
            fontWeight: 500,
          }}
        />
      </Box>
      <Box>
        <Chip
          label="Purple"
          size="small"
          sx={{
            bgcolor: `${alpha("#5e25b7", 0.3)}`,
            color: "#5e25b7",
            borderRadius: "2rem",
            p: "0.1rem",
            fontWeight: 500,
          }}
        />
      </Box>
    </Stack>
  );
};
