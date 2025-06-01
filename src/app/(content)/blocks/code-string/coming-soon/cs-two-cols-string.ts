export const csTwoColsString = `import { Facebook, X } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Stack, Typography } from "@mui/material";

export const CSTwoColsPreview = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: { xs: "auto", lg: "600px" },
        overflow: "hidden",
      }}
    >
      <Grid
        size={{ xs: 12, lg: 6 }}
        sx={{
          position: "relative",
          height: { xs: 300, lg: "100%" },
          background: \`url("https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")\`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Logo />
        </Box>
      </Grid>
      <Grid
        size={{ xs: 12, lg: 6 }}
        sx={{
          p: { xs: 3, lg: 6 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", lg: "flex-start" },
          textAlign: { xs: "center", lg: "left" },
          backgroundColor: "#193034",
          color: "common.white",
          minHeight: { xs: 300, lg: "100%" },
          py: { xs: 5, lg: 6 },
        }}
      >
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Logo />
        </Box>
        <Typography
          variant="h4"
          fontWeight={400}
          fontFamily="initial"
          fontSize={{ xs: 48, lg: 54 }}
        >
          Great things
        </Typography>
        <Typography
          variant="h4"
          fontWeight={400}
          fontFamily="initial"
          fontSize={{ xs: 48, lg: 54 }}
        >
          Are Coming!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 2,
            backgroundColor: "common.white",
            color: "common.black",
            borderRadius: 0,
          }}
        >
          Learn more
        </Button>
        <Stack direction="row" sx={{ mt: 2 }}>
          <IconButton
            sx={{
              color: "#fff",
              padding: 1,
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              color: "#fff",
              padding: 1,
            }}
          >
            <X />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

const Logo = () => {
  return (
    <Typography
      variant="h5"
      sx={{
        px: 3,
        py: 1.5,
        border: "2px solid #fff",
        color: "common.white",
        fontWeight: "bold",
        borderRadius: 0,
      }}
    >
      Ocean X
    </Typography>
  );
};
`; 
