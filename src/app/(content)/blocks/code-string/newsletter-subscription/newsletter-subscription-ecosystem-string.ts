export const newsletterSubscriptionEcosystemString = `
'use client';

import React, { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  useTheme,
} from "@mui/material"
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import PublicIcon from '@mui/icons-material/Public'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'

export const NewsletterSubscriptionEcosystemPreview = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const featureCards = [
    {
      icon: <PsychologyAltIcon sx={{ color: '#fff', fontSize: 24 }} />,
      bg: isDark 
        ? 'linear-gradient(90deg, rgba(255, 237, 213, 0.08) 0%, rgba(255, 247, 237, 0.04) 100%)'
        : 'linear-gradient(90deg, #ffedd5 0%, #fff7ed 100%)',
      border: isDark 
        ? '1px solid rgba(253, 186, 116, 0.2)'
        : '1px solid #fdba74',
      iconBg: 'linear-gradient(90deg, #f97316 0%, #ef4444 100%)',
      title: 'AI & Machine Learning',
      desc: 'Latest breakthroughs and practical applications',
    },
    {
      icon: <TrendingUpIcon sx={{ color: '#fff', fontSize: 24 }} />,
      bg: isDark 
        ? 'linear-gradient(90deg, rgba(219, 234, 254, 0.08) 0%, rgba(240, 249, 255, 0.04) 100%)'
        : 'linear-gradient(90deg, #dbeafe 0%, #f0f9ff 100%)',
      border: isDark 
        ? '1px solid rgba(147, 197, 253, 0.2)'
        : '1px solid #93c5fd',
      iconBg: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
      title: 'Market Intelligence',
      desc: 'Data-driven insights and predictions',
    },
    {
      icon: <LightbulbIcon sx={{ color: '#fff', fontSize: 24 }} />,
      bg: isDark 
        ? 'linear-gradient(90deg, rgba(237, 233, 254, 0.08) 0%, rgba(253, 242, 248, 0.04) 100%)'
        : 'linear-gradient(90deg, #ede9fe 0%, #fdf2f8 100%)',
      border: isDark 
        ? '1px solid rgba(196, 181, 253, 0.2)'
        : '1px solid #c4b5fd',
      iconBg: 'linear-gradient(90deg, #a21caf 0%, #f472b6 100%)',
      title: 'Innovation Strategies',
      desc: 'Frameworks for breakthrough thinking',
    },
  ]

  const iconGrid = [
    { 
      icon: PsychologyAltIcon, 
      color: isDark 
        ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.9) 0%, rgba(239, 68, 68, 0.9) 100%)'
        : 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)', 
      delay: '0s' 
    },
    { 
      icon: TrendingUpIcon, 
      color: isDark 
        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(99, 102, 241, 0.9) 100%)'
        : 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', 
      delay: '0.2s' 
    },
    { 
      icon: LightbulbIcon, 
      color: isDark 
        ? 'linear-gradient(135deg, rgba(162, 28, 175, 0.9) 0%, rgba(244, 114, 182, 0.9) 100%)'
        : 'linear-gradient(135deg, #a21caf 0%, #f472b6 100%)', 
      delay: '0.4s' 
    },
    { 
      icon: PublicIcon, 
      color: isDark 
        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(20, 184, 166, 0.9) 100%)'
        : 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)', 
      delay: '0.6s' 
    },
    { 
      icon: FlashOnIcon, 
      color: isDark 
        ? 'linear-gradient(135deg, rgba(250, 204, 21, 0.9) 0%, rgba(249, 115, 22, 0.9) 100%)'
        : 'linear-gradient(135deg, #facc15 0%, #f97316 100%)', 
      delay: '0.8s' 
    },
    { 
      icon: TrackChangesIcon, 
      color: isDark 
        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(162, 28, 175, 0.9) 100%)'
        : 'linear-gradient(135deg, #6366f1 0%, #a21caf 100%)', 
      delay: '1s' 
    },
  ]

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 8, md: 12 }, alignItems: 'center' }}>
          {/* Left Side */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary', mb: 1, lineHeight: 1.1 }}>
                The Knowledge
                <Box component="span" sx={{ display: 'block', background: 'linear-gradient(90deg, #f97316 0%, #ef4444 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>
                  Ecosystem
                </Box>
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6 }}>
                Discover interconnected insights across six key domains. Each hexagon represents a pillar of modern business intelligence.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {featureCards.map((f, i) => (
                <Box key={f.title} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: 3, background: f.bg, border: f.border }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: f.iconBg }}>
                    {f.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>{f.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          {/* Right Side */}
          <Box sx={{ position: 'relative', width: '100%' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, maxWidth: 340, mx: 'auto' }}>
              {iconGrid.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Box
                    key={idx}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: item.color,
                      boxShadow: 6,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.08) rotate(8deg)',
                        boxShadow: 12,
                      },
                      mb: 1,
                    }}
                  >
                    <Icon sx={{ color: '#fff', fontSize: 36 }} />
                  </Box>
                )
              })}
            </Box>
            <Box sx={{ mt: 6, textAlign: 'center', maxWidth: 420, mx: 'auto' }}>
              <Card elevation={8} sx={{ 
                borderRadius: 4, 
                boxShadow: isDark ? '0 8px 32px rgba(0, 0, 0, 0.4)' : 2, 
                border: 0,
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                  : 'background.paper',
                backdropFilter: isDark ? 'blur(10px)' : 'none',
              }}>
                <CardContent sx={{ p: { xs: 3, md: 2 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                    Join the Ecosystem
                  </Typography>
                  {!subscribed ? (
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
                      <TextField
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                        sx={{
                          flex: 1,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'background.paper',
                            border: isDark ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid transparent',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'background.paper',
                              borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'grey.300',
                            },
                            '&.Mui-focused': {
                              bgcolor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'background.paper',
                              borderColor: 'primary.main',
                              boxShadow: isDark 
                                ? '0 0 0 4px rgba(25, 118, 210, 0.2)'
                                : '0 0 0 4px rgba(25, 118, 210, 0.1)',
                            },
                          },
                          '& .MuiOutlinedInput-input': {
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            color: 'text.primary',
                            '&::placeholder': {
                              color: 'text.secondary',
                              opacity: 0.8,
                            },
                          },
                        }}
                        InputProps={{ 
                          sx: { 
                            height: 48,
                            px: 2,
                          } 
                        }}
                      />
                      <Button
                        variant="contained"
                        size="large"
                        disabled={!email}
                        onClick={() => setSubscribed(true)}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          background: isDark 
                            ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)'
                            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: '#fff',
                          boxShadow: isDark 
                            ? '0 8px 32px rgba(102, 126, 234, 0.4)'
                            : '0 8px 32px rgba(102, 126, 234, 0.3)',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                            transition: 'left 0.5s',
                          },
                          '&:hover': {
                            background: isDark 
                              ? 'linear-gradient(135deg, rgba(118, 75, 162, 0.9) 0%, rgba(102, 126, 234, 0.9) 100%)'
                              : 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                            boxShadow: isDark 
                              ? '0 12px 40px rgba(102, 126, 234, 0.5)'
                              : '0 12px 40px rgba(102, 126, 234, 0.4)',
                            transform: 'translateY(-2px)',
                            '&::before': {
                              left: '100%',
                            },
                          },
                          '&:active': {
                            transform: 'translateY(0px)',
                            boxShadow: isDark 
                              ? '0 4px 20px rgba(102, 126, 234, 0.4)'
                              : '0 4px 20px rgba(102, 126, 234, 0.3)',
                          },
                          '&:disabled': {
                            background: isDark 
                              ? 'linear-gradient(135deg, rgba(75, 85, 99, 0.5) 0%, rgba(55, 65, 81, 0.5) 100%)'
                              : 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)',
                            color: isDark ? '#6b7280' : '#9ca3af',
                            boxShadow: 'none',
                            transform: 'none',
                          },
                          textTransform: 'none',
                          letterSpacing: '0.5px',
                        }}
                      >
                        Connect
                      </Button>
                    </Box>
                  ) : (
                    <Typography variant="body1" sx={{ color: 'success.main', mt: 2 }}>
                      Welcome! Check your email for confirmation.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
` 