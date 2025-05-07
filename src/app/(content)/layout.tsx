"use client";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ContentSidebar } from "./components/content-sidebar";
import { OnThisPage } from "@/components/on-this-page";
import { OnThisPageProvider } from "@/contexts/on-thispage-context";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OnThisPageProvider>
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
            size={{ xs: 12, md: 8 }}
            sx={{
              px: { md: 2, lg: 4 },
              py: 2.5,
              overflowY: "auto",
              height: "calc(100vh - 124px)",
              scrollbarWidth: "none", 
              
            }}
          >
            {children}
          </Grid>
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
            <OnThisPage />
          </Grid>
        </Grid>
      </Container>
    </OnThisPageProvider>
  );
}
