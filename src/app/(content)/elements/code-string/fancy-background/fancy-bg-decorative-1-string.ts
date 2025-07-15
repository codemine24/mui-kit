export const FancyBgDecorative1String = `import BoltIcon from "@mui/icons-material/Bolt";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, keyframes, Stack, Typography } from "@mui/material";
export const FancyBgDecorativePreview = () => {
  return (
    <Box
      sx={{
        minHeight: "400px",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />
      <YourComponent />
    </Box>
  );
};

const YourComponent = () => {
  const pulse = keyframes\`
 0% {
    opacity: 0.7;
    transform: scale(1);
  }
  75%, 100% {
    opacity: 0;
    transform: scale(2);
  }
\`;
  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <Stack
        component="a"
        href="#"
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          bgcolor: "#F7F7FE",
          width: "fit-content",
          px: "10px",
          py: "5px",
          borderRadius: "50px",
          mx: "auto",
          mb: "25px",
          boxShadow: "0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a",
          textDecoration: "none",
        }}
      >
        <Box
          component="span"
          sx={{
            width: ".55rem",
            height: ".55rem",
            borderRadius: "50%",
            backgroundColor: "#00d492",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "green",
              opacity: 0.7,
              animation: \`\${pulse} 1.5s infinite ease-out\`,
            },
          }}
        />
        <Typography
          component="span"
          sx={{ color: "#101828", fontSize: "14px", fontWeight: "600" }}
        >
          Lorem ipsum
        </Typography>
        <BoltIcon sx={{ color: "#FF6900", fontSize: "18px" }} />
        <Typography
          component="span"
          sx={{ color: "#101828", fontSize: "14px", fontWeight: "600" }}
        >
          Read More
        </Typography>
      </Stack>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          color: "#101828",
          fontSize: "36px",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Elegant Design
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontSize: "30px",
          fontWeight: 700,
          textAlign: "center",
          backgroundImage:
            "linear-gradient(to right, #171717, #64748b, #737373)",
          backgroundSize: "200% auto",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          lineHeight: "1.25",
          transition: "all 300ms ease",
          mb: "25px",
        }}
      >
        Elevate Smart Branding
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{
          color: "#4a5565",
          fontSize: "16px",
          textAlign: "center",
          width: { xs: "100%", sm: "65%" },
          m: "auto",
          mb: "25px",
        }}
      >
        Mui kit is a set of beautifully-designed, accessible components and a
        code designed on top of material UI. Works with your favorite frameworks
        and AI models.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button
          sx={{
            color: "#101828",
            fontSize: "14px",
            fontWeight: 600,
            bgcolor: "#fff",
            p: "10px",
            borderRadius: "10px",
            boxShadow: "0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a",
            border: "0.01rem solid #99999945",
            transition: "all 0.4s",
            "&:hover": {
              border: "0.01rem solid #999999cc",
            },
          }}
        >
          <ShoppingCartIcon
            sx={{
              color: "#7F22FE",
              fontSize: "30px",
              p: "5px",
              mr: "10px",
              bgcolor: "#EDE9FE",
              borderRadius: "10px",
            }}
          />
          Add to Cart
        </Button>
        <Button
          sx={{
            color: "#101828",
            fontSize: "14px",
            fontWeight: 600,
            bgcolor: "#fff",
            p: "10px",
            borderRadius: "10px",
            boxShadow: "0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a",
            border: "0.01rem solid #99999945",
            transition: "all 0.4s",
            "&:hover": {
              border: "0.01rem solid #999999cc",
            },
          }}
        >
          <RemoveRedEyeTwoToneIcon
            sx={{
              color: "#E60076",
              fontSize: "30px",
              p: "5px",
              mr: "10px",
              bgcolor: "#FCE7F3",
              borderRadius: "10px",
            }}
          />
          View Details
        </Button>
      </Box>
    </Box>
  );
};
`;
