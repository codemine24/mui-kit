"use client";
import { PageTitle } from "@/components/core/page-title";
import { Box, Divider, Typography } from "@mui/material";

export const AboutView = () => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },
        width: { xs: "100%", md: "60%" },
        mx: "auto",
        minHeight: "calc(100vh - 170px)",
      }}
    >
      <PageTitle
        title="Why MUI Kit even exists?"
        description="Material UI itself a component library, so why does we need another component library that is built on top of Material UI? Let's find out."
      />

      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        1. Material UI itself a component library and each component is fully
        customizable but the problem is mui itself doesn&apos;t provide you so
        many option to choose from. So we have created MUI Kit to <Box component={"span"} sx={{ fontWeight: 600 }}>provide you as
        many variants as possible to choose from.</Box>
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        2. Material ui is missing some key components that are very common in
        real world projects like Slider/ Mega menu. We will{" "}
        <Box component={"span"} sx={{ fontWeight: 600 }}>
          create the missing blocks{" "}
        </Box>
        for your to make your development journey as smooth as possible.
      </Typography>

      <Typography
        variant="h5"
        fontWeight={600}
        id="why-contribute"
        sx={{ mt: 3 }}
      >
        Who behind MUI Kit?
      </Typography>

      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 1 }}>
        Team{" "}
        <Box
          component={"a"}
          href="https://www.codeminetechnologies.com/"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            mx: 0.5,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Codemine
        </Box>{" "}
        and our amazing contributes are behind this project. If you love
        material ui and care about open source community we would love you to{" "}
        <Box
          component={"a"}
          href="https://github.com/codemine24/mui-kit"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            mx: 0.5,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Contribute.
        </Box>
      </Typography>

      <Typography
        variant="h5"
        fontWeight={600}
        id="why-contribute"
        sx={{ mt: 3 }}
      >
        Want to contact us?
      </Typography>

      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 1 }}>
        For business query or bug report please email us at
        <Box
          component={"a"}
          href="https://www.codeminetechnologies.com/"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            mx: 0.5,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          codemine24@gmail.com
        </Box>
      </Typography>
    </Box>
  );
};
