export const heroSparkleString = `
"use client"

import { useEffect, useRef, useState } from "react"
import { Box, Container, Typography, Button, Stack } from "@mui/material"

// Subtle sparkle/particle effect
function SparkleLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animationId: number
    const dpr = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * dpr
    canvas.height = 420 * dpr
    ctx!.scale(dpr, dpr)
    const sparkles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 420,
      r: Math.random() * 0.7 + 0.3,
      o: Math.random() * 0.25 + 0.12,
      s: Math.random() * 0.3 + 0.1,
    }))
    function draw() {
      ctx!.clearRect(0, 0, window.innerWidth, 420)
      for (const s of sparkles) {
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, s.r, 0, 2 * Math.PI)
        ctx!.fillStyle = \`rgba(255,255,255,\${s.o})\`
        ctx!.shadowColor = '#fff'
        ctx!.shadowBlur = 2
        ctx!.fill()
        ctx!.shadowBlur = 0
        s.y += s.s
        if (s.y > 420) {
          s.y = 0
          s.x = Math.random() * window.innerWidth
        }
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animationId)
  }, [])
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 420,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  )
}

export default function GradientHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.5
        setScrollY(rate)
      }
    }
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const floatingElements = [
    {
      delay: 0,
      top: "18%",
      left: "8%",
      width: 100,
      height: 100,
      gradient: "radial-gradient(circle, #4ecdc4 0%, #1a1a2e 80%)",
      blur: 14,
      borderRadius: "50%",
      opacity: 0.10,
    },
    {
      delay: 1,
      top: "60%",
      right: "12%",
      width: 120,
      height: 120,
      gradient: "linear-gradient(135deg, #45b7d1 0%, #96ceb4 100%)",
      blur: 8,
      borderRadius: "30%",
      opacity: 0.08,
    },
    {
      delay: 2,
      top: "32%",
      right: "28%",
      width: 70,
      height: 70,
      gradient: "linear-gradient(45deg, #ffeaa7, #ff6b6b)",
      blur: 6,
      borderRadius: "20%",
      opacity: 0.09,
    },
    {
      delay: 1.5,
      top: "75%",
      left: "20%",
      width: 50,
      height: 50,
      gradient: "radial-gradient(circle, #ff6b6b 0%, #1a1a2e 80%)",
      blur: 10,
      borderRadius: "50%",
      opacity: 0.08,
    },
    {
      delay: 2.2,
      top: "40%",
      left: "60%",
      width: 90,
      height: 90,
      gradient: "linear-gradient(120deg, #ffeaa7, #45b7d1)",
      blur: 12,
      borderRadius: "40%",
      opacity: 0.07,
    },
  ]

  return (
    <Box
      ref={heroRef}
      sx={{
        width: "100%",
        minHeight: 520,
        background: \`radial-gradient(circle at 60% 40%, #1a1a2e 0%, #16213e 60%, #0f3460 100%)\`,
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pb: 8,
        '::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 80%, rgba(0,0,0,0.18) 0%, transparent 70%)',
          zIndex: 5,
        },
      }}
    >
      {/* Dynamic background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: \`radial-gradient(circle at \${mousePosition.x}% \${mousePosition.y}%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)\`,
          transition: "background 0.3s ease",
          zIndex: 1,
        }}
      />

      {/* Floating elements */}
      {floatingElements.map((element, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: element.top,
            left: element.left,
            right: element.right,
            width: element.width,
            height: element.height,
            background: element.gradient,
            borderRadius: element.borderRadius,
            opacity: element.opacity,
            filter: \`blur(\${element.blur}px)\`,
            transform: \`translateY(\${scrollY * (0.1 + index * 0.1)}px)\`,
            animation: \`floatElement 3.5s ease-in-out infinite\`,
            animationDelay: \`\${element.delay}s\`,
            zIndex: 1,
            '@keyframes floatElement': {
              '0%, 100%': { transform: \`translateY(0px)\` },
              '50%': { transform: \`translateY(-10px)\` },
            },
          }}
        />
      ))}

      {/* Sparkle/particle layer */}
      <SparkleLayer />

      {/* Glassmorphism card behind content */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 70, md: 100 },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: '92%', md: 600 },
          minHeight: { xs: 320, md: 320 },
          background: "rgba(30, 41, 59, 0.28)",
          borderRadius: 6,
          boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.13)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 3,
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 4 }}>
        <Box sx={{ textAlign: "center", py: 10, position: "relative", maxWidth: 700, mx: 'auto' }}>
          <Typography
            variant="overline"
            sx={{
              color: "#4ecdc4",
              fontSize: "1.05rem",
              fontWeight: 700,
              letterSpacing: 3,
              mb: 2.5,
              textShadow: "0 2px 8px rgba(78,205,196,0.18)",
            }}
          >
            WELCOME TO THE FUTURE
          </Typography>

          <Box sx={{ display: 'inline-block', position: 'relative', mb: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.7rem", md: "4.2rem", lg: "5.2rem" },
                fontWeight: 900,
                lineHeight: 0.95,
                mb: 0,
                background: "linear-gradient(-45deg, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)",
                backgroundSize: "400% 400%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientShift 8s ease infinite",
                textShadow: "0 2px 16px rgba(78,205,196,0.18)",
                '@keyframes gradientShift': {
                  '0%': { backgroundPosition: "0% 50%" },
                  '50%': { backgroundPosition: "100% 50%" },
                  '100%': { backgroundPosition: "0% 50%" },
                },
              }}
            >
              INNOVATION
            </Typography>
            {/* Gradient underline */}
            <Box
              sx={{
                height: 4,
                width: { xs: 120, md: 200, lg: 260 },
                mx: 'auto',
                mt: 2,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #4ecdc4, #45b7d1, #ffeaa7)',
                opacity: 0.85,
                filter: 'blur(0.2px)',
              }}
            />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3rem" },
              fontWeight: 400,
              lineHeight: 1.2,
              mb: 3,
              color: '#7de2fc',
              textShadow: "0 2px 8px rgba(78,205,196,0.10)",
            }}
          >
            Meets Design
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.85)",
              fontWeight: 300,
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}
          >
            Experience the perfect blend of creativity and technology with our cutting-edge solutions
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.2,
                fontSize: "1rem",
                background: "linear-gradient(90deg, #ff6b6b, #4ecdc4)",
                borderRadius: "50px",
                fontWeight: 700,
                color: '#fff',
                boxShadow: '0 2px 12px 0 rgba(255,107,107,0.13)',
                textShadow: '0 2px 8px rgba(0,0,0,0.10)',
                '&:hover': {
                  background: "linear-gradient(90deg, #ff5252, #26a69a)",
                  transform: "translateY(-2px) scale(1.03)",
                  boxShadow: "0 6px 18px rgba(255, 107, 107, 0.18)",
                  filter: 'brightness(1.06)',
                },
                transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
              }}
            >
              EXPLORE NOW
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 5,
                py: 1.2,
                fontSize: "1rem",
                borderColor: "#4ecdc4",
                color: "#4ecdc4",
                borderRadius: "50px",
                fontWeight: 700,
                background: 'rgba(255,255,255,0.02)',
                boxShadow: '0 2px 8px 0 rgba(78,205,196,0.08)',
                '&:hover': {
                  borderColor: "#26a69a",
                  backgroundColor: "rgba(78, 205, 196, 0.10)",
                  color: '#fff',
                  transform: "translateY(-2px) scale(1.03)",
                  boxShadow: "0 6px 18px rgba(78,205,196,0.13)",
                  filter: 'brightness(1.06)',
                },
                transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
              }}
            >
              LEARN MORE
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}`; 