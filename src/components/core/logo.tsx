import { Box, Chip, Typography } from "@mui/material";
import Link from "next/link";

export const Logo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component={Link}
        href="/"
        sx={{
          mr: 2,
          flexGrow: 1,
          fontWeight: 700,
          color: "inherit",
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
      <Chip
        label="Beta"
        size="small"
        sx={{
          position: "absolute",
          top: -2,
          right: -15  ,
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
