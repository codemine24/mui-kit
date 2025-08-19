"use client";
import { BodyText } from "@/components/core/body-text";
import { Heading2 } from "@/components/core/heading-2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Contributors } from "./contributors";

export const ContributorsOverview = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        paddingTop: { xs: "40px", md: "80px" },
        paddingBottom: { xs: "60px", md: "80px" },
      }}
    >
      <Container maxWidth={"xl"}>
        <Box mb={4}>
          <Heading2
            text="Community Contributors"
            sx={{ textAlign: "center" }}
          />
          <BodyText
            text={
              <>
                Here are the hand-picked contributors who had huge contribution
                in MUI Kit. If you are an open-source enthusiast and want to
                contribute, you can find us on{" "}
                <Link
                  href="https://github.com/codemine24/mui-kit"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  GitHub
                </Link>
              </>
            }
            sx={{
              textAlign: "center",
              px: { xs: "0%", md: "25%" },
            }}
          />
        </Box>
        <Contributors />
      </Container>
    </Box>
  );
};
