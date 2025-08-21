"use client";

import React from "react";
import { Card, CardContent, Typography, Box, Button, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const CoverBottomProductCard = () => {
  const product = {
    name: "Wireless Gaming Mouse",
    price: 59.99,
    oldPrice: 79.99,
    discount: "25% OFF", // optional, can be null
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1627745214193-2bcefc681524?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <Card
      sx={{
        width: 400,
        height: 470,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Cover image (80% height) */}
      <Box
        sx={{
          flex: "0 0 67%",
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Product details (20% height) */}
      <CardContent sx={{ flex: "0 0 20%", p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            {product.oldPrice && (
              <Typography
                variant="body2"
                sx={{ textDecoration: "line-through", opacity: 0.6 }}
              >
                ${product.oldPrice.toFixed(2)}
              </Typography>
            )}
            <Typography variant="h6" color="primary">
              ${product.price.toFixed(2)}
            </Typography>
          </Box>

          {/* Rating */}
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <StarIcon sx={{ color: "#fbc02d", fontSize: 20 }} />
            <Typography variant="body2" fontWeight="medium">
              {product.rating}
            </Typography>
          </Stack>
        </Stack>

        {/* Discount label (optional) */}
        {product.discount && (
          <Typography
            variant="caption"
            sx={{
              mt: 1,
              display: "inline-block",
              px: 1,
              py: 0.3,
              backgroundColor: "rgba(255,0,0,0.1)",
              color: "red",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            {product.discount}
          </Typography>
          
        )}
         <Button variant="contained" sx={{ borderRadius: 20, color:'whitesmoke', marginLeft: 5, }}>
                  Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};
