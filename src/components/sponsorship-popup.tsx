"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import { Iconify } from "./iconify";

export const SponsorshipPopup = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Fade in={open} mountOnEnter unmountOnExit>
            <Box
                height={190}
                width={280}
                position="fixed"
                bottom={20}
                right={20}
                zIndex={9999}
                p={2}
                borderRadius={3}
                color="#eee"
                sx={{
                    backgroundImage: `linear-gradient(95deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Iconify icon="mdi:heart" height={24} width={24} style={{ color: "red" }} />
                        <Typography variant="h5">Love This?</Typography>
                    </Box>
                    <CloseIcon sx={{ cursor: "pointer" }} onClick={() => setOpen(false)} />
                </Box>
                <Typography variant="body1" mt={1}>
                    Consider{" "}
                    <Link
                        style={{
                            color: "#fff",
                            textDecoration: "underline",
                            fontWeight: 500,
                        }}
                        href="/contact"
                    >
                        sponsoring
                    </Link>{" "}
                    its growth and helping us reach more developers globally. Your sponsorship makes continued innovation possible.
                </Typography>
            </Box>
        </Fade>
    );
};