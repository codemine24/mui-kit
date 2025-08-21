export const discountProductCardString =`
"use client";

import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export const DiscountProductCard = () => {
  const product = {
    name: "Noise Cancelling Headphones",
    price: 249.99,
    oldPrice: 349.99,
    discount: "30% OFF",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <Card
      sx={{
        position: "relative",
        width: 350,
        height: 450,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: \`url(\${product.image})\`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />

      {/* Discount badge */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: "rgba(255,0,0,0.9)",
          color: "white",
          px: 1.5,
          py: 0.5,
          borderRadius: "12px",
          fontWeight: "bold",
          fontSize: "0.85rem",
        }}
      >
        {product.discount}
      </Box>

      {/* Bottom details */}
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          color: "white",
          p: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textDecoration: "line-through",
            opacity: 0.7,
          }}
        >
          $ {product.oldPrice.toFixed(2)}
        </Typography>
        <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
          $ {product.price.toFixed(2)}
        </Typography>
        <Button variant="contained" sx={{ borderRadius: 20, color:'whitesmoke' }}>
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};


`