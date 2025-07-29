import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/system";
import { Box } from "@mui/material";

export const ChipPillBadgePreview = () => {
  return (
    <Stack sx={{ flexWrap: "wrap", gap: 1 }} direction="row">
      <Box>
        <Chip
          label="Default"
          sx={{
            bgcolor: `${alpha("#367BF5", 0.3)}`,
            color: "#367BF5",
            borderRadius: "2rem",
            p: "0.1rem",
            fontWeight: 500,
          }}
        />
      </Box>
      <Box>
        <Chip
          label="Dark"
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
