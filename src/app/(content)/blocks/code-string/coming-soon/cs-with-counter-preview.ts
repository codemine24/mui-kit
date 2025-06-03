export const csWithCounterString = `import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  };

  if (difference > 0) {
    timeLeft = {
      Days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      Hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      Minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      Seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  return timeLeft;
};

export const CSWithCounterPreview = () => {
  const targetDate = useMemo(() => new Date("2026-01-01"), []);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Box
      sx={{
        minHeight: { xs: "400px", md: "500px", lg: "600px" },
        width: "100%",
        bgcolor: "#0a0f2c",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          letterSpacing: 2,
          mb: 6,
          textAlign: "center",
          fontSize: { xs: 32, md: 48 },
        }}
      >
        We are coming soon
      </Typography>
      <Box
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: 4,
          px: { xs: 3, md: 6 },
          py: 4,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          width: { xs: "100%", md: "600px", lg: "800px" },
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <Grid size={3} key={label}>
              <Typography
                sx={{
                  color: "#5e78f5",
                  fontWeight: 400,
                  fontSize: { xs: 32, md: 48 },
                }}
              >
                {value}
              </Typography>
              <Typography
                variant="caption"
                sx={{ textTransform: "uppercase", color: "#a3accb" }}
              >
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography
        variant="body2"
        sx={{
          maxWidth: 600,
          mt: 4,
          textAlign: "center",
          color: "#a3accb",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Typography>
    </Box>
  );
};`; 
