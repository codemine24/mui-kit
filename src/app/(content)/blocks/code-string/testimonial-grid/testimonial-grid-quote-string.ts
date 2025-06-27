export const testimonialGridQuoteString = `import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, Box, Stack, Typography } from "@mui/material";

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
];

const StarRating = ({ rating }: { rating: number }) => (
  <Box sx={{ display: "flex" }}>
    {Array.from({ length: rating }, (_, i) => (
      <StarIcon key={i} sx={{ color: "#FFC107" }} />
    ))}
  </Box>
);

export const TestimonialGridQuotePreview = () => {
  const testimonial = testimonials[0];

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        background: (theme) =>
          theme.palette.mode === "light"
            ? \`linear-gradient(135deg, \${theme.palette.background.paper} 0%, #E3F2FD 100%)\`
            : \`linear-gradient(135deg, \${theme.palette.background.paper} 0%, \${theme.palette.grey[800]} 100%)\`,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <FormatQuoteIcon sx={{ fontSize: 48, color: "primary.main", mb: 3 }} />
        <Typography
          component="blockquote"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            fontWeight: 500,
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          {testimonial.content}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={testimonial.avatar}
            alt={testimonial.name}
            sx={{ width: 64, height: 64 }}
          />
          <Box sx={{ textAlign: "left" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "1.125rem" }}>
              {testimonial.name}
            </Typography>
            <Typography>
              {testimonial.role} at {testimonial.company}
            </Typography>
            <StarRating rating={testimonial.rating} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};`; 