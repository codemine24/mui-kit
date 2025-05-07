"use client";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ContentSidebar } from "./components/content-sidebar";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
      <Grid
        container
        spacing={0}
        sx={{
          height: "calc(100vh - 124px)",
        }}
      >
        <Grid
          size={{ xs: 0, md: 2 }}
          sx={{
            display: { xs: "none", md: "block" },
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
