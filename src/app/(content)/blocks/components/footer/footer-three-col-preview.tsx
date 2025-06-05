import { Facebook, LinkedIn, X, YouTube } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export const FooterThreeColPreview = () => {
  const footerItems = [
    { label: "Report bug", path: "/report-bug" },
    { label: "Changelog", path: "/changelog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        px: { xs: 2, md: 4 },
        width: "100%",
        py: { xs: 4, md: 6 },
      }}
    >
      <Grid size={{ xs: 12, md: 4 }}>
        <Title value="Company" />
        <Typography
          sx={{
            color: "#9a9a9a",
            fontSize: { xs: 12, md: 14 },
            textAlign: "left",
            mb: 1,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
          officia!
        </Typography>
        <Typography
          sx={{
            color: "#9a9a9a",
            fontSize: { xs: 12, md: 14 },
            textAlign: "left",
          }}
        >
          @{new Date().getFullYear()} Company Inc. All rights reserved
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Title value="Pages" />

        {footerItems?.map((item, index) => {
          return (
            <Link
              color="inherit"
              href={item.path}
              key={index}
              style={{
                fontSize: 14,
                textDecoration: "none",
                color: "#bdbdbd",
              }}
            >
              <Typography
                gutterBottom
                variant="body2"
                color="#bdbdbd"
                key={index}
                sx={{
                  "&:hover": { color: "#fff" },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          );
        })}
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Title value="Social" />
        <Stack direction="row" spacing={2} rowGap={2}>
          {/* Facebook */}
          <IconButton
            sx={{
              borderRadius: "50%",
              color: "#fff",
              backgroundColor: "#4372d6",
              "&:hover": {
                backgroundColor: "#1F56CC",
              },
            }}
          >
            <Facebook sx={{ fontSize: 16 }} />
          </IconButton>

          {/* X */}
          <IconButton
            sx={{
              borderRadius: "50%",
              color: "#fff",
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            <X sx={{ fontSize: 16 }} />
          </IconButton>

          {/* Linkedin */}
          <IconButton
            sx={{
              borderRadius: "50%",
              color: "#fff",
              backgroundColor: "#1876d2",
              "&:hover": {
                backgroundColor: "#145ea8",
              },
            }}
          >
            <LinkedIn sx={{ fontSize: 16 }} />
          </IconButton>

          {/* Youtube */}
          <IconButton
            sx={{
              borderRadius: "50%",
              color: "#fff",
              backgroundColor: "#cf2849",
              "&:hover": {
                backgroundColor: "#FF0033",
              },
            }}
          >
            <YouTube sx={{ fontSize: 16 }} />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

const Title = ({ value }: { value: string }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#fff",
          fontSize: { xs: 22, md: 24 },
          fontWeight: 800,
          textAlign: "left",
        }}
      >
        {value}
      </Typography>
      <Divider
        sx={{
          bgcolor: "#fff",
          width: 50,
          borderBottom: "none",
          borderTop: "4px dotted #9a9a9a",
          backgroundColor: "transparent",
          mt: 0.5,
          mb: 2,
        }}
      />
    </Box>
  );
};
