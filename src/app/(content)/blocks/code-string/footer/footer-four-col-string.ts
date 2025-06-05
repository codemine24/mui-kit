export const footerFourColString = `import { Facebook, LinkedIn, X, YouTube } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export const FooterFourColPreview = () => {
  const footerItems = [
    { label: "Home", path: "/" },
    { label: "Report bug", path: "/report-bug" },
    { label: "Changelog", path: "/changelog" },
    { label: "Contact", path: "/contact" },
  ];
  const blogItems = [
    { label: "Blog title 1", path: "/" },
    { label: "Blog title 2", path: "/report-bug" },
    { label: "Blog title 3", path: "/changelog" },
    { label: "Blog title 4", path: "/contact" },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      sx={{
        position: "relative",
        backgroundImage: \`url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")\`,
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(256, 256, 256, 0.9)",
          zIndex: 1,
        }}
      />
      <Grid size={{ xs: 12, md: 3 }} sx={{ zIndex: 2 }}>
        <Title value="About Us" />
        <Typography
          sx={{
            color: "#333",
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
            color: "#333",
            fontSize: { xs: 12, md: 14 },
            textAlign: "left",
          }}
        >
          @{new Date().getFullYear()} Company Inc. All rights reserved
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }} sx={{ zIndex: 2 }}>
        <Title value="Browse" />

        {footerItems?.map((item, index) => {
          return (
            <Link
              color="inherit"
              href={item.path}
              key={index}
              style={{
                fontSize: 14,
                textDecoration: "none",
                color: "#333  ",
              }}
            >
              <Typography
                gutterBottom
                variant="body2"
                color="#333 "
                key={index}
                sx={{
                  "&:hover": { color: "#000 ", textDecoration: "underline" },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          );
        })}
      </Grid>
      <Grid size={{ xs: 12, md: 3 }} sx={{ zIndex: 2 }}>
        <Title value="Articles" />

        {blogItems?.map((item, index) => {
          return (
            <Link
              color="inherit"
              href={item.path}
              key={index}
              style={{
                fontSize: 14,
                textDecoration: "none",
                color: "#333  ",
              }}
            >
              <Typography
                gutterBottom
                variant="body2"
                color="#333 "
                key={index}
                sx={{
                  "&:hover": { color: "#000 ", textDecoration: "underline" },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          );
        })}
      </Grid>
      <Grid size={{ xs: 12, md: 3 }} sx={{ zIndex: 2 }}>
        <Title value="Contact" />
        <Stack direction="row" spacing={2} rowGap={2}>
          {/* Facebook */}
          <IconButton
            sx={{
              borderRadius: "50%",
              color: "#fff  ",
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
              color: "#fff  ",
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
              color: "#fff  ",
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
              color: "#fff  ",
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
          color: "#333",
          textTransform: "uppercase",
          fontSize: { xs: 16, md: 18 },
          fontWeight: 400,
          textAlign: "left",
        }}
      >
        {value}
      </Typography>
      <Divider
        sx={{
          bgcolor: "#333  ",
          width: 50,
          borderBottom: "none",
          borderTop: "2px solid rgb(186, 182, 182)",
          backgroundColor: "transparent",
          mt: 0.5,
          mb: 2,
        }}
      />
    </Box>
  );
};`;
