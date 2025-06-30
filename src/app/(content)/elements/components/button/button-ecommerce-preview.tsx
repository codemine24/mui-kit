"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import Clear from "@mui/icons-material/Clear";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const MIN = 1;
const MAX = 99;

export const ButtonEcommercePreview = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > MIN) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < MAX) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap" alignItems="center">
        {/* Quantity */}
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 0,
            border: "1px solid",
            borderColor: "primary.main",
            overflow: "hidden",
            width: "150px",
            height: "50px"
          }}>
          <IconButton
            onClick={handleDecrease}
            disabled={quantity <= MIN}
            sx={{
              borderRadius: 0,
              padding: "10px",
              color: "primary.main",
              "&.Mui-disabled": {
                color: "#bdbdbd"
              }
            }}>
            <RemoveIcon fontSize="small" />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              borderLeft: "1px solid",
              borderRight: "1px solid",
              borderColor: "primary.main",
              height: "100%"
            }}>
            <Typography variant="body1" fontWeight="medium">
              {quantity}
            </Typography>
          </Box>

          <IconButton
            onClick={handleIncrease}
            disabled={quantity >= MAX}
            sx={{
              borderRadius: 0,
              padding: "10px",
              color: "primary.main",
              "&.Mui-disabled": {
                color: "#bdbdbd"
              }
            }}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Paper>

        {/* Remove */}
        <Button variant="text" color="error" startIcon={<Clear fontSize="large" />}>
          Remove
        </Button>
        {/* Add To Favorite */}
        <Button variant="text" color="primary" startIcon={<Favorite fontSize="large" />}>
          Add To Favorite
        </Button>
        {/* Continue Shopping */}
        <Button
          variant="text"
          color="primary"
          endIcon={<ArrowRightAlt fontSize="large" />}
          sx={{ textDecoration: "underline" }}>
          Continue Shopping
        </Button>
        {/* Add to Cart */}
        <Button variant="contained" color="primary" startIcon={<ShoppingCart fontSize="large" />}>
          Add to Cart
        </Button>
        {/* Buy Now */}
        <Button variant="contained" color="primary" startIcon={<ShoppingCart fontSize="large" />}>
          Buy Now
        </Button>
        {/* Proceed to Checkout */}
        <Button variant="contained" color="primary">
          Proceed to Checkout
        </Button>
        {/* Apply code */}
        <Button variant="contained" color="primary">
          Apply code
        </Button>
      </Stack>
    </Box>
  );
};
