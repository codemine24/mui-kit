export const newsletterSubscriptionHorizontalString = `
"use client"

import { useState, useEffect } from "react"
import { Box, TextField, Button, Typography, IconButton, Paper, Fade, Zoom, useTheme, alpha } from "@mui/material"
import { NotificationsActive, Close, Email, CheckCircle } from "@mui/icons-material"
import { keyframes } from "@mui/system"

// Custom animations
const bellRing = keyframes\`
  0%, 50%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(-10deg); }
  20%, 40% { transform: rotate(10deg); }
\`

const pulseGlow = keyframes\`
  0%, 100% { box-shadow: 0 0 20px rgba(25, 118, 210, 0.3); }
  50% { box-shadow: 0 0 30px rgba(25, 118, 210, 0.6); }
\`

const floatAnimation = keyframes\`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
\`

export const NewsletterSubscriptionHorizontal = () => { 
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const theme = useTheme()

  // Safely mount component with animations
  useEffect(() => {
    // Delay setting visibility to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        animation: isVisible ? \`\${floatAnimation} 3s ease-in-out infinite\` : "none",
        display: isVisible ? "block" : "none", // Ensure it's not rendered when not visible
      }}
    >
      <Fade in={isVisible} timeout={800}>
        <Paper
          elevation={12}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            p: 3,
            borderRadius: 3,
            background: \`linear-gradient(135deg, 
              \${alpha(theme.palette.primary.light, 0.1)} 0%, 
              \${alpha(theme.palette.background.paper, 0.95)} 50%, 
              \${alpha(theme.palette.secondary.light, 0.1)} 100%)\`,
            backdropFilter: "blur(10px)",
            border: \`1px solid \${alpha(theme.palette.primary.main, 0.2)}\`,
            maxWidth: 400,
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isHovered ? "scale(1.02)" : "scale(1)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: \`linear-gradient(90deg, 
                transparent, 
                \${alpha(theme.palette.primary.main, 0.1)}, 
                transparent)\`,
              transition: "left 0.6s",
            },
            "&:hover::before": {
              left: "100%",
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: theme.palette.text.secondary,
              transition: "all 0.2s",
              "&:hover": {
                color: theme.palette.error.main,
                transform: "rotate(90deg)",
              },
            }}
          >
            <Close fontSize="small" />
          </IconButton>

          {!isSubscribed ? (
            <>
              {/* Header Section */}
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Zoom in={isVisible} timeout={600}>
                  <Box
                    sx={{
                      mr: 2,
                      mt: 0.5,
                      animation: isVisible ? \`\${bellRing} 2s ease-in-out infinite\` : "none",
                      animationDelay: "1s",
                    }}
                  >
                    <NotificationsActive
                      sx={{
                        fontSize: 32,
                        color: theme.palette.primary.main,
                        filter: "drop-shadow(0 2px 4px rgba(25, 118, 210, 0.3))",
                      }}
                    />
                  </Box>
                </Zoom>

                <Box sx={{ flex: 1 }}>
                  <Fade in={isVisible} timeout={800}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        background: \`linear-gradient(45deg, 
                          \${theme.palette.primary.main}, 
                          \${theme.palette.secondary.main})\`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 0.5,
                      }}
                    >
                      Stay in the Loop
                    </Typography>
                  </Fade>

                  <Fade in={isVisible} timeout={1000}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.4,
                      }}
                    >
                      Get weekly updates and exclusive content
                    </Typography>
                  </Fade>
                </Box>
              </Box>

              {/* Email Input Section */}
              <Fade in={isVisible} timeout={1200}>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Email
                          sx={{
                            mr: 1,
                            color: theme.palette.text.secondary,
                            fontSize: 20,
                          }}
                        />
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        transition: "all 0.3s",
                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                        "&.Mui-focused": {
                          animation: \`\${pulseGlow} 2s ease-in-out infinite\`,
                        },
                      },
                    }}
                  />
                </Box>
              </Fade>

              {/* Subscribe Button */}
              <Zoom in={isVisible} timeout={1400}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleSubscribe}
                  disabled={!email}
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    background: \`linear-gradient(45deg, 
                      \${theme.palette.primary.main}, 
                      \${theme.palette.primary.dark})\`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      background: \`linear-gradient(45deg, 
                        \${theme.palette.primary.dark}, 
                        \${theme.palette.primary.main})\`,
                      transform: "translateY(-2px)",
                      boxShadow: \`0 8px 25px \${alpha(theme.palette.primary.main, 0.4)}\`,
                    },
                    "&:active": {
                      transform: "translateY(0px)",
                    },
                    mb: 1.5,
                  }}
                >
                  Subscribe
                </Button>
              </Zoom>

              {/* Footer Text */}
              <Fade in={isVisible} timeout={1600}>
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: "center",
                    display: "block",
                    lineHeight: 1.3,
                  }}
                >
                  Free forever • Unsubscribe anytime • 50k+ subscribers
                </Typography>
              </Fade>
            </>
          ) : (
            /* Success State */
            <Zoom in={isSubscribed} timeout={600}>
              <Box sx={{ textAlign: "center", py: 2 }}>
                <CheckCircle
                  sx={{
                    fontSize: 48,
                    color: theme.palette.success.main,
                    mb: 2,
                    animation: \`\${pulseGlow} 1s ease-in-out\`,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.success.main,
                    mb: 1,
                  }}
                >
                  Welcome aboard! 🎉
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Check your email for confirmation
                </Typography>
              </Box>
            </Zoom>
          )}
        </Paper>
      </Fade>
    </Box>
  )
}
` 