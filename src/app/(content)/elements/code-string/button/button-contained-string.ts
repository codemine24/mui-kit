export const buttonContainedString = `import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const ButtonContainedPreview = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <Box>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="error">
            Error
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="warning">
            Warning
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E60076",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#9b0653",
              },
            }}
          >
            Custom
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};`;
