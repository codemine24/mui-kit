import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const ButtonFullWidthPreview = () => {
  return (
    <Box>
      <Stack direction="column" alignItems={"center"} rowGap={2}>
        {/* Outlined */}
        <Button variant="outlined" fullWidth>
          Full Width Button
        </Button>

        {/* Contained */}
        <Button variant="contained" fullWidth>
          Full Width Button
        </Button>

        {/* Gradient */}
        <Button
          fullWidth
          sx={{
            color: "#fff",
            background: "linear-gradient(90deg, #ff416c 0%, #ff4b2b 100%)"
          }}>
          Full Width Gradient Button
        </Button>
      </Stack>
    </Box>
  );
};
