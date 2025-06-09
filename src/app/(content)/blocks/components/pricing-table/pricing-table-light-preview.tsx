import { Box, Divider, Grid, Typography } from "@mui/material";

const cardData = [
  {
    id: 1,
    isFeatured: false,
    url: "/",
    title: "Starter",
    description: "Perfect for small businesses",
    price: 0,
    features: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
  },
  {
    id: 2,
    isFeatured: true,
    url: "/",
    title: "Pro",
    description: "For medium-sized teams",
    price: 15,
    features: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
  },
  {
    id: 3,
    isFeatured: false,
    url: "/",
    title: "Enterprise",
    description: "For large organizations",
    price: 30,
    features: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
  },
];

export const PricingTableLightPreview = () => {
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
          color: "common.black",
          fontFamily: "serif",
          textAlign: "center",
          fontWeight: 500,
          fontSize: { xs: 32, md: 44, lg: 52 },
          lineHeight: 1,
        }}
      >
        Pricing
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
          color: "common.black",
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

      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          maxWidth: "1140px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cardData.map((table) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={table.id}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#f7f7f7",
                color: "common.black",

                borderRadius: 2,
                boxShadow: table.isFeatured ? 3 : 1,
                p: 3,
                display: "flex",
                flexDirection: "column",
                minHeight: table.isFeatured ? 480 : 420,
                textAlign: "center",
              }}
            >
              {table.isFeatured && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor: "primary.main",
                    color: "common.white",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "6px",
                    fontSize: 12,
                    fontWeight: 600,
                    zIndex: 1,
                    boxShadow: 1,
                  }}
                >
                  Popular
                </Box>
              )}
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 22 },
                  textTransform: "uppercase",
                }}
                fontWeight={600}
                gutterBottom
                color={table.isFeatured ? "primary.main" : "common.black"}
              >
                {table.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {table.description}
              </Typography>
              <Typography
                fontWeight={700}
                sx={{
                  fontSize: { xs: 34, md: 42 },
                  mt: 2,
                  mb: 2,
                  color: "primary.main",
                }}
              >
                ${table.price}
              </Typography>

              <Box sx={{ flexGrow: 1, mt: 1 }}>
                {table.features.map((feature, index) => (
                  <Typography
                    variant="body2"
                    key={index}
                    sx={{
                      py: 1,
                      borderBottom:
                        index !== table.features.length - 1
                          ? "1px solid #d4d4d4"
                          : "none",
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
              <Box sx={{ mt: 3 }}>
                <Box
                  component="a"
                  href={table.url}
                  sx={{
                    display: "block",
                    textAlign: "center",
                    py: 1,
                    borderRadius: 1,
                    backgroundColor: table.isFeatured
                      ? "primary.main"
                      : "transparent",
                    color: table.isFeatured ? "common.white" : "primary.main",
                    border: "1px solid #d4d4d4",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: table.isFeatured
                        ? "secondary.main"
                        : "primary.main",
                      color: "common.white",
                    },
                  }}
                >
                  Choose Plan
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
