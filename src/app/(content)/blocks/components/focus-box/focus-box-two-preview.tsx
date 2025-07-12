"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export const FocusBoxTwoPreview = () => {
  return (
    <Box container sx={{ width: "100%", p: 5, bgcolor: "#2975FF" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", bgcolor: "text.primary" }} />
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "text.primary",
              whiteSpace: "nowrap",
            }}
          >
            Sub Title
          </Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: "text.primary" }} />
        </Box>

        <Typography
          sx={{
            textTransform: "uppercase",
            color: "text.primary",
            fontSize: { xs: 24, md: 32 },
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Focus Boxes
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", sm: 160 },
                maxHeight: { xs: "200px", sm: "100%" },
                objectFit: "cover",
              }}
              image="https://images.unsplash.com/photo-1747227825543-5da2c9f03222?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography component="div" variant="h5">
                  Travel Packing Like a Pro
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  Never overpack again. The ultimate checklist for stress-free
                  trips—covering essentials, space-saving tricks, and what you
                  can safely leave behind.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", sm: 160 },
                maxHeight: { xs: "200px", sm: "100%" },
                objectFit: "cover",
              }}
              image="https://images.unsplash.com/photo-1747227825543-5da2c9f03222?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography component="div" variant="h5">
                  Travel Packing Like a Pro
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  Never overpack again. The ultimate checklist for stress-free
                  trips—covering essentials, space-saving tricks, and what you
                  can safely leave behind.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", sm: 160 },
                maxHeight: { xs: "200px", sm: "100%" },
                objectFit: "cover",
              }}
              image="https://images.unsplash.com/photo-1747227825543-5da2c9f03222?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography component="div" variant="h5">
                  Travel Packing Like a Pro
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  Never overpack again. The ultimate checklist for stress-free
                  trips—covering essentials, space-saving tricks, and what you
                  can safely leave behind.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", sm: 160 },
                maxHeight: { xs: "200px", sm: "100%" },
                objectFit: "cover",
              }}
              image="https://images.unsplash.com/photo-1747227825543-5da2c9f03222?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography component="div" variant="h5">
                  Travel Packing Like a Pro
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  Never overpack again. The ultimate checklist for stress-free
                  trips—covering essentials, space-saving tricks, and what you
                  can safely leave behind.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
