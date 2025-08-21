export const productShowCaseCardString = `
"use client";

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Chip,
  Stack,
} from "@mui/material";

export const ProductShowcaseCard = () => {
  const product = {
    name: "Wireless Noise-Cancelling Headphones",
    image:
      "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199.99,
    rating: 4.5,
    badge: "New",
  };

  return (
    <Card
      sx={{
        maxWidth: 320,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "cover",
        }}
      />

      {/* Badge */}
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <Chip
          label={product.badge}
          color="primary"
          sx={{ fontWeight: "bold" }}
        />
      </Stack>

      {/* Product Details */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          $ {product.price.toFixed(2)}
        </Typography>

        {/* Rating */}
        <Rating value={product.rating} precision={0.5} readOnly />
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button variant="contained" color="primary" fullWidth>
          Add to Cart
        </Button>
        <Button variant="outlined" color="primary" fullWidth>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

`;