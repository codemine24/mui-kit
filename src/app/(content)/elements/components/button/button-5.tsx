import { Send } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Stack } from "@mui/material";

export const Button5Preview = () => {
  return (
    <Box>
      {/* Icon Only */}
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Box>
          <IconButton color="primary">
            <Send />
          </IconButton>
        </Box>

        <Box>
          <IconButton color="error">
            <Send />
          </IconButton>
        </Box>
        <Box>
          <IconButton disabled>
            <Send />
          </IconButton>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />
      {/* Bordered Icon */}
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
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
            color="error"
            sx={{
              border: "1px dashed",
              borderColor: "error.main",
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
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button variant="contained" color="primary" startIcon={<Send />}>
            Send
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="primary" endIcon={<Send />}>
            Send
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            endIcon={<Send sx={{ color: "red" }} />}
          >
            Send
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            disabled
            endIcon={<Send />}
          >
            Send
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            endIcon={<Send />}
            sx={{
              backgroundColor: "#ffebee",
              color: "#d32f2f",
              textTransform: "capitalize",
              fontWeight: 600,
              // borderRadius: "10px",
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
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button variant="outlined" color="primary" startIcon={<Send />}>
            Send
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="primary" endIcon={<Send />}>
            Send
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<Send sx={{ color: "red" }} />}
          >
            Send
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            disabled
            endIcon={<Send />}
          >
            Send
          </Button>
        </Box>
      </Stack>
      <Divider sx={{ my: 2 }} />
      {/* text icon button */}
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Box>
          <Button variant="text" color="primary" startIcon={<Send />}>
            Send
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="primary" endIcon={<Send />}>
            Send
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            color="primary"
            endIcon={<Send sx={{ color: "red" }} />}
          >
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
