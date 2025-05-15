export const buttonIconString = `import {
  ArrowForward,
  ChevronRight,
  Download,
  IosShare,
  MailOutline,
  Refresh,
  ThumbUp,
  FavoriteBorder,
} from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Stack } from "@mui/material";

export const ButtonIconPreview = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
        alignItems="center"
      >
        <IconButton color="primary" title="Primary">
          <MailOutline />
        </IconButton>

        <IconButton color="secondary" title="Secondary">
          <MailOutline />
        </IconButton>

        <IconButton color="error" title="Error">
          <MailOutline />
        </IconButton>

        <IconButton color="warning" title="Warning">
          <MailOutline />
        </IconButton>

        <IconButton color="info" title="Info">
          <MailOutline />
        </IconButton>

        <IconButton color="success" title="Success">
          <MailOutline />
        </IconButton>

        <IconButton disabled>
          <MailOutline />
        </IconButton>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Bordered Icon */}
      <Stack
        direction="row"
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
        alignItems="center"
      >
        <Box>
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: "8px",
              padding: 1,
              color: "white",
            }}
          >
            <ArrowForward />
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
              color: "white",
            }}
          >
            <ArrowForward />
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
            <ThumbUp />
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
            <ThumbUp />
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
            <Download />
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
            <IosShare />
          </IconButton>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Contained Icon Button*/}
      <Stack
        direction="row"
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
        alignItems="center"
      >
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "999px" }}
            startIcon={<MailOutline />}
          >
            Start Icon
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: "999px" }}
            startIcon={<MailOutline />}
          >
            End Icon
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<MailOutline />}
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
            Icon Warning
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            disabled
            startIcon={<MailOutline />}
            sx={{ borderRadius: "999px" }}
          >
            Icon Disalbed
          </Button>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Outlined Icon Button*/}
      <Stack
        direction="row"
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
        alignItems="center"
      >
        <Box>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<MailOutline />}
            sx={{ borderRadius: "999px" }}
          >
            Start Icon
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="info"
            endIcon={<Refresh />}
            sx={{ borderRadius: "999px" }}
          >
            End Icon
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            disabled
            endIcon={<MailOutline />}
            sx={{ borderRadius: "999px" }}
          >
            Disabled Outlined
          </Button>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* text icon button */}
      <Stack
        direction="row"
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
        alignItems="center"
      >
        <Box>
          <Button
            variant="text"
            color="primary"
            endIcon={<ChevronRight fontSize="large" />}
          >
            Read More
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            color="secondary"
            startIcon={<FavoriteBorder />}
          >
            Add To Favorite
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            color="primary"
            disabled
            endIcon={<MailOutline />}
          >
            Text Disabled
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};`