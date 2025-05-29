import { Box, Divider, Typography } from "@mui/material";

export const AboutBasicPreview = () => {
  return (
    <Box>
      <Typography sx={{ textTransform: "uppercase", color: "primary.main" }}>
        About Us One Column
      </Typography>
      <Typography
        sx={{
          textTransform: "uppercase",
          color: "text.primary",
          fontSize: { xs: 24, md: 32 },
          fontWeight: 600,
        }}
      >
        Serving since 1967
      </Typography>
      <Divider
        sx={{ my: 2, width: "10%", backgroundColor: "primary.main", height: 4 }}
      />

      <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
        Our History
      </Typography>

      <Typography sx={{ py: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
        esse quod nulla, nihil quae provident commodi dolores dolore earum
        quaerat sapiente laborum in nisi excepturi ipsam totam non nemo
        voluptatum, architecto, consequatur .
      </Typography>
      <Typography sx={{ pb: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
        esse quod nulla, nihil quae provident commodi dolores dolore earum
        quaerat sapiente laborum in nisi excepturi ipsam totam non nemo
        voluptatum, architecto, consequatur dolor cum debitis temporibus. In
        quisquam accusantium sapiente perferendis. Labore praesentium esse magni
        reiciendis eum laudantium sapiente quidem nobis ipsam reprehenderit
        debitis cumque dicta, autem eaque illo officia ea modi consectetur. Esse
        eum, minus soluta veritatis cumque commodi culpa ratione tenetur
        quisquam debitis nisi, aperiam corrupti officia.
      </Typography>

      <Typography
        sx={{
          borderLeft: (theme) => `2px solid ${theme.palette.divider}`,
          pl: 2,
        }}
      >
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus
        aliquid unde sint nulla sapiente. Rem consequatur deserunt repudiandae
        aliquam corrupti sit dolore sequi sed eaque voluptatum quia, ea natus
        blanditiis amet nam! Natus?
      </Typography>
    </Box>
  );
};
