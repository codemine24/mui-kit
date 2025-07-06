"use client";
import { footerItems } from "@/router/router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: "background.default",
        color: "text.secondary",
        borderTop: `.5px solid ${theme.palette.divider}`
      }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                fontSize: 14
              }}>
              Built with ♥ by{" "}
              <Link
                href="https://www.linkedin.com/company/codemine24/"
                target="_blank"
                style={{
                  color: "primary.main",
                  textDecoration: "none"
                }}>
                <Typography
                  component={"span"}
                  color="primary.main"
                  sx={{
                    "&:hover": { textDecoration: "underline" },
                    ml: 1,
                    fontSize: 14
                  }}>
                  Codemine
                </Typography>
              </Link>
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-end" }}
              width={"100%"}>
              {footerItems?.map((item, index) => {
                return (
                  <Link
                    color="inherit"
                    href={item.path}
                    key={index}
                    style={{
                      fontSize: 14,
                      textDecoration: "none",
                      color: "text.secondary"
                    }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      key={index}
                      sx={{ "&:hover": { textDecoration: "underline" } }}>
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
