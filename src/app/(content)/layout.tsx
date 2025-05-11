"use client";
import { OnThisPage } from "@/components/on-this-page";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { ContentSidebar } from "./components/content-sidebar";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOnThisPage } = useOnThisPage();
  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
      <Grid container spacing={0}>
        <Grid
          size={{ xs: 0, md: 2 }}
          sx={{
            display: { xs: "none", md: "block" },
            position: "sticky",
            top: 60,
            height: "calc(100vh - 20px)",
            overflowY: "auto",
          }}
        >
          <ContentSidebar />
        </Grid>

        <Grid
          size={{ xs: 12, md: isOnThisPage ? 8 : 10 }}
          sx={{
            pl: { md: 2, lg: 4 },
            pr: { md: isOnThisPage ? 2 : 0, lg: isOnThisPage ? 4 : 0 },
            pt: { xs: 2, md: 3 },
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {children}
        </Grid>
        <Grid
          size={{ xs: 0, md: isOnThisPage ? 2 : 0 }}
          sx={{
            display: { xs: "none", md: "block" },
            position: "sticky",
            top: 62,
            height: "calc(100vh - 20px)",
            overflowY: "auto",
          }}
        >
          <OnThisPage />
        </Grid>
      </Grid>
    </Container>
  );
}
