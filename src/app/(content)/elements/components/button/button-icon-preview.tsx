import { ChevronRight, Refresh, Send } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Stack } from "@mui/material";

export const ButtonIconPreview = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap" alignItems="center">
        <IconButton>
          <Send />
        </IconButton>

        <IconButton color="primary">
          <Send />
        </IconButton>

        <IconButton color="secondary">
          <Send />
        </IconButton>

        <IconButton color="error">
          <Send />
        </IconButton>

        <IconButton color="warning">
          <Send />
        </IconButton>

        <IconButton color="info">
          <Send />
        </IconButton>

        <IconButton color="success">
          <Send />
        </IconButton>

        <IconButton disabled>
          <Send />
        </IconButton>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Bordered Icon */}
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap" alignItems="center">
        <Box>
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: "8px",
              padding: 1,
            }}
          >
            <Send />
          </IconButton>
        </Box>

        <Box>
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: "50%",
              padding: 1,
            }}
          >
            <Send />
          </IconButton>
        </Box>

        <Box>
          <IconButton
            color="primary"
            sx={{
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: "8px",
              padding: 1,
            }}
          >
            <Send />
          </IconButton>
        </Box>

        <Box>
          <IconButton
            color="primary"
            sx={{
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: "50%",
              padding: 1,
            }}
          >
            <Send />
          </IconButton>
        </Box>

        <Box>
          <IconButton
            color="primary"
            sx={{
              border: "1px dashed",
              borderColor: "primary.main",
              borderRadius: "50%",
              padding: 1,
            }}
          >
            <Send />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            disabled
            sx={{
              border: "1px dashed",
              borderColor: "gray",
              borderRadius: "50%",
              padding: 1,
            }}
          >
            <Send />
          </IconButton>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Contained Icon Button*/}
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button variant="contained" color="primary" sx={{ borderRadius: "999px" }} startIcon={<Send />}>
            Send
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="secondary" sx={{ borderRadius: "999px" }} startIcon={<Send />}>
            Send
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Send />}
            sx={{
              backgroundColor: "#ffebee",
              color: "#d32f2f",
              textTransform: "capitalize",
              fontWeight: 600,
              borderRadius: "999px",
              px: 2.5,
              py: 1,
              minWidth: "auto",
              "&:hover": {
                backgroundColor: "#ffebee",
                opacity: 0.9,
              },
            }}
          >
            Send
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            disabled
            startIcon={<Send />}
            sx={{ borderRadius: "999px" }}
          >
            Send
          </Button>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Outlined Icon Button*/}
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button variant="outlined" color="primary" startIcon={<Send />} sx={{ borderRadius: "999px" }}>
            Send
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="primary" endIcon={<Refresh />} sx={{ borderRadius: "999px" }}>
            Refresh
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            disabled
            endIcon={<Send />}
            sx={{ borderRadius: "999px" }}
          >
            Send
          </Button>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* text icon button */}
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button variant="text" color="primary" endIcon={<ChevronRight fontSize="large" />}>Read More</Button>
        </Box>
        <Box>
          <Button variant="text" color="secondary" endIcon={<Send />}>
            Send
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="primary" disabled endIcon={<Send />}>
            Send
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
