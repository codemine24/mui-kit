export const buttonAnimatedString = `import { AutoAwesome } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { useState } from "react";

// Keyframes for conic border animation
const rotate = keyframes\`
from {
    transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
  }
  to {
    transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
  }
\`;


export const ButtonAnimatedPreview = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <Box sx={{ p: 4 }}>
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap">
        <Button
          variant="contained"
          sx={{
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
            },
          }}
        >
          Hover me
        </Button>

        <Button
          variant="contained"
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          Hover me
        </Button>

        <Button
          variant="contained"
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(0.9)",
            },
          }}
        >
          Hover me
        </Button>

        <Button
          variant="contained"
          sx={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
            },
          }}
        >
          Hover me
        </Button>

        <Button
          variant="contained"
          sx={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(4px)",
              boxShadow: "0 -6px 12px rgba(0,0,0,0.2)",
            },
          }}
        >
          Hover me
        </Button>

        <Button variant="contained">Click me</Button>

        <Button
          variant="outlined"
          sx={{
            bgcolor: "transparent",
            color: "primary.main",
            border: "1px solid primary.main",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "primary.main",
              color: "white",
            },
          }}
        >
          Hover me
        </Button>

        <Button
          variant="outlined"
          sx={{
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
            transition: "all 0.3s ease",
            "&::after": {
              content: '" "',
              position: "absolute",
              top: 0,
              left: 0,
              width: 0,
              height: "100%",
              backgroundColor: "primary.main",
              zIndex: -1,
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
            "&:hover": {
              color: "#ffffff",
            },
          }}
        >
          Hover me
        </Button>

        <Button
          variant="outlined"
          sx={{
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
            transition: "all 0.3s ease",
            "&::after": {
              content: '" "',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "0",
              backgroundColor: "primary.main",
              zIndex: -1,
              transition: "height 0.3s ease",
            },
            "&:hover::after": {
              height: "100%",
            },
            "&:hover": {
              color: "#ffffff",
            },
          }}
        >
          Hover me
        </Button>

        <Button
          variant="outlined"
          sx={{
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
            transition: "all 0.3s ease",
            "&::after": {
              content: '" "',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "0",
              backgroundColor: "primary.main",
              zIndex: -1,
              transition: "height 0.3s ease",
            },
            "&:hover::after": {
              height: "100%",
            },
            "&:hover": {
              color: "#ffffff",
            },
          }}
        >
          Hover me
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Stack
        direction="row"
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
        alignItems="center"
      >
        {/* Conic gradient border */}
        <Box
          sx={{
            position: "relative",
            width: "150px",
            height: "45px",
            borderRadius: "50px",
            backgroundColor: "#4B2CA9",
            overflow: "hidden",
            "--offset": "1px",
            cursor: "pointer",
            maxWidth: "100%",
            "&:hover .conic-border": {
              animation: \`\${rotate} 2s linear infinite\`,
              opacity: 1,
            },
          }}
        >
          {/* Conic gradient border layer */}
          <Box
            className="conic-border"
            sx={{
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              aspectRatio: "1",
              background:
                "conic-gradient(transparent 270deg, white, transparent)",
              transform: "translate(-50%, -50%) scale(1.4)",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              zIndex: 1,
            }}
          />

          {/* Inner overlay that clips the border */}
          <Box
            sx={{
              content: '""',
              position: "absolute",
              inset: "var(--offset)",
              borderRadius: "inherit",
              backgroundColor: "#6B32FC",
              zIndex: 2,
            }}
          />

          {/* Actual Button */}
          <Button
            fullWidth
            startIcon={<AutoAwesome />}
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              color: "white",
              fontSize: "1rem",
              background: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            Hello
          </Button>
        </Box>

        {/* toggle button */}
        <Box
          onClick={handleToggle}
          sx={{
            position: "relative",
            width: 64,
            height: 32,
            borderRadius: "9999px",
            p: "4px",
            backgroundColor: isToggled ? "primary.main" : "grey.400",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 26,
              height: 26,
              borderRadius: "50%",
              backgroundColor: "#fff",
              boxShadow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: isToggled ? "translateX(32px)" : "translateX(0)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {isToggled ? (
              <Typography
                variant="body1"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                +
              </Typography>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                -
              </Typography>
            )}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};`
