import { Avatar, Box, Card, CardContent, Chip, Grid, Stack, Typography, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "This product has completely transformed how we handle our daily operations. The team's support is exceptional, and the results speak for themselves.",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "InnovateCorp",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content:
      "Outstanding quality and attention to detail. We've seen a 40% increase in productivity since implementing this solution.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "GrowthLab",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "The user experience is intuitive and the features are exactly what we needed. Highly recommend to any growing business.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <Box sx={{ display: "flex" }}>
    {Array.from({ length: rating }, (_, i) => (
      <StarIcon key={i} sx={{ color: "#FFC107" }} />
    ))}
  </Box>
);

export const TestimonialGridColumnPreview = () => (
  <Box component="section" sx={{ py: 4 }}>
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Chip
            label="Customer Success"
            variant="outlined"
            sx={{
              mb: 2,
            //   borderColor: "grey.600",
            //   color: "common.white",
              "& .MuiChip-label": {
                // color: "common.white",
              },
            }}
          />
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.875rem", md: "2.25rem" },
              fontWeight: "bold",
              mb: 3,
            //   color: "common.white",
            }}
          >
            Real Stories from Real Customers
          </Typography>
          <Typography sx={{ fontSize: "1.125rem", lineHeight: 1.625, mb: 4 }}>
            Our customers are at the heart of everything we do. Their success stories inspire us to continue innovating
            and delivering exceptional value.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography component="p" sx={{ fontSize: "1.875rem", fontWeight: "bold", color: "indigo.400" }}>
                500+
              </Typography>
              <Typography component="p" sx={{ fontSize: "0.875rem" }}>
                Happy Customers
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography component="p" sx={{ fontSize: "1.875rem", fontWeight: "bold", color: "indigo.400" }}>
                4.9/5
              </Typography>
              <Typography component="p" sx={{ fontSize: "0.875rem" }}>
                Average Rating
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography component="p" sx={{ fontSize: "1.875rem", fontWeight: "bold", color: "indigo.400" }}>
                99%
              </Typography>
              <Typography component="p" sx={{ fontSize: "0.875rem" }}>
                Satisfaction Rate
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card
                key={testimonial.id}
                sx={{
                
                  "&:hover": { 
                  
                    boxShadow: (theme) => theme.shadows[8]
                  },
                  transition: (theme) => theme.transitions.create("background-color"),
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name}>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                        <Box>
                        <Typography component="p" sx={{ fontWeight: "semibold" }}>
                        {testimonial.name}
                      </Typography>
                      <Typography component="p" sx={{ fontSize: "0.875rem" }}>
                        {testimonial.company}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <StarRating rating={testimonial.rating} />
                    </Box>
                  </Box>
                  <Typography sx={{ lineHeight: 1.625 }}>"{testimonial.content}"</Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
