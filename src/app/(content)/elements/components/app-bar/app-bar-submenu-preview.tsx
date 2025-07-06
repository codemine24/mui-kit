import AdbIcon from "@mui/icons-material/Adb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = [
  { name: "Home", submenu: null },
  {
    name: "Services",
    submenu: ["Web Development", "Mobile Apps", "UI/UX Design"]
  },
  {
    name: "Contact",
    submenu: ["FAQ", "Ticket", "Support"]
  },
  { name: "About", submenu: null }
];

export const AppBarSubmenuPreview = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [submenuAnchor, setSubmenuAnchor] = React.useState<null | HTMLElement>(null);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = React.useState<string | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setMobileSubmenuOpen(null); // Reset submenu state when opening main menu
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileSubmenuOpen(null);
  };

  const handleSubmenuOpen = (event: React.MouseEvent<HTMLElement>, pageName: string) => {
    if (pages.find((p) => p.name === pageName)?.submenu) {
      setSubmenuAnchor(event.currentTarget);
      setActiveSubmenu(pageName);
    }
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchor(null);
    setActiveSubmenu(null);
  };

  const toggleMobileSubmenu = (pageName: string) => {
    setMobileSubmenuOpen((prev) => (prev === pageName ? null : pageName));
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "common.white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Logo */}
          <Box sx={{ display: { xs: "flex", lg: "none" }, flexGrow: 1 }}>
            <Logo />
          </Box>

          {/* Desktop Logo */}
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Logo />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiPaper-root": {
                  minWidth: "180px",
                  borderRadius: "4px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  maxHeight: "70vh",
                  overflowY: "auto"
                }
              }}
              PaperProps={{
                style: {
                  maxHeight: "70vh"
                }
              }}>
              {[
                ...pages.map((page) => [
                  <MenuItem
                    key={`${page.name}-parent`}
                    onClick={
                      page.submenu ? () => toggleMobileSubmenu(page.name) : handleCloseNavMenu
                    }
                    sx={{
                      py: 1,
                      px: 2,
                      "&:hover": {
                        backgroundColor: "rgba(164, 19, 60, 0.1)"
                      }
                    }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%"
                      }}>
                      <Typography
                        sx={{
                          color: "common.black",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          "&:hover": {
                            textDecoration: "underline",
                            textDecorationColor: "#F06543",
                            textUnderlineOffset: "4px"
                          }
                        }}>
                        {page.name}
                      </Typography>
                      {page.submenu &&
                        (mobileSubmenuOpen === page.name ? (
                          <KeyboardArrowUpIcon sx={{ fontSize: "1rem" }} />
                        ) : (
                          <KeyboardArrowDownIcon sx={{ fontSize: "1rem" }} />
                        ))}
                    </Box>
                  </MenuItem>,
                  page.submenu && (
                    <Collapse
                      key={`${page.name}-collapse`}
                      in={mobileSubmenuOpen === page.name}
                      timeout="auto"
                      unmountOnExit>
                      <Box sx={{ pl: 3 }}>
                        {page.submenu.map((item) => (
                          <MenuItem
                            key={item}
                            onClick={handleCloseNavMenu}
                            sx={{
                              py: 1,
                              px: 2,
                              "&:hover": {
                                backgroundColor: "rgba(164, 19, 60, 0.1)"
                              }
                            }}>
                            <Typography
                              sx={{
                                fontSize: "0.85rem",
                                fontWeight: 400,
                                "&:hover": {
                                  textDecoration: "underline",
                                  textDecorationColor: "#F06543",
                                  textUnderlineOffset: "4px"
                                }
                              }}>
                              {item}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Box>
                    </Collapse>
                  )
                ]),
                <Box key="contact-button" sx={{ px: 2, py: 1 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#F06543",
                      fontSize: "0.9rem",
                      py: 1,
                      "&:hover": {
                        backgroundColor: "#F06543"
                      }
                    }}>
                    Login
                  </Button>
                </Box>
              ]}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex", justifyContent: "end", mr: 6 }
            }}>
            {pages.map((page) => (
              <Box
                key={page.name}
                sx={{ position: "relative" }}
                onMouseEnter={(e) => handleSubmenuOpen(e, page.name)}
                onMouseLeave={handleSubmenuClose}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "common.black",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "4px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#F06543",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease-out"
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left"
                    }
                  }}>
                  {page.name}
                  {page.submenu &&
                    (activeSubmenu === page.name ? (
                      <KeyboardArrowUpIcon sx={{ ml: 0.5, fontSize: "1rem" }} />
                    ) : (
                      <KeyboardArrowDownIcon sx={{ ml: 0.5, fontSize: "1rem" }} />
                    ))}
                </Button>

                {/* Submenu */}
                {page.submenu && (
                  <Popover
                    open={activeSubmenu === page.name}
                    anchorEl={submenuAnchor}
                    onClose={handleSubmenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left"
                    }}
                    sx={{
                      pointerEvents: "none",
                      "& .MuiPaper-root": {
                        pointerEvents: "auto",
                        minWidth: "200px",
                        borderRadius: "4px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                        backgroundColor: "#1a1a1a",
                        mt: "8px"
                      }
                    }}
                    disableRestoreFocus>
                    {page.submenu.map((item) => (
                      <MenuItem
                        key={item}
                        sx={{
                          py: 1,
                          px: 3,
                          "&:hover": {
                            backgroundColor: "rgba(164, 19, 60, 0.1)"
                          }
                        }}>
                        <Typography
                          sx={{
                            fontSize: "0.9rem",
                            color: "white",
                            "&:hover": {
                              textDecoration: "underline",
                              textDecorationColor: "#F06543",
                              textUnderlineOffset: "4px"
                            }
                          }}>
                          {item}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Popover>
                )}
              </Box>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Button variant="contained" sx={{ backgroundColor: "#F06543", ml: 2 }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AdbIcon
        sx={{
          mr: 1,
          color: "common.black"
        }}
      />
      <Typography
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          fontSize: { xs: "1rem", sm: "1.5rem" },
          fontFamily: "monospace",
          fontWeight: 900,
          letterSpacing: ".1rem",
          color: "common.black",
          textDecoration: "none"
        }}>
        LOGO
      </Typography>
    </Box>
  );
};
