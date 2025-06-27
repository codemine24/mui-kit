export const teamCircleString = `"use client";

import {
  Avatar,
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "/images/avatar.png",
    initials: "SC",
    bio: "Passionate about building products that make a difference. 10+ years in tech leadership.",
    email: "sarah@company.com",
    linkedin: "#",
  },
  {
    name: "Alex Johnson",
    role: "Head of Operations",
    image: "/images/avatar-2.png",
    initials: "AJ",
    bio: "Operations leader focused on scaling processes and building efficient systems.",
    email: "alex@company.com",
    linkedin: "#",
  },
  {
    name: "Emily Watson",
    role: "Head of Design",
    image: "/images/avatar.png",
    initials: "EW",
    bio: "Creative director focused on user-centered design and brand experiences.",
    email: "emily@company.com",
    linkedin: "#",
  },
  {
    name: "David Kim",
    role: "Head of Product",
    image: "/images/avatar-2.png",
    initials: "DK",
    bio: "Product strategist with a track record of launching successful digital products.",
    email: "david@company.com",
    linkedin: "#",
  },
  {
    name: "Lisa Thompson",
    role: "Head of Marketing",
    image: "/images/avatar.png",
    initials: "LT",
    bio: "Growth marketing expert specializing in digital campaigns and brand building.",
    email: "lisa@company.com",
    linkedin: "#",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Engineering",
    image: "/images/avatar-2.png",
    initials: "MR",
    bio: "Full-stack engineer with expertise in scalable systems and team leadership.",
    email: "marcus@company.com",
    linkedin: "#",
  },
];

export const TeamCirclePreview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const centerMember = teamMembers[0];
  const surroundingMembers = teamMembers.slice(1);

  // Responsive values
  const radius = isMobile ? 150 : 210;
  const centerAvatarSize = isMobile ? 64 : 96;
  const surroundAvatarSize = isMobile ? 40 : 64;
  const containerSize = isMobile ? 262 : 384;

  return (
    <Container
      component="section"
      sx={{ width: "100%", py: { xs: 8, md: 12, lg: 16 } }}
    >
      <Box sx={{ mb: { xs: 14, md: 18 }, textAlign: "center" }}>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ fontWeight: "bold" }}
        >
          Our Circle
        </Typography>
        <Typography
          sx={{
            mx: "auto",
            maxWidth: "700px",
            color: "text.secondary",
            fontSize: isMobile ? "1rem" : undefined,
          }}
        >
          United by purpose, driven by passion
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          maxWidth: containerSize,
          mx: "auto",
          overflow: "visible",
          mt: { xs: 10, md: 12 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: containerSize,
            height: containerSize,
            mx: "auto",
          }}
        >
          {/* Center member */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              textAlign: "center",
            }}
          >
            <Avatar
              src={centerMember.image}
              alt={centerMember.name}
              sx={{
                width: centerAvatarSize,
                height: centerAvatarSize,
                mx: "auto",
                mb: 2,
                border: 4,
                borderColor: "primary.light",
                transition: "all 300ms",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              {centerMember.initials}
            </Avatar>
            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              sx={{ fontWeight: "bold" }}
            >
              {centerMember.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                fontSize: isMobile ? "0.9rem" : undefined,
              }}
            >
              {centerMember.role}
            </Typography>
          </Box>

          {/* Surrounding members */}
          {surroundingMembers.map((member, index) => {
            const angle = -90 + (index * 360) / surroundingMembers.length;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <Box
                key={index}
                className="group"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: \`translate(-50%, -50%) translate(\${x}px, \${y}px)\`,
                  textAlign: "center",
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: surroundAvatarSize,
                    height: surroundAvatarSize,
                    mx: "auto",
                    mb: 1,
                    border: 2,
                    borderColor: "grey.300",
                    transition: "all 300ms",
                    transform: "scale(1)",
                    ".group:hover &": {
                      borderColor: "secondary.main",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {member.initials}
                </Avatar>
                <Typography
                  variant={isMobile ? "body2" : "subtitle2"}
                  sx={{
                    fontWeight: "semibold",
                    opacity: 0,
                    transition: "opacity 300ms",
                    fontSize: isMobile ? "0.8rem" : undefined,
                    ".group:hover &": {
                      opacity: 1,
                    },
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "secondary.main",
                    opacity: 0,
                    transition: "opacity 300ms",
                    fontSize: isMobile ? "0.7rem" : undefined,
                    ".group:hover &": {
                      opacity: 1,
                    },
                  }}
                >
                  {member.role}
                </Typography>
              </Box>
            );
          })}

          {/* Connecting lines */}
          <Box
            component="svg"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: 0.2,
              color: "primary.light",
            }}
            viewBox={\`0 0 \${containerSize} \${containerSize}\`}
          >
            {surroundingMembers.map((_, index) => {
              const angle = -90 + (index * 360) / surroundingMembers.length;
              const x =
                Math.cos((angle * Math.PI) / 180) * radius + containerSize / 2;
              const y =
                Math.sin((angle * Math.PI) / 180) * radius + containerSize / 2;

              return (
                <line
                  key={index}
                  x1={containerSize / 2}
                  y1={containerSize / 2}
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="1"
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};`;