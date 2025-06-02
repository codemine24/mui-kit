export const featureWithCardString = `import {
  Box,
  Button,
  Card,
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
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
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
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
    isFeatured: false,
  },
];

export const FeatureWithCardPreview = () => {
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

      <Grid container spacing={3} sx={{ width: "100%", maxWidth: "1140px" }}>
        {cardData.map((card) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={card.id}
            position={"relative"}
          >
            {card?.isFeatured && (
              <Chip
                label="☆ Featured"
                color="primary"
                size="small"
                sx={{ position: "absolute", top: 6, right: 6, borderRadius: 0 }}
              />
            )}
            <Card
              sx={{
                height: "100%",
                border: card.isFeatured ? "2px solid" : "1px solid",
                borderColor: card.isFeatured ? "primary.main" : "divider",
                boxShadow: card.isFeatured ? 4 : 1,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.img}
                alt={card.title}
              />
              <CardContent>
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
              <Box sx={{ px: 2, pb: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  href={card.url}
                  fullWidth
                >
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};`;
