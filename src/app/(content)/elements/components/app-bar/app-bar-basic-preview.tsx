import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = ["Home", "About", "Blog", "Contact"];

export const AppBarBasicPreview = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "common.black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Logo */}
          <Box sx={{ display: { xs: "flex", lg: "none" }, flexGrow: 1 }}>
            <AdbIcon sx={{ mr: 1, color: "common.white" }} />
            <Typography
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontSize: "1rem",
                fontFamily: "monospace",
                fontWeight: 900,
                letterSpacing: ".1rem",
                color: "common.white",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
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
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiPaper-root": {
                  minWidth: "180px",
                  borderRadius: "4px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    py: 1,
                    px: 2,
                    "&:hover": {
                      backgroundColor: "rgba(164, 19, 60, 0.1)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      "&:hover": {
                        textDecoration: "underline",
                        textDecorationColor: "#a4133c",
                        textUnderlineOffset: "4px",
                      },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <Box sx={{ px: 2, py: 1 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#a4133c",
                    fontSize: "0.9rem",
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#8a1033",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex", justifyContent: "end", mr: 6 },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "4px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "#a4133c",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#a4133c", ml: 2 }}
            >
              Contact Us
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
          display: { xs: "none", lg: "flex" },
          mr: 1,
          color: "common.white",
        }}
      />
      <Typography
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: "none", lg: "flex" },
          fontSize: { xs: "1rem", sm: "1.5rem" },
          fontFamily: "monospace",
          fontWeight: 900,
          letterSpacing: ".1rem",
          color: "common.white",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </Box>
  );
};
