import { Box, Button, Container, Divider, Typography } from "@mui/material";

interface FeaturedProductProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const featuredLaptop = {
  title: "Minimalist Laptop Stand",
  description:
    "Premium aluminum construction meets ergonomic design. Perfect for the modern professional who values both form and function in their workspace setup.",
  price: "$89",
  imageUrl:
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=904&hei=840&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWNC9UNzNvY2N5NXJTTDQ2YkVYYmVXakJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk",
};

export const FeaturedProductMinimalAnimationPreview = () => {
  return (
    <Box sx={{ background: "#fff", py: 5 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3.5rem" },
              letterSpacing: "-0.025em",
              color: "#1a2440",
            }}
          >
            Featured Product
          </Typography>
          <Divider
            sx={{
              width: 80,
              height: 4,
              bgcolor: "#1a2440",
              mx: "auto",
              mb: 2,
              borderRadius: 2,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.6,
              fontWeight: 400,
              color: "#6b7280",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
            }}
          >
            Discover our premium laptop stand, designed for the modern workspace
            with attention to detail and quality craftsmanship.
          </Typography>
        </Box>
        <FeaturedProductMinimalAnimation
          title={featuredLaptop.title}
          description={featuredLaptop.description}
          price={featuredLaptop.price}
          imageUrl={featuredLaptop.imageUrl}
        />
      </Container>
    </Box>
  );
};

const FeaturedProductMinimalAnimation = ({
  title,
  description,
  price,
  imageUrl,
}: FeaturedProductProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        maxWidth: 1100,
        mx: "auto",
        borderRadius: 4,
        boxShadow: "0 8px 32px rgba(16,30,54,0.10)",
        background: "#fff",
        overflow: "hidden",
        minHeight: { md: 400 },
      }}
    >
      <Box
        sx={{
          background: "#fff",
          borderRadius: 3,
          width: "100%",
          maxWidth: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            aspectRatio: "1.2/1",
            borderRadius: 2,
            overflow: "hidden",
            ml: 2,
            border: "4px solid #fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "box-shadow 0.3s",
            "&:hover img": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Box
            component={"img"}
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 8,
              transition:
                "transform 0.7s cubic-bezier(.4,2,.6,1), box-shadow 0.5s cubic-bezier(.4,2,.6,1)",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1.2,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "#1a2440",
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#6b7280",
            lineHeight: 1.7,
            mb: 3,
            maxWidth: 480,
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
            mt: 2,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              component="span"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                color: "#1a2440",
              }}
            >
              {price}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                fontSize: { xs: "0.75rem", md: "0.95rem" },
                color: "#6b7280",
              }}
            >
              Starting price
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.125rem",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
              background: "#1a2440",
              transition:
                "transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)",
              "&:hover": {
                background: "#111827",
                transform: "scale(1.04)",
                boxShadow: "0 8px 24px 0 rgba(16,30,54,0.18)",
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
