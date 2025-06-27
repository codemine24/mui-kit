export const heroCarouselString = `"use client"

import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react"

// ---------- data ----------
interface Watch {
  id: number
  image: string
  subtitle: string
  title: string[]
  limited: string
  available: string
  background: string 
  accentColor: string 
  buttonColor: string 
}

const watches: Watch[] = [
  {
    id: 0,
    image: "/watches/watch1.png",
    subtitle: "CH-3123-PABL",
    title: ["OPEN GEAR", "FLYING", "TOURBILLON", "PARAIBA"],
    limited: "LIMITED TO 15 PIECES",
    available: "AVAILABLE",
    background: "radial-gradient(circle at 70% 40%, #164e63 0%, #0f172a 60%, #020617 100%)",
    accentColor: "#22d3ee",
    buttonColor: "#22d3ee",
  },
  {
    id: 1,
    image: "/watches/watch4.png",
    subtitle: "CH-9343-2-CUBK",
    title: ["CHRONOSWISS", "REGULATOR", "SKELETON", "BRONZE"],
    limited: "LIMITED TO 25 PIECES",
    available: "AVAILABLE",
    background: "radial-gradient(circle at 70% 40%, #b45309 0%, #78350f 60%, #000 100%)",
    accentColor: "#fbbf24",
    buttonColor: "#f59e42",
  },
  {
    id: 2,
    image: "/watches/watch2.png",
    subtitle: "CH-3123-PABL-ALT",
    title: ["OPEN GEAR", "FLYING", "TOURBILLON", "MARINE"],
    limited: "LIMITED TO 20 PIECES",
    available: "AVAILABLE",
    background: "radial-gradient(circle at 70% 40%, #164e63 0%, #0f172a 60%, #020617 100%)",
    accentColor: "#22d3ee",
    buttonColor: "#22d3ee",
  },
  {
    id: 3,
    image: "/watches/watch3.png",
    subtitle: "CH-3123-PABL-ALT",
    title: ["OPEN GEAR", "FLYING", "TOURBILLON", "MARINE"],
    limited: "LIMITED TO 20 PIECES",
    available: "AVAILABLE",
    background: "radial-gradient(circle at 70% 40%, #b45309 0%, #78350f 60%, #000 100%)",
    accentColor: "#22d3ee",
    buttonColor: "#22d3ee",
  },
]

export const WatchHeroCarouselPreview = () => {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<"left" | "right">("right")
  const [prevIndex, setPrevIndex] = useState(0)

  const isMobile = useMediaQuery('(max-width:600px)')
  useEffect(() => {
    const id = setInterval(() => {
      setDir("right")
      setPrevIndex(index)
      setIndex((p) => (p + 1) % watches.length)
    }, 4000)
    return () => clearInterval(id)
  }, [index])

  const handleDotClick = (i: number) => {
    if (i === index) return
    setDir(i > index ? "right" : "left")
    setPrevIndex(index)
    setIndex(i)
  }

  const current = watches[index]
  const previous = watches[prevIndex]

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "unset", md: "70vh" },
        width: "100%",
        background: current.background,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        transition: "background 1s cubic-bezier(0.25,0.46,0.45,0.94)",
        py: { xs: 2, md: 0 },
        '@media (max-width:600px)': {
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: 0,
        },
      }}
    >
      {/* Status badges */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 8, md: 48 },
          left: { xs: 8, md: 48 },
          fontSize: { xs: 10, md: 12 },
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: current.accentColor,
          zIndex: 10,
          transition: "all 0.7s",
        }}
      >
        {current.limited}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: 8, md: 48 },
          right: { xs: 8, md: 48 },
          fontSize: { xs: 10, md: 12 },
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: current.accentColor,
          zIndex: 10,
          transition: "all 0.7s",
        }}
      >
        {current.available}
      </Box>

      {/* Watch images stage */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          inset: { md: 0 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: 180, md: "auto" },
          mt: { xs: 3, md: 0 },
        }}
      >
        {/* Previous image (slide out) */}
        {prevIndex !== index && (
          <Box
            key={previous.id + "-prev"}
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transform: \`translateX(\${dir === "right" ? -120 : 120}px)\`,
              transition: "opacity 0.7s, transform 0.7s, filter 0.7s",
              pointerEvents: "none",
              filter: "blur(2px)",
            }}
          >
            <Box>
              <Image
                src={previous.image || "/placeholder.svg"}
                alt={previous.title.join(" ")}
                width={300}
                height={300}
                style={{
                  objectFit: "contain",
                  filter: "blur(1px)",
                  transition: "all 0.7s",
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </Box>
          </Box>
        )}
        {/* Current image (slide in) */}
        <Box
          key={current.id + "-current"}
          sx={{
            position: { xs: "relative", md: "absolute" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 1,
            transform: \`translateX(\${prevIndex === index ? 0 : (dir === "right" ? 120 : -120)}px)\`,
            animation: prevIndex !== index ? \`\${dir === "right" ? "slideInFromRight" : "slideInFromLeft"} 0.7s forwards\` : undefined,
            transition: "opacity 0.7s, transform 0.7s, filter 0.7s",
            filter: prevIndex === index ? "blur(0px)" : "blur(1px)",
            width: { xs: "100%", md: "auto" },
            justifySelf: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "auto" }, mx: "auto" }}>
            <Image
              src={current.image || "/placeholder.svg"}
              alt={current.title.join(" ")}
              width={400}
              height={400}
              style={{
                objectFit: "contain",
                filter: prevIndex === index ? "blur(0px)" : "blur(0.5px)",
                transition: "all 0.7s",
                maxWidth: "100%",
                width: isMobile ? "100%" : 400,
                height: isMobile ? "auto" : 400,
                display: "block",
                margin: "0 auto",
              }}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* Left content */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          left: { md: 48 },
          top: { md: "50%" },
          transform: { md: "translateY(-50%)" },
          zIndex: 20,
          maxWidth: { xs: "100%", md: 520 },
          width: { xs: "100%", md: "auto" },
          padding: { xs: "0 8px", md: 0 },
          mt: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 12, md: 14 },
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "rgba(255,255,255,0.7)",
            mb: { xs: 0.5, md: 3 },
            fontWeight: 300,
            transition: "all 0.7s",
            width: { xs: "100%", md: "auto" },
            textAlign: { xs: "left", md: "inherit" },
          }}
        >
          {current.subtitle}
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "1.4rem", md: "3.5rem" },
            fontWeight: 300,
            lineHeight: { xs: 1.15, md: 0.9 },
            textTransform: "uppercase",
            mb: { xs: 1.5, md: 6 },
            color: "#fff",
            letterSpacing: 1,
            transition: "all 0.7s",
            width: { xs: "100%", md: "auto" },
            textAlign: { xs: "left", md: "inherit" },
          }}
        >
          {current.title.map((titlePart, i) => (
            <Box key={i} sx={{ display: "block", transition: "all 0.7s", width: { xs: "100%", md: "auto" }, textAlign: { xs: "left", md: "inherit" } }}>
              {titlePart}
            </Box>
          ))}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: { xs: 2, md: 4 },
            px: { xs: 2, md: 6 },
            py: { xs: 1, md: 1.5 },
            borderRadius: 0,
            fontSize: { xs: 11, md: 12 },
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: current.buttonColor,
            borderColor: current.buttonColor,
            background: "transparent",
            width: { xs: "100%", md: "auto" },
            transition: "all 0.3s",
            '&:hover': {
              background: current.buttonColor,
              color: '#000',
              borderColor: current.buttonColor,
            },
          }}
        >
          FIND OUT MORE
        </Button>
      </Box>

      {/* Thumbnail with play icon */}
      <Box
        sx={{
          position: "absolute",
          right: 80,
          top: "50%",
          transform: "translateY(-50%)",
          width: 120,
          height: 120,
          borderRadius: 3,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.2)",
          zIndex: 20,
          boxShadow: 3,
          transition: "all 0.7s",
          background: "#111",
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          justifyContent: "center",
          '@media (max-width:600px)': {
            position: "relative",
            right: "auto",
            top: "auto",
            transform: "none",
            margin: "16px auto 0 auto",
            width: 80,
            height: 80,
          },
        }}
      >
        <Image
          src={current.image || "/placeholder.svg"}
          alt="thumbnail"
          width={120}
          height={120}
          style={{ 
            objectFit: "cover", 
            width: 120, 
            filter: prevIndex === index ? "blur(0px)" : "blur(0.3px)",
            transition: "all 0.7s",
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.18)",
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: 1,
              '@media (max-width:600px)': {
                width: 24,
                height: 24,
              },
            }}
          >
            {/* Play triangle */}
            <Box
              sx={{
                width: 0,
                height: 0,
                borderLeft: "10px solid #fff",
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                ml: 0.5,
                '@media (max-width:600px)': {
                  borderLeft: "7px solid #fff",
                  borderTop: "4px solid transparent",
                  borderBottom: "4px solid transparent",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Navigation dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 48,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", sm: "flex" },
          gap: 2,
          '@media (max-width:600px)': {
            position: "relative",
            bottom: "auto",
            left: "auto",
            transform: "none",
            mt: 2,
            gap: 1,
          },
        }}
      >
        {watches.map((_, i) => (
          <Box
            key={i}
            component="button"
            onClick={() => handleDotClick(i)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              cursor: "pointer",
              border: 0,
              outline: 0,
              background: i === index ? current.accentColor : "rgba(255,255,255,0.3)",
              transform: i === index ? "scale(1.25)" : "scale(1)",
              transition: "all 0.3s",
              '&:hover': {
                background: i === index ? current.accentColor : "rgba(255,255,255,0.5)",
                transform: "scale(1.1)",
              },
              '@media (max-width:600px)': {
                width: 10,
                height: 10,
              },
            }}
          />
        ))}
      </Box>

      {/* Bottom navigation info */}
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: 48,
          right: 48,
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "rgba(255,255,255,0.5)",
          transition: "all 0.7s",
          '@media (max-width:600px)': {
            position: "relative",
            bottom: "auto",
            left: "auto",
            right: "auto",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
            fontSize: 10,
            mt: 1,
            px: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              '@media (max-width:600px)': {
                width: 12,
                height: 12,
              },
            }}
          >
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
          </Box>
          <span>{current.title.join(" ")}</span>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4, '@media (max-width:600px)': { gap: 2 } }}>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {watches.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: i === index ? current.accentColor : "rgba(255,255,255,0.3)",
                  transition: "all 0.3s",
                  '@media (max-width:600px)': {
                    width: 5,
                    height: 5,
                  },
                }}
              />
            ))}
          </Box>
          <span>{watches[(index + 1) % watches.length].title.join(" ")}</span>
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              '@media (max-width:600px)': {
                width: 12,
                height: 12,
              },
            }}
          >
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
          </Box>
        </Box>
      </Box>

      <style jsx global>{\`
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(120px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-120px); }
          to { opacity: 1; transform: translateX(0); }
        }
      \`}</style>
    </Box>
  )
} `;
