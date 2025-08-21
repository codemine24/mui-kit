export const splitProductCardString = `
"use client";

import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export const SplitProductCard = () => {
  const product = {
    name: "4K Ultra HD Smart TV",
    price: 799.99,
    description:
      "Experience stunning visuals and smart features with our latest 4K Ultra HD Smart TV. Perfect for home entertainment.",
    image:
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <Card
      sx={{
        display: "flex",
        width: 600,
        height: 300,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      }}
    >
      {/* Left side image */}
      <Box
        sx={{
          flex: "1 1 50%",
          backgroundImage: \`url(\${product.image})\`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Right side details */}
      <CardContent
        sx={{
          flex: "1 1 50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          $ {product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          {product.description}
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: 20 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

`;