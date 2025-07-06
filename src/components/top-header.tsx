"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export const TopHeader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.common.white,
        py: 1,
        textAlign: "center"
      }}>
      <Container maxWidth="xl">
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={1}>
          {" "}
          <Typography
            variant="body1"
            fontSize={{ xs: 12, sm: 14, md: 14 }}
            sx={{
              fontWeight: 400
            }}>
            Please support us running this open source project by{" "}
            <Link
              href="/contact"
              rel="noopener noreferrer"
              style={{
                color: theme.palette.common.white,
                textDecoration: "underline"
              }}>
              sponsoring
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
