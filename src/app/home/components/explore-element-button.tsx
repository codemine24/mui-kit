"use client";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { keyframes } from "@mui/material/styles";
import Link from "next/link";
import { PATHS } from "@/router/paths";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const rotate = keyframes`
from {
    transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
  }
  to {
    transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
  }
`;

const ExploreElementButton = () => {
    return (
        <Box
            component={Link}
            href={PATHS.ELEMENTS.OVERVIEW}
            sx={{
                position: "relative",
                width: "230px",
                height: "55px",
                borderRadius: "50px",
                overflow: "hidden",
                "--offset": "1px",
                cursor: "pointer",
                maxWidth: "100%",
                '&:hover': {
                    transition: "all 0.3s ease-in-out",
                    boxShadow: `
                        0 0 20px rgba(138, 43, 226, 0.2),
                        0 0 40px rgba(138, 43, 226, 0.15),
                        0 0 60px rgba(138, 43, 226, 0.1),
                        0 0 80px rgba(138, 43, 226, 0.08)`,
                }
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
                    opacity: 1,
                    animation: `${rotate} 2s linear infinite`,
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
                    backgroundImage: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} , #4C2CCA )`,
                    zIndex: 2,
                }}
            />

            {/* Actual Button */}
            <Button
                fullWidth
                endIcon={<ArrowForwardIosIcon />}
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 3,
                    color: "white",
                    fontSize: "1rem",
                    background: "transparent",
                    textTransform: "none",
                }}
            >
                Explore Elements
            </Button>
        </Box>
    );
};

export default ExploreElementButton;