"use client";

import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export const GlassProductCard = () => {
const product = {
    name: "Smart Watch",
    description: "Experience luxury and innovation with this premium Smart Watch.",
    price: 149.99,
    image:
        "https://images.unsplash.com/photo-1686112594109-39e20358ff2b?q=80&w=655&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Glass overlay */}
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backdropFilter: "blur(5px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0)",
          color: "white",
          p: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="h6" >
            {product.description}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: 4 }}>
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};
