import { Box, Grid, Typography } from "@mui/material";

const listArrOne = [
  {
    id: 1,
    list: "Your Feature List 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo esse quod nulla, nihil quae provident.",
  },
  {
    id: 2,
    list: "Your Feature List 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo esse quod nulla, nihil quae provident.",
  },
  {
    id: 3,
    list: "Your Feature List 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo esse quod nulla, nihil quae provident.",
  },
];

const listArrTwo = [
  {
    id: 4,
    list: "Your Feature List 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo esse quod nulla, nihil quae provident.",
  },
  {
    id: 5,
    list: "Your Feature List 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo esse quod nulla, nihil quae provident.",
  },
  {
    id: 6,
    list: "Your Feature List 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo esse quod nulla, nihil quae provident.",
  },
];

export const FeatureWithImagePreview = () => {
  return (
    <Box>
      <Grid container sx={{ bgcolor: "background.paper", px: 2 }}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ px: { xs: 0, md: 4 }, py: { xs: 2, md: 2 } }}
        >
          {listArrOne.map((item) => (
            <Box key={item.id} sx={{ py: 1 }}>
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  color: "text.primary",
                  fontWeight: 500,
                }}
              >
                {item.list}
              </Typography>
              <Typography
                sx={{
                  py: 1,
                  fontSize: { xs: 14, md: 16 },
                  color: "text.secondary",
                  fontWeight: 200,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component={"img"}
            src="https://images.unsplash.com/photo-1678787017689-2bf6b91eab5d"
            sx={{
              width: "100%",
              maxHeight: "450px",
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 4,
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ px: { xs: 0, md: 4 }, py: { xs: 2, md: 2 } }}
        >
          {listArrTwo.map((item) => (
            <Box key={item.id} sx={{ py: 1 }}>
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  color: "text.primary",
                  fontWeight: 500,
                }}
              >
                {item.list}
              </Typography>
              <Typography
                sx={{
                  py: 1,
                  fontSize: { xs: 14, md: 16 },
                  color: "text.secondary",
                  fontWeight: 200,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
