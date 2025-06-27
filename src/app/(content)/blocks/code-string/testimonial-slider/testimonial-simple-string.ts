export const testimonialSimpleString = `import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "Clean, intuitive, and exactly what we needed. The simplicity is its strength.",
  },
  {
    id: 2,
    name: "David Kim",
    role: "Creative Director",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content:
      "Elegant solution that gets out of the way and lets us focus on what matters.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "UX Lead",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "Perfect balance of functionality and aesthetics. Minimalism done right.",
  },
  {
    id: 4,
    name: "Alex Johnson",
    role: "Product Manager",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content: "The attention to detail is remarkable. A joy to use every day.",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Creative Director",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "This is the benchmark for quality in its class. Highly recommended.",
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Operations Manager",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content:
      "A seamless experience from start to finish. Truly impressive work.",
  },
];

export const TestimonialSimplePreview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * cardsPerPage;
    const end = start + cardsPerPage;
    return testimonials.slice(start, end);
  };

  return (
    <Box sx={{ bgcolor: "background.default", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: "light", mb: 2 }}>
            Client Stories
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: "md", mx: "auto" }}
          >
            Simple testimonials from people who value clean design and
            thoughtful experiences.
          </Typography>
        </Box>

        <Box
          sx={{
            minHeight: 250,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {getCurrentTestimonials().map((testimonial) => (
            <Card
              key={testimonial.id}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: (theme) =>
                  theme.palette.mode === "light" ? "grey.200" : "grey.800",
                p: 2,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="body1"
                  component="blockquote"
                  sx={{ mb: 2, fontStyle: "italic" }}
                >
                  &quot;{testimonial.content}&quot;
                </Typography>
                <Rating value={testimonial.rating} readOnly sx={{ my: 2 }} />
                <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 48, height: 48, mr: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "medium" }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
          }}
        >
          <IconButton
            onClick={handlePrev}
            size="small"
            sx={{ color: "text.secondary" }}
          >
            <ChevronLeft />
          </IconButton>

          <Box sx={{ display: "flex", gap: 1, mx: 2 }}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentPage(index)}
                sx={{
                  width: index === currentPage ? 24 : 8,
                  height: 8,
                  borderRadius: "4px",
                  bgcolor: index === currentPage ? "primary.main" : "grey.300",
                  cursor: "pointer",
                  transition: "width 0.3s",
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={handleNext}
            size="small"
            sx={{ color: "text.secondary" }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};`; 