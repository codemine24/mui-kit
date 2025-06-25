import React, { useState } from "react"
import { Box, Typography, TextField, Button, Paper, InputAdornment, useTheme, Divider } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupsIcon from '@mui/icons-material/Groups'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export const NewsletterSubscriptionModernPreview = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const theme = useTheme()

  const features = [
    {
      icon: <CheckCircleIcon sx={{ color: 'success.main', fontSize: 28 }} />, title: "Curated Content", desc: "Hand-picked insights from 100+ sources"
    },
    // {
    //   icon: <AccessTimeIcon sx={{ color: 'success.main', fontSize: 28 }} />, title: "5-Minute Read", desc: "Digestible format for busy professionals"
    // },
    // {
    //   icon: <TrendingUpIcon sx={{ color: 'success.main', fontSize: 28 }} />, title: "Market Intelligence", desc: "Data-driven insights and predictions"
    // },
    {
      icon: <GroupsIcon sx={{ color: 'success.main', fontSize: 28 }} />, title: "Expert Network", desc: "Exclusive interviews and insights"
    },
  ]

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '7fr 5fr' }, gap: { xs: 6, md: 8 }, alignItems: 'center' }}>
            {/* Left: Info */}
            <Box sx={{ pr: { lg: 6 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%' }} />
                  <Typography variant="subtitle2" sx={{ color: 'success.main', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1 }}>
                    Newsletter
                  </Typography>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.15 }}>
                  The Weekly Edge
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6 }}>
                  Your competitive advantage delivered every Tuesday. Get the insights, strategies, and trends that successful professionals use to stay ahead.
                </Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr ' }, gap: 3 }}>
                {features.map((f, i) => (
                  <Box key={f.title} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ width: 40, height: 40, bgcolor: 'success.lighter', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0.5, flexShrink: 0 }}>
                      {f.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>{f.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            {/* Right: Subscription Card */}
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, transform: 'rotate(5deg)', bgcolor: 'success.main', background: 'linear-gradient(90deg, #10b981 0%, #14b8a6 100%)', opacity: 0.9 }} />
              <Paper elevation={6} sx={{ position: 'relative', zIndex: 1, borderRadius: 6, p: { xs: 4, md: 4 }, minWidth: { xs: 'auto', md: 380 }, border:theme.palette.mode === 'dark' ? '' : '1px solid #e2e8f0', boxShadow: 8 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>Join 28,000+ Readers</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Get your weekly edge starting today</Typography>
                </Box>
                {!subscribed ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          bgcolor: 'grey.50',
                        },
                      }}
                      InputProps={{
                        sx: { height: 48 },
                      }}
                    />
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      // disabled={!email}
                      onClick={() => setSubscribed(true)}
                      sx={{
                        borderRadius: 3,
                        fontWeight: 600,
                        fontSize: { xs: '0.8rem', md: '1rem' },
                        py: 1.5,
                        background: 'linear-gradient(90deg, #10b981 0%, #14b8a6 100%)',
                        boxShadow: 'none',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #14b8a6 0%, #10b981 100%)',
                          boxShadow: 4,
                        },
                        color:"text.primary",
                        textTransform: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      Get The Weekly Edge
                      <ArrowForwardIosIcon sx={{ fontSize: 18, ml: 1 }} />
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ textAlign: 'center', py: 3 }}>
                    <CheckCircleIcon sx={{ color: 'success.main', fontSize: 48, mb: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main', mb: 1 }}>
                      Welcome aboard! 🎉
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Check your email for confirmation
                    </Typography>
                  </Box>
                )}
                <Divider sx={{ my: 3, borderColor: 'grey.100' }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center', display: 'block', lineHeight: 1.3 }}>
                  Trusted by professionals at Google, Apple, Microsoft, and 500+ other companies
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
} 