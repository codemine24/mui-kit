export const fullCoverProductCardString = `
"use client";

import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export const FullCoverProductCard = () => {
  const product = {
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
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
          filter: "brightness(0.7)",
        }}
      />

      {/* Overlay details */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
           $ {product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff4d4d",
            ":hover": { backgroundColor: "#e63939" },
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </Button>
      </CardContent>
    </Card>
  );
};

`;