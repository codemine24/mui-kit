"use client"

import { useState, useEffect } from "react"
import { Box, Container, Typography, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import Image from "next/image"

// ---------- styled blocks ----------
const HeroContainer = styled(Box)({
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1a4a52 0%, #0f2027 50%, #000000 100%)",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
})

const WatchStage = styled(Box)({
    position: "relative",
    width: "100%",
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const Content = styled(Box)({
    position: "absolute",
    left: "5%",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    maxWidth: 520,
})

const Thumb = styled(Box)({
    position: "absolute",
    right: "10%",
    top: "50%",
    transform: "translateY(-50%)",
    width: 120,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.25)",
    zIndex: 2,
})

const Status = styled(Box)({
    position: "absolute",
    top: "5%",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "rgba(255,255,255,.8)",
})

const BadgeLeft = styled(Status)({ left: "5%" })
const BadgeRight = styled(Status)({ right: "5%" })

const CTA = styled(Button)({
    marginTop: 32,
    padding: "12px 24px",
    borderRadius: 0,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: "uppercase",
    border: "1px solid #00bcd4",
    color: "#00bcd4",
    backgroundColor: "transparent",
    transition: "all .3s ease",
    "&:hover": { background: "#00bcd4", color: "#000" },
})

const Title = styled(Typography)({
    fontSize: "3.5rem",
    fontWeight: 300,
    lineHeight: 1.1,
    textTransform: "uppercase",
    marginBottom: 16,
})

const Sub = styled(Typography)({
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "rgba(255,255,255,.7)",
    marginBottom: 8,
})

// ---------- data ----------
interface Watch {
    id: number
    image: string
    subtitle: string
    title: string[]
    limited: string
    available: string
}

const watches: Watch[] = [
    {
        id: 0,
        image: "/watches/space-timer-jupiter.png",
        subtitle: "CH-9343-2 CUBA",
        title: ["Space", "Timer", "Jupiter"],
        limited: "Limited to 50 pieces",
        available: "Available",
    },
    {
        id: 1,
        image: "/watches/tourbillon-blue.png",
        subtitle: "CH-8123-PARL",
        title: ["Open Gear", "Flying", "Tourbillon", "Paraiba"],
        limited: "Limited to 50 pieces",
        available: "Available",
    },
    {
        id: 2,
        image: "/watches/tourbillon-green.png",
        subtitle: "CH-8123-PARL",
        title: ["Open Gear", "Flying", "Tourbillon", "Paraiba"],
        limited: "Limited to 50 pieces",
        available: "Available",
    },
]

// ---------- helper for inline transition style ----------
const getImageStyle = (active: boolean, dir: "left" | "right") => ({
    position: "absolute" as const,
    width: 500,
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: active ? 1 : 0,
    transform: active ? "translateX(0)" : `translateX(${dir === "right" ? 60 : -60}px)`,
    transition: "opacity .8s ease, transform .8s ease",
})

export default function WatchHeroCarousel() {
    const [index, setIndex] = useState(0)
    const [dir, setDir] = useState<"left" | "right">("right")

    // auto-play
    useEffect(() => {
        const id = setInterval(() => {
            setDir("right")
            setIndex((p) => (p + 1) % watches.length)
        }, 4000)
        return () => clearInterval(id)
    }, [])

    const current = watches[index]

    return (
        <>
            {/* <HeroContainer> */}
            <Container maxWidth={false} sx={{
                position: "relative", width: "100%",
                background: "linear-gradient(135deg, #1a4a52 0%, #0f2027 50%, #000000 100%)",
                display: "flex",
                alignItems: "center",

                overflow: "hidden",
            }}>
                {/* badges */}
                <BadgeLeft>{current.limited}</BadgeLeft>
                <BadgeRight>{current.available}</BadgeRight>

                {/* watch images */}
                <WatchStage>
                    {watches.map((w) => (
                        <Box key={w.id} sx={getImageStyle(w.id === index, dir)}>
                            <Image
                                src={w.image || "/placeholder.svg"}
                                alt={w.title.join(" ")}
                                width={500}
                                height={400}
                                style={{ objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(0,0,0,.5))" }}
                                priority
                            />
                        </Box>
                    ))}
                </WatchStage>

                {/* left content */}
                <Content>
                    <Sub key={`sub-${index}`}>{current.subtitle}</Sub>
                    <Title key={`title-${index}`}>
                        {current.title.map((t) => (
                            <Box key={t}>{t}</Box>
                        ))}
                    </Title>
                    <CTA>Find out more</CTA>
                </Content>

                {/* thumbnail placeholder */}
                <Thumb>
                    <Image
                        src={current.image || "/placeholder.svg"}
                        alt="thumb"
                        width={120}
                        height={120}
                        style={{ objectFit: "cover" }}
                    />
                </Thumb>

                {/* nav dots */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "5%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 1,
                    }}
                >
                    {watches.map((_, i) => (
                        <Box
                            key={i}
                            onClick={() => {
                                if (i === index) return
                                setDir(i > index ? "right" : "left")
                                setIndex(i)
                            }}
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: i === index ? "#00bcd4" : "rgba(255,255,255,.35)",
                                cursor: "pointer",
                                transition: "background .2s",
                                "&:hover": { background: i === index ? "#00bcd4" : "rgba(255,255,255,.6)" },
                            }}
                        />
                    ))}
                </Box>
            </Container>
            {/* </HeroContainer> */}
        </>
    )
}
