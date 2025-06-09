import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

const cardData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    title: "Description 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: 5,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: 10,
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1673276864867-d0e27d34e5f7",
    title: "Demo description 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: 15,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: 12,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: 18,
  },
  {
    id: 6,
    img: "https://plus.unsplash.com/premium_photo-1673276864867-d0e27d34e5f7",
    title: "This is demo title 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: 21,
  },
];

export const PricingMenuImgPreview = () => {
  return (
    <Box
      sx={{
        zIndex: 40,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        py: { xs: 2, lg: 4 },
        px: { xs: 2, lg: 4 },
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Subtitle
      </Typography>
      <Typography
        sx={{
          color: "text.primary",
          fontFamily: "serif",
          textAlign: "center",
          fontWeight: 500,
          fontSize: { xs: 32, md: 44, lg: 52 },

          lineHeight: 1,
        }}
      >
        Our Pricing
      </Typography>
      <Divider
        sx={{
          borderColor: "primary.main",
          width: "130px",
          borderBottomWidth: "2.5px",
        }}
      />
      <Typography
        sx={{
          color: "#929292",
          textAlign: "center",
          fontWeight: 400,
          fontSize: { xs: 16, md: 16 },
          px: { xs: 0, md: "15%" },
          lineHeight: 1.5,
          mb: 3,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
        maiores error aliquid ipsum !
      </Typography>

      <Grid container spacing={3}>
        {cardData.map((card) => {
          return (
            <Grid size={{ xs: 12, md: 6 }} key={card.id}>
              <PricingCard
                title={card.title}
                description={card.description}
                price={card.price}
                img={card.img}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const PricingCard = ({
  title,
  description,
  price,
  img,
}: {
  title: string;
  description: string;
  price: number;
  img: string;
}) => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          objectFit: "cover", 
        }}
      />
      <Box>
        <Stack
          spacing={3}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography sx={{ fontWeight: 500 }}>{title}</Typography>

          <Box
            sx={{
              flexGrow: 1,
              borderBottom: "1px dotted #bdbdbd",
              height: "1px",
            }}
          />
          <Typography>${price}</Typography>
        </Stack>
        <Typography sx={{ color: "#929292" }}>{description}</Typography>
      </Box>
    </Stack>
  );
};
