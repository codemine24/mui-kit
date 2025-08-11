export const kbdNumberString = `import { Stack, Box, SxProps, Theme } from "@mui/material";

const numberBoxStyles: SxProps<Theme> = {
  fontSize: 24,
  p: "5px 16px",
  aspectRatio: "1 / 1",
  borderRadius: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  transition: "all 0.2s ease",
  cursor: "pointer",
};

const numbers: ReadonlyArray<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const KbdNumberPreview = () => (
  <Stack direction="row" flexWrap="wrap" gap={2}>
    {numbers.map((number) => (
      <Box key={number} component="kbd" sx={numberBoxStyles}>
        {number}
      </Box>
    ))}
  </Stack>
);`;
