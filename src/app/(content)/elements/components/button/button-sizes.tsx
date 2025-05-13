import { Stack, Button, Box, Divider } from "@mui/material";

export const ButtonSizesPreview = () => {
  return (
    <Box>
      {/* Contained */}
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <Box>
          <Button variant="contained" size="small">
            small
          </Button>
        </Box>
        <Box>
          <Button variant="contained" size="medium">
            medium
          </Button>
        </Box>
        <Box>
          <Button variant="contained" size="large">
            large
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              fontSize: "1rem",
              padding: "2px 8px",
              minWidth: "150px",
              height: "70px",
            }}
          >
            Custom Size
          </Button>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Outlined */}
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <Box>
          <Button variant="outlined" size="small">
            small
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" size="medium">
            medium
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" size="large">
            large
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              fontSize: "1rem",
              padding: "2px 8px",
              minWidth: "150px",
              height: "70px",
            }}
          >
            Custom Size
          </Button>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Text */}
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <Box>
          <Button variant="text" size="small">
            small
          </Button>
        </Box>
        <Box>
          <Button variant="text" size="medium">
            medium
          </Button>
        </Box>
        <Box>
          <Button variant="text" size="large">
            large
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{
              fontSize: "1rem",
              padding: "2px 8px",
              minWidth: "150px",
              height: "70px",
            }}
          >
            Custom Size
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
