"use client";
import { OnThisPage } from "@/components/on-this-page";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { ContentSidebar } from "./components/content-sidebar";
import { useOnThisPage } from "@/contexts/on-thispage-context";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOnThisPage } = useOnThisPage();
  console.log(isOnThisPage, "isOnThisPage layout...");
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
          size={{ xs: 12, md: isOnThisPage ? 8 : 10 }}
          sx={{
            pl: { md: 2, lg: 4 },
            pr: { md: isOnThisPage ? 2 : 0, lg: isOnThisPage ? 4 : 0 },
            py: 2.5,
            overflowY: "auto",
            height: "calc(100vh - 124px)",
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
            top: 0,
            height: "calc(100vh - 124px)",
            overflowY: "auto",
          }}
        >
          <OnThisPage />
        </Grid>
      </Grid>
    </Container>
  );
}
