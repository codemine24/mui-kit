export const featureCustomIconString = `import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const cardData = [
  {
    id: 1,
    icon: "solar:stop-circle-linear",
    subtitle: "lorem 1",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
  },
  {
    id: 2,
    icon: "fluent:arrow-wrap-20-regular",
    subtitle: "lorem 2",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
  },
  {
    id: 3,
    icon: "solar:user-linear",
    subtitle: "lorem 3",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
  },
  {
    id: 4,
    icon: "octicon:typography-24",
    subtitle: "lorem 4",
    title: "lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    url: "/",
  },
];

export const FeatureCustomIconPreview = () => {
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
          color: "text.secondary",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Features & Benefits
      </Typography>
      <Typography
        sx={{
          color: "text.primary",
          fontFamily: "serif",
          textAlign: "center",
          fontWeight: 500,
          fontSize: { xs: 32, md: 44, lg: 52 },
          lineHeight: 1.5,
        }}
      >
        Power at your fingertips!
      </Typography>

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
            size={{ xs: 12, sm: 6, md: 6 }}
            key={card.id}
            position={"relative"}
          >
            <Card
              sx={{
                maxWidth: 600,
                height: { xs: "auto", md: 150 },
                display: "flex",
                gap: 2,
                alignItems: { xs: "start", md: "center" },
                flexDirection: { xs: "column", md: "row" },
                p: 1,
                boxShadow: 1,
              }}
            >
              <Icon
                icon={card.icon}
                width={80}
                height={80}
                style={{
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
};`;
