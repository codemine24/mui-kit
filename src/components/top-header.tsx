"use client";
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export const TopHeader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.common.white,
        py: 1,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          {" "}
          <Typography
            variant="body1"
            fontSize={{ xs: 12, sm: 14, md: 15 }}
            sx={{
              fontWeight: 500,
            }}
          >
            🚀 Learn In-Demand Skills Online with Ostad – Join 1 Million+
            Learners!{" "}
            <Link
              href="https://ostad.app/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{
                color: theme.palette.common.white,
                textDecoration: "underline",
              }}
            >
              Learn more
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
