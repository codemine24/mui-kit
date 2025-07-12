"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const FocusBoxThreePreview = () => {
  const cardBgImage1 =
    "https://images.unsplash.com/photo-1547104442-044448b73426?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cardBgImage2 =
    "https://images.unsplash.com/photo-1600172454520-134a542a2255?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cardBgImage3 =
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6 }} sx={{ alignItems: "center" }}>
        <Card
          sx={{
            background: `url(${cardBgImage1}) center / cover no-repeat`,
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            color: "common.black",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgb(194 206 212 / 51%)`,
              zIndex: 1,
            }}
          />
          <CardContent sx={{ zIndex: 2 }}>
            <Typography variant="subtitle1">Sub Heading</Typography>
            <Typography variant="h3">Main Heading</Typography>
            <Typography variant="h5">
              vivamus ultrices ipsum, commodo vitae.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec
              ipsum luctus. Eget non vitae scelerisque eget sapienre libero,
              lorem nam quis vitae quis morbi, id consequat mauris massa.
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }}>
              BUTTON
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                background: `url(${cardBgImage2}) center / cover no-repeat`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                color: "common.black",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: `rgb(213 228 218 / 16%)`,
                  zIndex: 1,
                }}
              />
              <CardContent sx={{ zIndex: 5 }}>
                <Typography variant="h4">Heading #1</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit
                  nec ipsum luctus. Eget non vitae scelerisque eget sapienre
                  libero, lorem nam quis vitae quis morbi, id consequat mauris
                  massa.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                background: `url(${cardBgImage3}) center / cover no-repeat`,
                display: "flex",
                alignItems: "center",
                position: "relative",
                color: "common.black",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: `rgb(210 218 222 / 26%)`,
                  zIndex: 1,
                }}
              />
              <CardContent sx={{ zIndex: 2 }}>
                <Typography variant="h4">Heading #2</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit
                  nec ipsum luctus. Eget non vitae scelerisque eget sapienre
                  libero, lorem nam quis vitae quis morbi, id consequat mauris
                  massa.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
