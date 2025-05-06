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

interface IProps {
  sections: {
    id: string;
    title: string;
  }[];
}
export const OnThisPage = ({ sections }: IProps) => {
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
        position: "sticky",
        top: "1rem",
        display: { xs: "none", md: "block" },
        pl: 4,
        width: "100%",
      }}
    >
      <Typography variant="h6">On this page</Typography>
      <List dense sx={{ ml: 2 }}>
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
                    color: "text.secondary",
                    textDecoration: "none",
                    textAlign: "left",
                    "&:hover": {
                      // textDecoration: "underline",
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
          p: 1,
          bgcolor: "background.paper",
          border: `.5px solid`,
          borderColor: "divider",
          textAlign: "center",
          maxWidth: pxToRem(200),
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          We are looking for sponsors!
        </Typography>
        <Link href="/contribute">
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Support this project
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
