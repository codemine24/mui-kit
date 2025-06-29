"use client";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import CircleIcon from "@mui/icons-material/Circle";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";

const sections = [
  { title: "Why No Installation?", id: "why-no-installation" },
  { title: "Prerequisites", id: "prerequisites" },
  { title: "How to Use MUI Kit", id: "how-to-use" }
];

export const InstallationView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Docs", path: "/docs/intro" },
          { label: "Installation", path: "" }
        ]}
      />

      <PageTitle
        title="Installation"
        description={[
          { text: "MUI Kit requires " },
          { text: "no installation", highlight: true },
          {
            text: ". Built entirely with Material UI, components are designed to be copied and pasted directly into your project, offering a seamless and lightweight way to enhance your UI."
          }
        ]}
      />

      <Typography id="why-no-installation" variant="h5" fontWeight={600} sx={{ mt: 3 }}>
        Why No Installation?
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        MUI Kit eliminates the need for traditional installation processes like npm packages or
        dependency management. Every component is crafted using only Material UI, ensuring full
        compatibility with its ecosystem. Simply copy the component code from our documentation or
        repository and paste it into your project to start building beautiful, responsive
        interfaces.
      </Typography>

      <Typography id="prerequisites" variant="h5" fontWeight={600} sx={{ mt: 3 }}>
        Prerequisites
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        To use MUI Kit effectively, your project should already have the following:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Material UI installed and configured in your project." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="React and TypeScript setup for better type safety and development experience." />
        </ListItem>
      </List>

      <Typography id="how-to-use" variant="h5" fontWeight={600} sx={{ mt: 3 }}>
        How to Use MUI Kit
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 1 }}>
        Getting started with MUI Kit is straightforward. Follow these steps to integrate our
        components into your project:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Browse Components: Visit the MUI Kit documentation or repository to explore our collection of components." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Copy the Code: Select a component and copy its JSX, styles, and any supporting logic." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Paste and Use: Insert the code into your own project and modify as needed." />
        </ListItem>
      </List>
    </Box>
  );
};
