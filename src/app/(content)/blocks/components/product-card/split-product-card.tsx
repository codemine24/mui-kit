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
        flexDirection: { xs: "column", md: "row" }, // stack on mobile, row on desktop
        width: "100%",
        maxWidth: 900,
        height:{ xs: 'auto', md: 350 },
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        mx: "auto", // center card
      }}
    >
      {/* Left side image */}
      <Box
        sx={{
          flex: { xs: "1 1 auto", md: "1 1 50%" },
          height: { xs: 220, md: "auto" }, // fixed height on mobile
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Right side details */}
      <CardContent
        sx={{
          flex: { xs: "1 1 auto", md: "1 1 50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 2, md: 4 }, // smaller padding on mobile
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          {product.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 20, px: 4, alignSelf: { xs: "center", md: "flex-start" } }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
