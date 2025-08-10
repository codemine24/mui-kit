import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useTheme } from "@mui/material/styles";

// Register the MotionPath plugin
gsap.registerPlugin(MotionPathPlugin);

const AnimatedDotBg = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Fixed positions in a grid-like pattern
  const fixedPositions = [
    // Top-left quadrant
    { left: 10, top: 10 }, { left: 25, top: 15 }, { left: 15, top: 30 },
    { left: 30, top: 25 }, { left: 20, top: 40 }, { left: 35, top: 35 },

    // Top-right quadrant
    { left: 70, top: 15 }, { left: 85, top: 10 }, { left: 75, top: 30 },
    { left: 90, top: 25 }, { left: 80, top: 40 }, { left: 95, top: 35 },

    // Bottom-left quadrant
    { left: 15, top: 70 }, { left: 30, top: 75 }, { left: 20, top: 90 },
    { left: 35, top: 85 }, { left: 25, top: 60 }, { left: 40, top: 65 },

    // Bottom-right quadrant
    { left: 75, top: 70 }, { left: 90, top: 75 }, { left: 80, top: 90 },
    { left: 95, top: 85 }, { left: 85, top: 60 }, { left: 70, top: 65 },

    // Center area
    { left: 45, top: 45 }, { left: 55, top: 55 }, { left: 50, top: 50 },
    { left: 40, top: 60 }, { left: 60, top: 40 }, { left: 60, top: 50 },

    // More dots
    { left: 45, top: 65 }, { left: 34, top: 95 }, { left: 10, top: 25 },
  ];

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
        duration: 1 + Math.random() * 2,
        ease: "sine.inOut",
      })
        .to(star, {
          x: `-=${radiusX}vw`,
          y: `+=${radiusY}vh`,
          duration: 1 + Math.random() * 2,
          ease: "sine.inOut",
        })
        .to(star, {
          x: `-=${radiusX}vw`,
          y: `-=${radiusY}vh`,
          duration: 1 + Math.random() * 2,
          ease: "sine.inOut",
        })
        .to(star, {
          x: `+=${radiusX}vw`,
          y: `-=${radiusY}vh`,
          duration: 1 + Math.random() * 2,
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