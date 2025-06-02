import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const cardData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
    isFeatured: false,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
    isFeatured: true,
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1673276864867-d0e27d34e5f7",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
    isFeatured: false,
  },
];

export const FeatureHorizontalCardPreview = () => {
  return (
    <Box
      sx={{
        zIndex: 40,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Optional Subtitle
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
        Features & Benefits
      </Typography>
      <Divider
        sx={{
          borderColor: "primary.main",
          width: "130px",
          borderBottomWidth: "2px",
          my: { xs: 1, lg: 2 },
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
          mb: { xs: 2, md: 4 },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
        maiores error aliquid ipsum!
      </Typography>

      <Grid container spacing={1} sx={{ width: "100%", maxWidth: "1140px" }}>
        {cardData.map((card) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
            key={card.id}
            position={"relative"}
          >
            {card?.isFeatured && (
              <Chip
                label="☆ Featured"
                color="primary"
                size="small"
                sx={{ position: "absolute", top: 6, left: 6, borderRadius: 0 }}
              />
            )}
            <Card
              sx={{
                maxWidth: 600,
                height: { xs: "auto", md: 150 },
                display: "flex",
                gap: 2,
                alignItems: "stretch",
                flexDirection: { xs: "column", md: "row" },
                border: card.isFeatured ? "2px solid" : "1px solid",
                borderColor: card.isFeatured ? "primary.main" : "divider",
                boxShadow: card.isFeatured ? 4 : 1,
              }}
            >
              <CardMedia
                component="img"
                image={card.img}
                alt="Paella dish"
                width={100}
                sx={{
                  width: { xs: "100%", md: 200 },
                  height: { xs: 200, lg: "auto" },
                  objectFit: "cover",
                }}
              />

              <Box sx={{ py: 2, px: { xs: 2, md: 0 } }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontWeight={600}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 0, mt: 1 }}>
                  <Button
                    variant="text"
                    color="primary"
                    href={card.url}
                    sx={{
                      background: "none",
                      textDecoration: "none",
                      textTransform: "none",
                      color: "primary.main",
                      fontWeight: 500,
                      fontSize: { xs: 13, md: 15 },
                      m: 0,
                      p: 0,
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
