import { Facebook, Google, LinkedIn, X } from "@mui/icons-material";
import { Grid, IconButton, Link, Stack, Typography } from "@mui/material";

export const CopyrightThreeColPreview = () => {
  const footerItems = [
    { label: "Report bug", path: "/report-bug" },
    { label: "Changelog", path: "/changelog" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <Grid
      container
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        px: { xs: 2, md: 4 },
        py: 1,
        width: "100%",
      }}
    >
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#9a9a9a",
            fontSize: { xs: 12, md: 14 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          @{new Date().getFullYear()} Company Inc. All rights reserved
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <IconButton
          sx={{
            color: "#9a9a9a",
            padding: 1,
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          sx={{
            color: "#9a9a9a",
            padding: 1,
          }}
        >
          <X />
        </IconButton>
        <IconButton
          sx={{
            color: "#9a9a9a",
            padding: 1,
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          sx={{
            color: "#9a9a9a",
            padding: 1,
          }}
        >
          <Google />
        </IconButton>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: { xs: "block", md: "flex" } }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems={"center"}
          width={"100%"}
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
                  color: "#9a9a9a",
                }}
              >
                <Typography
                  variant="body2"
                  color="#9a9a9a"
                  key={index}
                  sx={{ "&:hover": { textDecoration: "underline" } }}
                >
                  {item.label}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
};
