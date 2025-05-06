"use client";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { PageTitle } from "@/components/core/page-title";
import { OnThisPage } from "@/components/on-this-page";

const sections = [
  { title: "Open Code", id: "open-code" },
  { title: "Composition", id: "composition" },
  { title: "Distribution", id: "distribution" },
  { title: "Beautiful Defaults", id: "beautiful-defaults" },
  { title: "AI-Ready", id: "ai-ready" },
];

export const IntroView = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 10 }}>
        <Box>
          <CustomBreadCrumbs
            pathArr={[
              { label: "Docs", path: "/docs/intro" },
              { label: "Introduction", path: "" },
            ]}
          />
          <PageTitle
            title="Introduction"
            description="MUI KIT is a set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks and AI models. Open Source. Open Code."
          />

          <Typography variant="body1" sx={{ my: 2 }}>
            Unlike conventional libraries where you install a package and import
            components, MUI Kit delivers open, editable code that integrates
            seamlessly with Material UI’s design system. This approach
            eliminates the need for workarounds, style overrides, or wrapping
            components to match your design. MUI Kit is built on the following
            principles:
          </Typography>

          <Typography
            id="open-code"
            variant="h5"
            fontWeight={600}
            sx={{ mt: 3 }}
          >
            Open Code
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            MUI Kit provides the full source code for every component, giving
            you complete control to customize and extend them to fit your needs.
            This means:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Full Transparency: See exactly how each component is built." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Effortless Customization: Modify components directly to align with your design or functionality requirements." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="AI-Friendly: Open code allows AI models to read, understand, and enhance your components." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mb: 2 }}>
            With MUI Kit, tweaking a button or creating a new component variant
            is as simple as editing the code directly—no fighting with external
            APIs or black-box packages.
          </Typography>

          <Typography
            id="composition"
            variant="h5"
            fontWeight={600}
            sx={{ mt: 3 }}
          >
            Composition
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Every MUI Kit component follows Material UI’s composable interface,
            ensuring consistency and predictability. Whether you’re using a
            built-in component or adding a custom one, the shared interface
            makes integration seamless. This unified approach simplifies
            development for your team and enables AI tools to work effortlessly
            with your components.
          </Typography>

          <Typography
            id="distribution"
            variant="h5"
            fontWeight={600}
            sx={{ mt: 3 }}
          >
            Distribution
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            MUI Kit embraces a copy-and-paste distribution model for ultimate
            simplicity. No npm installs, no dependencies—just grab the component
            code and use it. Components are:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Built with Material UI: Fully compatible with Material UI’s ecosystem." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Responsive by Default: Designed to work across all screen sizes out of the box." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Lightweight: No bloat, just the code you need." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mb: 2 }}>
            You can easily share components across projects or use AI to
            generate new ones based on MUI Kit’s structure.
          </Typography>

          <Typography
            id="beautiful-defaults"
            variant="h5"
            fontWeight={600}
            sx={{ mt: 3 }}
          >
            Beautiful Defaults
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            MUI Kit components are crafted with Material UI’s design principles,
            offering polished, responsive designs that look great right away.
            Key features include:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Ready to Use: Components have clean, professional styles that work out of the box." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Consistent Design: Every component is designed to harmonize with Material UI’s aesthetic, ensuring a cohesive UI." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ fontSize: 8, color: "text.primary", mr: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Highly Customizable: Easily tweak styles or behavior to match your brand." />
            </ListItem>
          </List>

          <Typography
            id="ai-ready"
            variant="h5"
            fontWeight={600}
            sx={{ mt: 3 }}
          >
            AI-Ready
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            MUI Kit’s open code and consistent Material UI-based structure make
            it ideal for AI integration. AI models can analyze your components,
            suggest improvements, or even generate new ones that align with
            Material UI’s design system.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            MUI Kit is more than a set of components—it’s a free, open-source
            toolkit to supercharge your Material UI projects with flexibility,
            responsiveness, and ease of use.
          </Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 0, md: 2 }}>
        <OnThisPage sections={sections} />
      </Grid>
    </Grid>
  );
};
