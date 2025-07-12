"use client";
import { Box, Divider, Typography } from "@mui/material";

export const SubHeroSingleColPreview = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url("https://img.freepik.com/premium-photo/fluid-organic-white-color-abstract-background-unique-designs_851755-381525.jpg?semt=ais_hybrid&w=740")`,
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `linear-gradient(to right, rgba(40, 10, 60, 0.5), rgba(80, 20, 100, 0.3))`,
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          zIndex: 40,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "#FFAB08",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Optional subtitle
        </Typography>
        <Typography
          sx={{
            color: "common.black",
            fontFamily: "serif",
            textAlign: "center",
            fontWeight: 500,
            fontSize: { xs: 32, md: 44, lg: 52 },

            lineHeight: 1,
          }}
        >
          Subhero Title
        </Typography>
        <Divider
          sx={{
            borderColor: "#FFAB08",
            width: "100px",
            borderBottomWidth: "5px",
          }}
        />
        <Typography
          sx={{
            color: "common.black",
            textAlign: "center",
            fontWeight: 400,
            fontSize: { xs: 16, md: 16 },
            px: { xs: 0, md: "15%" },
            lineHeight: 1.5,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
          maiores error ipsum !
        </Typography>
      </Box>
    </Box>
  );
};
