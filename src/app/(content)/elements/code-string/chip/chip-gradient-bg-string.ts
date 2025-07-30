export const chipGradientBgString = `import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const ChipGradientBgPreview = () => {
  return (
    <Stack
      sx={{ flexWrap: "wrap", gap: 1 }}
      direction={{ xs: "column", sm: "row" }}
    >
      <Chip
        label="Lorem ipsum"
        sx={{
          color: "#fff",
          background: "linear-gradient(136deg,#9810FA 0%,#0077e6 100%)",
          borderRadius: 2,
          fontSize: { xs: "0.9rem", sm: "1.2rem" },
          fontWeight: "bold",
          p: { xs: "0.5rem 0.8rem", sm: "1rem" },
        }}
      />
      <Chip
        label="Lorem ipsum"
        sx={{
          color: "#fff",
          background: "linear-gradient(136deg,#6da0d1 0%,#0077e6 100%)",
          borderRadius: 2,
          fontSize: { xs: "0.9rem", sm: "1.2rem" },
          fontWeight: "bold",
          p: { xs: "0.5rem 0.8rem", sm: "1rem" },
        }}
      />
    </Stack>
  );
};
`;
