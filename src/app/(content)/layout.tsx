"use client";
import Grid from "@mui/material/Grid";
import { ContentSidebar } from "./components/content-sidebar";
import { Container, useTheme } from "@mui/material";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
      <Grid
        container
        spacing={0}
        sx={{
          borderLeft: `.5px solid ${theme.palette.divider}`,
          borderRight: `.5px solid ${theme.palette.divider}`,
          height: "calc(100vh - 124px)",
        }}
      >
        <Grid
          size={{ xs: 0, md: 2 }}
          sx={{
            display: { xs: "none", md: "block" },
            p: 2,
            borderRight: `.5px solid ${theme.palette.divider}`,
            position: "sticky",
            top: 0,
            height: "calc(100vh - 124px)",
            overflowY: "auto",
          }}
        >
          <ContentSidebar />
        </Grid>

        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{
            px: { xs: 2, lg: 4 },
            py: 4,
            overflowY: "auto",
            height: "calc(100vh - 124px)",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
