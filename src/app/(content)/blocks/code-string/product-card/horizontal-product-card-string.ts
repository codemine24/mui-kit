export const horizontalProductCardString = `
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export const HorizontalProductCard = () => {
  const product = {
    name: "Gaming Mechanical Keyboard",
    image:
      "https://plus.unsplash.com/premium_photo-1680124608003-b14fe079b955?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 129.99,
  };

  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 500,
        borderRadius: 3,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 160, objectFit: "cover" }}
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
           $ {product.price.toFixed(2)}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small" color="primary">
            Buy Now
          </Button>
          <Button variant="outlined" size="small" color="primary">
            Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

`;