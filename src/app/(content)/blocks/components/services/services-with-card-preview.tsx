import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
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
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1673276864867-d0e27d34e5f7",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
  },
];

export const ServicesWithCardPreview = () => {
  const defaultShadow = "0px 2px 12px rgba(0, 0, 0, 0.05)";
  const hoverShadow = "0px 8px 24px rgba(0, 0, 0, 0.12)";

  return (
    <Box
      sx={{
        position: "relative",
        background: `url(https://images.unsplash.com/photo-1484589065579-248aad0d8b13) center center / cover no-repeat`,
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: { xs: 2, md: 4 },

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#f7f7f7",
          opacity: 0.95,
          zIndex: -1,
        },
      }}
    >
      <Typography
        sx={{
          color: "#CC9955",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Optional Subtitle
      </Typography>
      <Typography
        sx={{
          color: "common.black",
          fontFamily: "serif",
          textAlign: "center",
          fontWeight: 500,
          fontSize: { xs: 32, md: 44, lg: 52 },
          lineHeight: 1,
        }}
      >
        Our Services
      </Typography>
      <Divider
        sx={{
          borderColor: "#CC9955",
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
            size={{ xs: 12, sm: 6, md: 4 }}
            key={card.id}
            position={"relative"}
          >
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",
                background: "common.white",
                boxShadow: defaultShadow,
                "&:hover": {
                  boxShadow: hoverShadow,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title}
                sx={{
                  objectFit: "cover",
                  objectPosition: "center",
                  height: { xs: 350, lg: 300 },
                }}
              />
              <CardContent sx={{ background: "#fff" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontWeight={600}
                  sx={{ color: "common.black" }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" color="common.black">
                  {card.description}
                </Typography>
              </CardContent>
              <Box sx={{ px: 2, pb: 2, background: "#fff" }}>
                <Button
                  variant="text"
                  href={card.url}
                  sx={{
                    color: "#CC9955",
                    fontWeight: 400,
                    fontSize: "14px",
                    textTransform: "none",
                  }}
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
};
