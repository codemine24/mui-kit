import { Stack, Button, Box } from "@mui/material";

export const ButtonOutlinedPreview = () => {
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
          <Button variant="outlined">Default</Button>
        </Box>
        <Box>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="info">
            Info
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Box>

        <Box>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#e6007774",
              color: "#E60076",
              "&:hover": {
                borderColor: "#E60076",
                backgroundColor: "#e6007715",
              },
            }}
          >
            Custom
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
