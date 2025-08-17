import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useTheme } from "@mui/material/styles";

// Fixed positions in a grid-like pattern
const fixedPositions = [
  // Top-left quadrant
  { left: 7.5, top: 8.2 },
  { left: 15.4, top: 18.1 },
  { left: 22.3, top: 9.7 },
  { left: 29.8, top: 22.5 },

  // Top-right quadrant
  { left: 72.4, top: 11.2 },
  { left: 80.7, top: 19.6 },
  { left: 88.3, top: 8.3 },
  { left: 66.8, top: 23.1 },

  // Mid-top
  { left: 40.1, top: 15.7 },
  { left: 51.4, top: 13.2 },

  // Center area
  { left: 44.3, top: 40.6 },
  { left: 51.6, top: 45.1 },
  { left: 47.2, top: 50.4 },
  { left: 40.5, top: 54.9 },
  { left: 55.8, top: 54.2 },
  { left: 60.2, top: 49.8 },

  // Mid-bottom
  { left: 35.4, top: 65.3 },
  { left: 63.6, top: 65.9 },

  // Bottom-left quadrant
  { left: 10.9, top: 70.2 },
  { left: 21.4, top: 78.6 },
  { left: 30.3, top: 85.7 },
  { left: 18.6, top: 92.3 },

  // Bottom-right quadrant
  { left: 75.4, top: 74.5 },
  { left: 85.2, top: 86.2 },
  { left: 67.3, top: 91.5 },
  { left: 91.4, top: 78.1 },

  // Bottom-center
  { left: 47.6, top: 90.7 },

  // Diagonal flow accents
  { left: 12.5, top: 48.2 },
  { left: 26.8, top: 36.3 },
  { left: 33.1, top: 50.5 },
  { left: 20.9, top: 60.4 },

  { left: 74.5, top: 42.7 },
  { left: 66.1, top: 56.2 },
  { left: 79.6, top: 62.5 },

  // Edge accents
  { left: 5.4, top: 5.2 },
  { left: 5.3, top: 95.1 },
  { left: 94.5, top: 5.7 },
  { left: 94.2, top: 95.3 }
];

// Register the MotionPath plugin
gsap.registerPlugin(MotionPathPlugin);

const AnimatedDotBg = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stars = containerRef.current?.querySelectorAll(".star");
    const animations: gsap.core.Timeline[] = [];

    stars?.forEach((star) => {
      const starTl = gsap.timeline({ repeat: -1, yoyo: true });

      // Create circular path - using relative values
      const radiusX = 0.5 + Math.random() * 2;
      const radiusY = 0.5 + Math.random() * 2;

      starTl.to(star, {
        x: `+=${radiusX}vw`,
        y: `+=${radiusY}vh`,
        duration: 1.5 + Math.random() * 2,
        ease: "sine.inOut",
      })
        .to(star, {
          x: `-=${radiusX}vw`,
          y: `+=${radiusY}vh`,
          duration: 1.5 + Math.random() * 2,
          ease: "sine.inOut",
        })
        .to(star, {
          x: `-=${radiusX}vw`,
          y: `-=${radiusY}vh`,
          duration: 1.5 + Math.random() * 2,
          ease: "sine.inOut",
        })
        .to(star, {
          x: `+=${radiusX}vw`,
          y: `-=${radiusY}vh`,
          duration: 1.5 + Math.random() * 2,
          ease: "sine.inOut",
        });

      // Twinkling effect
      gsap.to(star, {
        opacity: 0.3 + Math.random() * 0.7,
        duration: 0.5 + Math.random() * 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      animations.push(starTl);
    });

    return () => {
      animations.forEach((tl) => tl.kill());
    };
  }, []);

  const stars = fixedPositions.map((pos, index) => ({
    id: index,
    size: (index % 5 === 0) ? 2.2 + Math.random() * 1 : 1.5 + Math.random() * 1,
    left: pos.left,
    top: pos.top,
    translateY: 0,
  }));

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        opacity: { xs: 0, md: 1 },
        top: 0,
        left: 0,
        transform: "scale(0.9)",
        zIndex: -1,
      }}
    >
      {stars.map((star) => (
        <Box
          key={star.id}
          className="star"
          sx={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}vw`,
            top: `${star.top}vh`,
            transform: `translateY(${star.translateY}vh)`,
            opacity: 0.7,
          }}
        />
      ))}
    </Box>
  );
};

export default AnimatedDotBg;