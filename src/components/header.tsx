"use client";
import { ContentSidebar } from "@/app/(content)/components/content-sidebar";
import { useColorMode } from "@/providers/app-provider";
import { navItems } from "@/router/router";
import { pxToRem } from "@/utils/pxToRem";
import { Icon } from "@iconify/react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "./core/logo";
import { Iconify } from "./iconify";
import { Divider } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

// Navigation items

export const Header = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const handleOpenNavMenu = () => {
    setMobileOpen(true);
  };

  const handleCloseNavMenu = () => {
    setMobileOpen(false);
  };

  const handleNavigate = (page: string) => () => {
    router.push(page);
  };

  return (
    <AppBar
      elevation={0}
      color="transparent"
      sx={{
        bgcolor: { xs: alpha(theme.palette.background.paper, 0.01), md: "transparent" },
        backdropFilter: { xs: "blur(10px)", md: "none" },
        top: 0,
        transition: "top 0.3s ease-in-out",
        pt: { xs: 0, md: 3 },
      }}
    >

      <Box sx={{
        background: (theme) => `linear-gradient(to bottom, ${theme.palette.background.default}, transparent)`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 100,
        zIndex: -1,
      }} />

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Logo />
          </Box>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <Icon icon="mdi:menu" />
            </IconButton>
          </Box>

          {/* Logo - Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" }
            }}>
            <Logo />
          </Box>

          {/* Desktop navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: 6,
            }}>
            <Box
              sx={{
                width: "fit-content",
                bgcolor: '#ffffff03',
                border: '1px solid',
                borderColor: "divider",
                backdropFilter: "blur(12px)",
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                gap: 2,
                py: 1.5,
                px: 2
              }}>
              {navItems.map((page) => (
                <Button
                  key={page?.path}
                  onClick={handleNavigate(page?.path)}
                  sx={{
                    color: "text.primary",
                    fontSize: { md: pxToRem(14), lg: pxToRem(15) },
                    fontWeight: 400,
                    textTransform: "capitalize",
                    borderRadius: '999px'
                  }}>
                  {page?.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Desktop action buttons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              py: 2,
              px: 3,
              alignItems: "center",
              justifyContent: "center",
              bgcolor: '#ffffff03',
              border: '1px solid',
              borderColor: "divider",
              backdropFilter: "blur(12px)",
              borderRadius: "999px",
            }}
          >
            <Box
              component={Link}
              href={"https://github.com/codemine24/mui-kit"}
              target="_blank"
              sx={{
                display: "flex",
                gap: 1.5,
                alignItems: "center",
                color: '#fff',
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <Typography color="text.primary">Star On GitHub</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  bgcolor: "primary.main",
                  borderRadius: "999px",
                  py: '3px',
                  px: '13px'
                }}>
                <StarIcon sx={{ fontSize: 15 }} />
                <Typography fontSize={14} fontWeight={400}>14</Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: 25 }} />
            <span onClick={toggleColorMode} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", }}>
              <Iconify icon={mode === "light" ? "tdesign:mode-dark" : "iconoir:sun-light"} />
            </span>
          </Box>


          {/* Mobile action buttons */}
          <Stack gap={2} direction={"row"} sx={{ display: { xs: "flex", md: "none" } }}>
            <Typography
              component={Link}
              href={"https://github.com/codemine24/mui-kit"}
              target="_blank">
              <Iconify icon="mdi:github" style={{ color: theme.palette.text.secondary }} />
            </Typography>
            <span onClick={toggleColorMode} style={{ cursor: "pointer" }}>
              <Iconify icon={mode === "light" ? "tdesign:mode-dark" : "iconoir:sun-light"} />
            </span>
          </Stack>

        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleCloseNavMenu}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: {
              backgroundColor: "transparent"
            }
          }
        }}
        variant="temporary"
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: "background.paper",
            backgroundImage: "none"
          }
        }}>
        <ContentSidebar variant="drawer" onClose={handleCloseNavMenu} />
      </Drawer>
    </AppBar>
  );
};
