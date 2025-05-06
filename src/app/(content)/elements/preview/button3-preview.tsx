import { Stack, Button, Box, Divider } from "@mui/material";

export const Button3Preview = () => {
  return (
    <Box>
      {/* Custom Sizes */}
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button
            variant="text"
            color="primary"
            sx={{ fontSize: "0.625rem", padding: "3px 8px", minWidth: "auto" }}
          >
            xs
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="primary" size="small">
            small
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="primary" size="medium">
            medium
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="primary" size="large">
            large
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            color="primary"
            sx={{ fontSize: "1rem", padding: "10px 20px" }}
          >
            xl
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
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
          <Button variant="text" color="primary" sx={{ borderRadius: "5px" }}>
            Rounded
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            color="primary"
            sx={{ borderRadius: "50px", padding: "6px 20px" }}
          >
            Pill Shape
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{
              borderRadius: "50%",
              minWidth: 0,
              width: 68,
              height: 68,
              padding: 0,
            }}
          >
            ○
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{ width: 64, height: 64, borderRadius: 0 }}
          >
            Sq
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              width: 100,
              height: 56,
              padding: 0,
            }}
          >
            Hex
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(90deg, #3f51b5, #ff4081)",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Gradient Text
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
