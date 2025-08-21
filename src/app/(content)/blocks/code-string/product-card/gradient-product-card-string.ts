export const gradientProductCardString =`
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const GradientProductCard = () => {
  const product = {
    name: "Portable Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1587400519568-1fe0329bfb2e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 89.99,
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 4,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.85, mb: 2 }}>
          $ {product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            color: "white",
            ":hover": { backgroundColor: "rgba(255,255,255,0.3)" },
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

`;