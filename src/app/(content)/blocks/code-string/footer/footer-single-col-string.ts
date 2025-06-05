export const footerSingleColString = `import { Facebook, Google, LinkedIn, X } from "@mui/icons-material";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const FooterSingleColPreview = () => {
  const footerItems = [
    { label: "Report bug", path: "/report-bug" },
    { label: "Changelog", path: "/changelog" },
    { label: "Contact", path: "/contact" },
  ];

  const Logo = () => {
    return (
      <Typography
        variant="h5"
        sx={{
          px: 3,
          py: 1.5,
          color: "#bdbdbd",
          fontWeight: 800,
          borderRadius: 0,
          textAlign: "center",
          fontFamily: "monospace",
          textTransform: "uppercase",
          fontSize: { xs: 22, md: 28 },
        }}
      >
        Your Logo
      </Typography>
    );
  };
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        px: { xs: 2, md: 4 },
        width: "100%",
        py: { xs: 4, md: 6 },
      }}
    >
      <Logo />

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems={"center"}
        width={"100%"}
        mb={1}
      >
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
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          sx={{
            color: "#bdbdbd",
            padding: 1,
            ":hover": { color: "#fff" },
          }}
        >
          <Facebook sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton
          sx={{
            color: "#bdbdbd",
            padding: 1,
            ":hover": { color: "#fff" },
          }}
        >
          <X sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton
          sx={{
            color: "#bdbdbd",
            padding: 1,
            ":hover": { color: "#fff" },
          }}
        >
          <LinkedIn sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton
          sx={{
            color: "#bdbdbd",
            padding: 1,
            ":hover": { color: "#fff" },
          }}
        >
          <Google sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>
    </Box>
  );
};`;
