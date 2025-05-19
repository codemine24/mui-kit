import { useOnThisPage } from "@/contexts/on-thispage-context";
import { pxToRem } from "@/utils/pxToRem";
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

export const OnThisPage = () => {
  const { sections } = useOnThisPage();
  const [activeSection, setActiveSection] = useState<string | null>(
    sections.length > 0 ? sections[0].id : null
  );
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (sections.length === 0) return;

      let maxVisibleRatio = -1;
      let newActiveSection = activeSection || sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
          );
          const sectionHeight = rect.bottom - rect.top;
          const visibleRatio =
            sectionHeight > 0 ? visibleHeight / sectionHeight : 0;

          if (visibleRatio > maxVisibleRatio) {
            maxVisibleRatio = visibleRatio;
            newActiveSection = section.id;
          }
        }
      }
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        py: 2,
        width: { md: pxToRem(140), lg: pxToRem(210) },
        height: "90%",
        flexDirection: "column",
      }}
    >
      <Typography variant="body2" textTransform={"uppercase"} fontWeight={600}>
        On this page
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          mt: 2,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <List
          dense
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              left: "1.5px",
              top: 0,
              height: "100%",
              width: "1px",
              bgcolor: "divider",
            },
          }}
        >
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <ListItem
                key={section.id}
                disablePadding
                sx={{
                  borderLeft: `2px solid transparent`,
                  ...(isActive && {
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                  }),
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Link
                      component="button"
                      onClick={() => handleScrollToSection(section.id)}
                      sx={{
                        color: "text.primary",
                        pl: 2,
                        textAlign: "left",
                        fontSize: { xs: 15, sm: 16 },
                        textDecoration: "none",
                        fontWeight: isActive ? 500 : 300,
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {section.title}
                    </Link>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box
        sx={{
          mt: "auto",
          p: 2,
          bgcolor: "background.paper",
          border: `.5px solid`,
          borderColor: "divider",
          maxWidth: pxToRem(200),
        }}
      >
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ mb: 1, fontSize: { md: pxToRem(14), lg: pxToRem(15) } }}
        >
          We&apos;re looking for sponsors!
        </Typography>
        <Typography
          component={Link}
          href="/"
          variant="body2"
          sx={{
            color: "primary.main",
          }}
        >
          Support this project
        </Typography>
      </Box>
    </Box>
  );
};
