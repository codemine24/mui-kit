"use client";
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Typography,
  Rating,
  useTheme,
  alpha,
} from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "Minimal Co.",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "Elegant solution that gets out of the way and lets us focus on what matters.",
    role: "Marketing Director",
  },
  {
    id: 2,
    name: "David Kim",
    company: "Studio Pure",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content:
      "Elegant solution that gets out of the way and lets us focus on what matters.",
    role: "Creative Director",
  },
  {
    id: 3,
    name: "Emma Wilson",
    company: "Clean Design",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "Elegant solution that gets out of the way and lets us focus on what matters.",
    role: "Data Scientist",
  },
  {
    id: 4,
    name: "Alex Johnson",
    company: "Simple Labs",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content:
      "Elegant solution that gets out of the way and lets us focus on what matters.",
    role: "Product Manager",
  },
  {
    id: 5,
    name: "Lisa Park",
    company: "Zen Studio",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "Elegant solution that gets out of the way and lets us focus on what matters.",
    role: "Creative Director",
  },
  {
    id: 6,
    name: "Michael Brown",
    company: "White Space",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content:
      "Elegant solution that gets out of the way and lets us focus on what matters.",
    role: "Operations Manager",
  },
];

export const TestimonialJourneyPreview = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 8, lg: 16 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box mb={6}>
              <Typography
                variant="h4"
                fontWeight="light"
                sx={{ letterSpacing: "-0.5px", color: "text.primary" }}
              >
                TESTIMONIALS
              </Typography>
            </Box>
            <Box>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  onClick={() => handleNavigation(index)}
                  elevation={0}
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    p: 2,
                    mb: 1,
                    cursor: "pointer",
                    borderRadius: 1,
                    transition: "all 0.3s",
                    borderLeft: "2px solid",
                    borderColor:
                      index === activeIndex ? "text.primary" : "transparent",
                    background:
                      index === activeIndex
                        ? theme.palette.mode === "light"
                          ? `linear-gradient(to right, ${alpha(
                              theme.palette.primary.main,
                              0.1
                            )}, transparent)`
                          : `linear-gradient(to right, ${alpha(
                              theme.palette.grey[800],
                              0.3
                            )}, transparent)`
                        : "transparent",
                    "&:hover": {
                      bgcolor: alpha(theme.palette.grey[500], 0.08),
                    },
                    display: "flex",
                  }}
                >
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 40,
                      height: 40,
                      mr: 2,
                      filter: "grayscale(100%)",
                    }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      color="text.primary"
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                position: "relative",
                transition:
                  "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning
                  ? "translateY(20px)"
                  : "translateY(0)",
              }}
            >
              <FormatQuote sx={{ fontSize: 48, color: "grey.200", mb: 4 }} />
              <Typography
                component="blockquote"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: "light",
                  lineHeight: 1.6,
                  mb: 4,
                  color: "text.primary",
                }}
              >
                &quot;{activeTestimonial.content}&quot;
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Avatar
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  sx={{ width: 64, height: 64 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="medium"
                    color="text.primary"
                  >
                    {activeTestimonial.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {activeTestimonial.role}
                  </Typography>
                </Box>
              </Box>

              <Rating
                name="read-only"
                value={activeTestimonial.rating}
                readOnly
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
