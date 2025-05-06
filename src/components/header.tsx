"use client";
import { ContentSidebar } from "@/app/(content)/components/content-sidebar";
import { useColorMode } from "@/providers/app-provider";
import { Icon } from "@iconify/react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "./core/logo";
import { Iconify } from "./iconify";
import Link from "next/link";
import { navItems } from "@/router/router";

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
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: `.5px solid ${theme.palette.divider}`,
        backgroundColor: "background.default",
      }}
    >
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
              color="inherit"
            >
              <Icon icon="mdi:menu" />
            </IconButton>
          </Box>

          {/* Logo - Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Logo />
          </Box>

          {/* Desktop navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: 6,
            }}
          >
            {navItems.map((page) => (
              <Button
                key={page?.path}
                onClick={handleNavigate(page?.path)}
                sx={{ mx: 0.5, color: "text.primary" }}
              >
                {page?.label}
              </Button>
            ))}
          </Box>

          {/* Desktop action buttons */}
          <Stack gap={2} direction={"row"}>
            <Typography
              component={Link}
              href={"https://github.com/fazlyalahi01/mui-kit"}
              target="_blank"
            >
              <Iconify
                icon="mdi:github"
                style={{ color: theme.palette.text.secondary }}
              />
            </Typography>
            <span onClick={toggleColorMode}>
              <Iconify
                icon={
                  mode === "light" ? "tdesign:mode-dark" : "iconoir:sun-light"
                }
              />
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
              backgroundColor: "transparent",
            },
          },
        }}
        variant="temporary"
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: "background.paper",
            backgroundImage: "none",
          },
        }}
      >
        <ContentSidebar variant="drawer" />
      </Drawer>
    </AppBar>
  );
};
