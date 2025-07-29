export const btnGroupModernString = `import MenuIcon from "@mui/icons-material/Menu";
import { Box, ButtonGroup, Divider, Stack } from "@mui/material";
import Button from "@mui/material/Button";

export const BtnGroupModernPreview = () => {
  return (
    <Stack direction="column" gap={2}>
      {/* no border radius */}

      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{
          boxShadow: "none",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            width: { xs: "50%", sm: "auto" },
          }}
        >
          <Button
            sx={{
              p: { xs: "6px 10px", sm: "10px 40px", md: "10px 70px" },
              bgcolor: "#6170DF",
              textTransform: "none",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              width: "100%",
              "&:hover": {
                bgcolor: "rgba(97, 112, 223, 1)",
              },
            }}
          >
            Subscribe
          </Button>
          <Divider
            sx={{
              width: { xs: "24px", sm: "30px" },
              height: { xs: "24px", sm: "30px" },
              borderRadius: "50px",
              bgcolor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translate(50%, -50%)",
              zIndex: 1,
              boxShadow: "0 0 0 2px #f5f5f5",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            or
          </Divider>
        </Box>
        <Button
          sx={{
            p: { xs: "8px 16px", sm: "10px 40px", md: "10px 70px" },
            bgcolor: "#FF7878",
            textTransform: "none",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            width: { xs: "50%", sm: "auto" },
            "&:hover": {
              bgcolor: "rgba(241, 104, 104, 1)",
            },
          }}
        >
          Learn more
        </Button>
      </ButtonGroup>

      {/* With border radius */}
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{
          boxShadow: "none",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            width: { xs: "50%", sm: "auto" },
          }}
        >
          <Button
            sx={{
              p: { xs: "8px 16px", sm: "10px 40px", md: "10px 70px" },
              bgcolor: "#0CC1BC",
              borderRadius: "30px 0 0 30px",
              textTransform: "none",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              width: "100%",
              "&:hover": {
                bgcolor: "rgba(12, 193, 188, 1)",
              },
            }}
          >
            Follow
          </Button>
          <Divider
            sx={{
              width: { xs: "24px", sm: "30px" },
              height: { xs: "24px", sm: "30px" },
              borderRadius: "50px",
              bgcolor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translate(50%, -50%)",
              zIndex: 1,
              boxShadow: "0 0 0 2px #f5f5f5",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            and
          </Divider>
        </Box>
        <Button
          sx={{
            p: { xs: "6px 10px", sm: "10px 40px", md: "10px 70px" },
            bgcolor: "#0281E3",
            borderRadius: "0 30px 30px 0",
            textTransform: "none",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            width: { xs: "50%", sm: "auto" },
            "&:hover": {
              bgcolor: "rgba(2, 129, 227, 1)",
            },
          }}
        >
          Share
        </Button>
      </ButtonGroup>

      {/* with icon */}
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{
          boxShadow: "none",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            width: { xs: "50%", sm: "auto" },
          }}
        >
          <Button
            sx={{
              p: { xs: "8px 16px", sm: "10px 40px", md: "10px 70px" },
              bgcolor: "#FFB676",
              borderRadius: "30px 0 0 30px",
              textTransform: "none",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              width: "100%",
              "&:hover": {
                bgcolor: "rgba(12, 193, 188, 1)",
              },
            }}
          >
            Subscribe
          </Button>
          <Divider
            sx={{
              width: { xs: "24px", sm: "30px" },
              height: { xs: "24px", sm: "30px" },
              borderRadius: "50px",
              bgcolor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translate(50%, -50%)",
              zIndex: 1,
              boxShadow: "0 0 0 2px #f5f5f5",
              fontSize: { xs: "0.85rem", sm: "1.25rem" },

              "& svg": {
                display: "block",
                margin: 0,
                padding: 0,
                fontSize: "inherit",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: "inherit" }} />
          </Divider>
        </Box>
        <Button
          sx={{
            p: { xs: "6px 10px", sm: "10px 40px", md: "10px 70px" },
            bgcolor: "#6758B4",
            borderRadius: "0 30px 30px 0",
            textTransform: "none",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            width: { xs: "50%", sm: "auto" },
            "&:hover": {
              bgcolor: "rgba(2, 129, 227, 1)",
            },
          }}
        >
          Learn more
        </Button>
      </ButtonGroup>
    </Stack>
  );
};`