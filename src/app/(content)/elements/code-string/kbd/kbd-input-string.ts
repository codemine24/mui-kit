export const kbdInputString = `import { KeyboardCommandKey, Search } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Paper } from "@mui/material";
export const KbdInputPreview = () => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <Search />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        size="small"
      >
        <Box
          sx={{ display: "flex", alignItems: "center", fontSize: 14, gap: 0.5 }}
        >
          <KeyboardCommandKey sx={{ fontSize: "inherit" }} />+ /
        </Box>
      </IconButton>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
};
`;
