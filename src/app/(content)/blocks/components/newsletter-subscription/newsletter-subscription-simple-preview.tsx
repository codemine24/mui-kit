import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { useState } from "react";

const NewsletterSubscriptionSimplePreview = () => {
  const [email, setEmail] = useState("");



  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        bgcolor: "background.paper", // slate-900
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          px: 2,
        }}
      >
        <Chip
          label="Newsletter"
          sx={{
            mb: 2,
            bgcolor: "#1e293b", // slate-800
            color: "text.primary", // slate-200
            fontWeight: 600,
            fontSize: 16,
            borderRadius: 2,
            px: 2,
            py: 0.5,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "text.primary",
            fontSize: { xs: 28, md: 36 },
          }}
        >
          Don&apos;t Miss Out
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary", // slate-300
            mb: 4,
            fontSize: { xs: 16, md: 18 },
          }}
        >
          Subscribe to our newsletter and be the first to know about new features, updates, and exclusive content.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <TextField
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            sx={{
              bgcolor: "background.paper",
              borderRadius: 1,
              input: {
                color: "text.primary",
                fontWeight: 500,
              },
            }}
            InputProps={{
              sx: {
                height: 48,
                bgcolor: "background.paper",
                borderRadius: 1,
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              height: 48,
              borderRadius: 1,
              px: 4,
              minWidth: 170,
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px 0 rgba(59,130,246,0.15)",
              transition: "background 0.3s, box-shadow 0.3s",
              '&:hover': {
                bgcolor: "linear-gradient(90deg, #818cf8 0%, #60a5fa 100%)",
                boxShadow: "0 6px 24px 0 rgba(59,130,246,0.22)",
              },
            }}
            disabled={!email}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsletterSubscriptionSimplePreview; 