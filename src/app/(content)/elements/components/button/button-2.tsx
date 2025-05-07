import { Stack, Button, Box, Divider } from "@mui/material";

export const Button2Preview = () => {
  return (
    <Box>
      {/* Custom Sizes */}
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{ fontSize: "0.625rem", padding: "3px 8px", minWidth: "auto" }}
          >
            xs
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="primary" size="small">
            small
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="primary" size="medium">
            medium
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="primary" size="large">
            large
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{ fontSize: "1rem", padding: "10px 20px" }}
          >
            xl
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              fontSize: "0.65rem",
              padding: "2px 8px",
              minWidth: "204px",
              height: "94px",
            }}
          >
            Custom Size
          </Button>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Custom Shapes */}
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "5px" }}
          >
            Rounded
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "50px", padding: "6px 20px" }}
          >
            Pill Shape
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50%",
              minWidth: 0,
              width: 68,
              height: 68,
              padding: 0,
            }}
          >
            Circle
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{ width: 64, height: 64, borderRadius: 0 }}
          >
            Sq
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              position: "relative",
              color: "transparent",
              border: "2px solid",
              borderImage: "linear-gradient(45deg, #3f51b5, #9c27b0) 1",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(45deg, #3f51b5, #9c27b0)",
              "&:hover": {
                borderImage: "linear-gradient(45deg, #9c27b0, #3f51b5) 1",
                backgroundImage: "linear-gradient(45deg, #9c27b0, #3f51b5)",
              },
            }}
          >
            Gradient Outline
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
