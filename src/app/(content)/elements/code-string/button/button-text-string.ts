export const buttonTextString = `import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const ButtonTextPreview = () => {
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
          <Button variant="text" color="primary">
            Primary
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="error">
            Error
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="warning">
            Warning
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="info">
            Info
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="success">
            Success
          </Button>
        </Box>

        <Box>
          <Button
            variant="text"
            sx={{
              color: "#E60076",
              "&:hover": {
                backgroundColor: "#e6007721",
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
