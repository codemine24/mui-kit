"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

interface TemplateItem {
  title: string;
  description: string;
  image: string;
  button: { label: string; url: string };
}

const templateItems: TemplateItem[] = [
  {
    title: "Dashboard Template",
    description:
      "Analytical interfaces that help users visualize missing components and gaps in their MUI kit. Drive insights and enhance functionality.",
    image:
      "https://tremor.so/_next/image?url=%2Fimages%2Fhome%2Fdashboard.webp&w=1920&q=75",
    button: { label: "View Template", url: "/templates/dashboard" },
  },
  {
    title: "Marketing Template",
    description:
      "Launch your next idea with a beautiful web template designed for MUI kit marketing solutions.",
    image: "/images/marketing-template.png", // Placeholder image path
    button: { label: "View Template", url: "/templates/marketing" },
  },
  {
    title: "Report Template",
    description:
      "Generate detailed reports to identify missing components in your MUI library with this intuitive template.",
    image: "/images/report-template.png", // Placeholder image path
    button: { label: "View Template", url: "/templates/report" },
  },
  {
    title: "MUI Style Visualizer",
    description:
      "Explore a visual representation of your MUI design consistency.",
    image: "/images/style-visualizer.png",
    button: { label: "View Template", url: "/templates/style" },
  },
];

export const MuiBlocksTemplates = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        MUI Blocks & Templates
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: "600px" }}
      >
        Carefully crafted MUI templates and blocks to help you identify and
        build missing components for your library.
      </Typography>

      {/* Flex Layout */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        {templateItems.map((item, index) => {
          const isLarge = index % 2 === 0;

          return (
            <Box
              key={index}
              sx={{
                position: "relative",
                flex: isLarge ? "1 1 64%" : "1 1 30%",
                height: 400,
                borderRadius: 3,
                overflow: "hidden",
                border: ".5px solid #e0e0e0",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Hover Content */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(0,0,0,1)"
                      : "rgba(255,255,255,0.95)",
                  p: 3,
                  textAlign: "center",
                  transform:
                    hoveredIndex === index
                      ? "translateY(0%)"
                      : "translateY(100%)",
                  transition: "transform 0.4s ease",
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ my: 1 }}>
                  {item.description}
                </Typography>
                <Link href={item.button.url} passHref>
                  <Button variant="contained" color="primary" >
                    {item.button.label}
                  </Button>
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
