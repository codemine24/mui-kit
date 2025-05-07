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
        display: { md: "none", lg: "block" },
        pl: 2,
        width: { md: pxToRem(140), lg: pxToRem(210) },
        border: "1px solid #e7e8e9",
      }}
    >
      <Typography variant="h6">On this page</Typography>
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
                    color: "text.secondary",
                    // textDecoration: "none",
                    textAlign: "left",
                    fontSize: { md: pxToRem(14), lg: pxToRem(15) },
                    textDecoration: "underline",
                    textDecorationColor: "#e7e8e9",
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
          p: 1,
          bgcolor: "background.paper",
          border: `.5px solid`,
          borderColor: "divider",
          maxWidth: pxToRem(200),
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          We&apos;re looking for sponsors!
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
