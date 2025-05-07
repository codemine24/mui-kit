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

export const OnThisPage = () => {
  const { sections } = useOnThisPage();
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { md: "none", lg: "block" },
        py: 2,
        width: { md: pxToRem(140), lg: pxToRem(210) },
      }}
    >
      <Typography variant="body2" textTransform={"uppercase"} fontWeight={600}>
        On this page
      </Typography>
      <List dense>
        {sections.map((section) => (
          <ListItem
            key={section.id}
            disablePadding
            sx={{
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
                    fontSize: { md: pxToRem(14), lg: pxToRem(15) },
                    textDecoration: "none",
                    fontWeight: 500,
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
        ))}
      </List>

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
