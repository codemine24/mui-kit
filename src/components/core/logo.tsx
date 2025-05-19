import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <Box
        component={Link}
        href="/"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <Image src="/images/logo.png" alt="logo" width={24} height={24} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            flexGrow: 1,
            fontWeight: 700,
            color: "text.primary",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box component="span" sx={{ color: "primary.main", mr: 1 }}>
            MUI
          </Box>{" "}
          KIT
        </Typography>
      </Box>
      <Chip
        label="v1.0"
        size="small"
        sx={{
          position: "absolute",
          top: -2,
          right: -15,
          fontSize: "0.5rem",
          fontWeight: "bold",
          height: "16px",
          "& .MuiChip-label": {
            padding: "0 4px",
          },
        }}
      />
    </Box>
  );
};
