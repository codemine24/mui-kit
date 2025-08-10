import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        "&::before": {
          content: "''",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "140px",
          background: "transparent",
          backdropFilter: "blur(8px)",
          mask: "radial-gradient(ellipse at center, black 0%, black 20%, transparent 80%)",
          WebkitMask: "radial-gradient(ellipse at center, black 0%, black 20%, transparent 80%)",
          zIndex: -1,
          pointerEvents: "none"
        }
      }}>
      <Box
        component={Link}
        href="/"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          color: "inherit",
          textDecoration: "none",
        }}>
        <Image src="/images/logo.png" alt="logo" width={24} height={24} />
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            flexGrow: 1,
            fontWeight: 700,
            color: "text.primary",
            textDecoration: "none",
            display: "flex",
            alignItems: "center"
          }}>
          <Box component="span" sx={{ color: "primary.main", mr: 1 }}>
            MUI
          </Box>{" "}
          KIT
        </Typography>
      </Box>
      <Chip
        label="Beta"
        size="small"
        sx={{
          position: "absolute",
          top: -2,
          right: -15,
          fontSize: "0.5rem",
          fontWeight: "bold",
          height: "16px",
          "& .MuiChip-label": {
            padding: "0 4px"
          }
        }}
      />
    </Box>
  );
};
