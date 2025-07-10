import { Box, Divider, Grid, Typography } from "@mui/material";

export const SubHeroDoubleColTwoPreview = () => {
  return (
    <Box>
      <Grid container>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ px: { xs: 0, md: 2 }, py: { xs: 2, md: 2 } }}
        >
          <Typography sx={{ textTransform: "uppercase", color: "#DA9100" }}>
            Create. Inspire. Shine
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "text.primary",
              fontSize: { xs: 24, md: 32 },
              fontWeight: 600,
            }}
          >
            Dream Big. Stay Bold.
          </Typography>
          <Typography
            sx={{
              py: 2,
              fontSize: { xs: 16, md: 18 },
              color: "text.secondary",
              fontWeight: 200,
            }}
          >
            Life’s too short for small plans. Dream big, take risks, and leave a
            mark. Every step forward is progress. Embrace challenges, celebrate
            wins, and keep growing. Your journey matters—make it unforgettable.
            Ready to shine? Let’s go!
          </Typography>
        </Grid>
        <Grid
          
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "flex-end", 
            justifyContent: "flex-end",
            px: { xs: 0, md: 2 },
          }}
        >
          <Divider
            sx={{
              width: "50%",
              backgroundColor: "#DA9100",
              height: 4,
              mb: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
