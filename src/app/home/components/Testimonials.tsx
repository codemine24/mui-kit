"use client";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

// Single left-to-right animation
const slide = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

interface Testimonial {
  username: string;
  handle: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    username: "Sarah Johnson",
    handle: "@sarahj_dev",
    review: "MUI Kit is a game-changer! The components are so easy to use and look amazing.",
  },
  {
    username: "Mike Chen",
    handle: "@mikechen_ui",
    review: "I’m blown away by MUI Kit’s animations. Building interfaces has never been this fun!",
  },
  {
    username: "Emily Davis",
    handle: "@emilyd_codes",
    review: "The best UI library I’ve used. MUI Kit saves me so much time! 🚀",
  },
  {
    username: "Alex Turner",
    handle: "@alexturner_dev",
    review: "MUI Kit’s responsive design is top-notch. My apps look great on every device!",
  },
  {
    username: "Priya Sharma",
    handle: "@priya_sharma",
    review: "Loving the customization options in MUI Kit. It’s perfect for my projects! 💖",
  },
  {
    username: "James Carter",
    handle: "@jamesc_dev",
    review: "Have you tried MUI Kit yet? It’s packed with awesome features. Highly recommend!",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard: React.FC<Testimonial> = ({ username, handle, review }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        minHeight: 120,
        width: { xs: 200, md: 250 },
        backdropFilter: "blur(8px)",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(30,30,30,0.9)"
            : "rgba(255,255,255,0.1)",
        border: `.5px solid ${
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)"
        }`,
        color: theme.palette.mode === "dark" ? "white" : "text.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="body2" color="text.secondary">
          {handle}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {review}
        </Typography>
      </Box>
      <Typography variant="subtitle2" fontWeight={600} sx={{ mt: 2 }}>
        {username}
      </Typography>
    </Paper>
  );
};

export const Testimonials = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        bgcolor: "background.default",
        width: "100%",
      }}
    >
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Loved by thousands of developers
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        Here&apos;s what some of our users have to say about MUI Kit.
      </Typography>

      {/* Testimonial Rows */}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          overflow: "hidden",
        }}
      >
        {/* Top Row */}
        <Box sx={{ width: "100%", overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              animation: `${slide} 30s linear infinite`,
              width: "max-content",
            }}
          >
            {duplicatedTestimonials.map((t, i) => (
              <TestimonialCard key={`top-${i}`} {...t} />
            ))}
          </Box>
        </Box>

        {/* Bottom Row */}
        <Box sx={{ width: "100%", overflow: "hidden", display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: "row-reverse",
              animation: `${slide} 30s linear infinite`,
              width: "max-content",
            }}
          >
            {duplicatedTestimonials.map((t, i) => (
              <TestimonialCard key={`bottom-${i}`} {...t} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
