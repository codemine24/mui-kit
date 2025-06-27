import {
  ChevronLeft,
  ChevronRight,
  FormatQuote,
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "This product has completely transformed how we handle our daily operations. The team's support is exceptional, and the results speak for themselves.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateCorp",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content:
      "Outstanding quality and attention to detail. We've seen a 40% increase in productivity since implementing this solution.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "GrowthLab",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "The user experience is intuitive and the features are exactly what we needed. Highly recommend to any growing business.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "StartupXYZ",
    avatar: "/images/avatar-2.png",
    rating: 5,
    content:
      "Incredible platform that has scaled with our business. The automation features alone have saved us countless hours.",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Operations Director",
    company: "ScaleUp Solutions",
    avatar: "/images/avatar.png",
    rating: 5,
    content:
      "The analytics and reporting capabilities are game-changing. We can now make data-driven decisions with confidence.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <Box sx={{ display: "flex" }}>
    {Array.from({ length: rating }, (_, i) => (
      <StarIcon key={i} sx={{ color: "#FFC107" }} />
    ))}
  </Box>
);

export const TestimonialSliderAdvancedPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0)
      return { transform: "translateX(-50%) scale(1)", zIndex: 20, opacity: 1 };
    if (diff === 1 || diff === -(testimonials.length - 1))
      return {
        transform: "translateX(40%) scale(0.8)",
        zIndex: 10,
        opacity: 0.5,
      };
    if (diff === -1 || diff === testimonials.length - 1)
      return {
        transform: "translateX(-140%) scale(0.8)",
        zIndex: 10,
        opacity: 0.5,
      };
    return { transform: "translateX(100%) scale(0.5)", zIndex: 0, opacity: 0 };
  };

  return (
    <Box
      sx={{
        py: 10,
        background: "background.paper",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Customer Stories"
            variant="outlined"
            sx={{
              mb: 2,
              bgcolor: "rgba(255, 255, 255, 0.1)",

              borderColor: "primary.main",
              "& .MuiChip-label": {
                color: "text.primary",
              },
            }}
          />
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem" },
              fontWeight: "bold",
              color: "text.primary",
              mb: 3,
            }}
          >
            Transforming Businesses Worldwide
          </Typography>
          <Typography
            sx={{
              fontSize: "1.25rem",
              color: "text.secondary",
              maxWidth: "48rem",
              mx: "auto",
            }}
          >
            Discover how industry leaders are achieving remarkable results with
            our platform
          </Typography>
        </Box>

        <Box sx={{ position: "relative", height: "24rem", mb: 2 }}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={testimonial.id}
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: { xs: "90%", md: "65%" },
                transition: "all 0.7s ease-in-out",
                ...getSlidePosition(index),
              }}
            >
              <Card
                sx={{
                  height: "80%",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "text.primary",
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <FormatQuote
                      sx={{ width: 48, height: 48, color: "#a855f7", mb: 1 }}
                    />
                    <Typography
                      sx={{ fontSize: "1.125rem", lineHeight: 1.75, mb: 1 }}
                    >
                      {testimonial.content}
                    </Typography>
                    <StarRating rating={testimonial.rating} />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        border: "2px solid #a855f7",
                      }}
                    >
                      <Box
                        component="img"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{ fontWeight: "semibold", fontSize: "1.125rem" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography sx={{ color: "#a855f7" }}>
                        {testimonial.role}
                      </Typography>
                      <Typography sx={{ color: "grey.400" }}>
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            onClick={prevSlide}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "text.primary",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <Stack direction="row" spacing={1}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: index === currentIndex ? 32 : 12,
                  height: 12,
                  borderRadius: "6px",
                  bgcolor:
                    index === currentIndex ? "text.primary" : "text.secondary",
                  cursor: "pointer",

                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor:
                      index === currentIndex
                        ? "text.primary"
                        : "text.secondary",
                  },
                }}
              />
            ))}
          </Stack>

          <IconButton
            onClick={() => setIsPlaying(!isPlaying)}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "text.primary",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>

          <IconButton
            onClick={nextSlide}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "text.primary",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};
