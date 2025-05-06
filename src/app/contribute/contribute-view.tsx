"use client";
import { PageTitle } from "@/components/core/page-title";
import { Iconify } from "@/components/iconify";
import { OnThisPage } from "@/components/on-this-page";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";

const sections = [
  { title: "About the Project", id: "about" },
  { title: "Why Contribute?", id: "why-contribute" },
  { title: "Contribution Guidelines", id: "guidelines" },
  { title: "Hall of Fame", id: "hall-of-fame" },
];

export const ContributeView = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 8 }}>
        <Box sx={{ py: { xs: 2, md: 4 } }}>
          <PageTitle
            title="Contribute to MUI Kit"
            description="Join the MUI Kit community and help shape the future of our open-source component library. Your contributions can make a difference!"
          />

          <Typography variant="h5" fontWeight={600} id="about" sx={{ mt: 3 }}>
            About the Project
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            MUI Kit is an open-source component library built on Material UI’s
            design system. It provides beautifully-designed, accessible, and
            fully customizable components with open, editable code. Our mission
            is to empower developers to create seamless, responsive, and
            AI-friendly user interfaces with ease. By contributing to MUI Kit,
            you’re helping build a toolkit that simplifies development for teams
            worldwide.
          </Typography>

          <Typography
            variant="h5"
            fontWeight={600}
            id="why-contribute"
            sx={{ mt: 3 }}
          >
            Why Contribute?
          </Typography>

          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            Contributing to MUI Kit is a great opportunity to make an impact,
            grow your skills, and connect with a vibrant community. Here’s why
            you should get involved:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Iconify
                  icon="emojione:rocket"
                  style={{ fontSize: 8, color: "text.primary", marginLeft: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Showcase Your Skills: Build real-world features and components used by developers globally." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Iconify
                  icon="emojione:rocket"
                  style={{ fontSize: 8, color: "text.primary", marginLeft: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Learn and Grow: Work with Material UI, React, and modern web technologies while collaborating with experienced contributors." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Iconify
                  icon="emojione:rocket"
                  style={{ fontSize: 8, color: "text.primary", marginLeft: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Give Back: Help make MUI Kit more accessible, feature-rich, and reliable for everyone." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Iconify
                  icon="emojione:rocket"
                  style={{ fontSize: 8, color: "text.primary", marginLeft: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Earn Recognition: Get featured in our Hall of Fame and build your reputation in the open-source community." />
            </ListItem>
          </List>

          <Typography
            variant="h5"
            fontWeight={600}
            id="guidelines"
            sx={{ mt: 3 }}
          >
            Contribution Guidelines
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            To ensure a smooth and productive contribution process, please
            follow these guidelines:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Iconify
                  icon="emojione:rocket"
                  style={{ fontSize: 8, color: "text.primary", marginLeft: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Check the Issues: Browse our GitHub Issues to find tasks or propose new features." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Iconify
                  icon="emojione:rocket"
                  style={{ fontSize: 8, color: "text.primary", marginLeft: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Follow the Code Style: Adhere to our coding standards, including Material UI best practices and ESLint rules." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Iconify
                  icon="emojione:rocket"
                  style={{ fontSize: 8, color: "text.primary", marginLeft: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Submit Pull Requests: Fork the repository, create a branch, and submit a PR with clear descriptions of your changes." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Iconify
                  icon="emojione:rocket"
                  style={{ fontSize: 8, color: "text.primary", marginLeft: 1 }}
                />
              </ListItemIcon>
              <ListItemText primary="Be Respectful: Engage constructively with the community and follow our Code of Conduct." />
            </ListItem>
          </List>

          <Typography
            variant="h5"
            fontWeight={600}
            id="hall-of-fame"
            sx={{ mt: 3 }}
          >
            Hall of Fame
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            We’re grateful for our amazing contributors who help make MUI Kit
            better every day. Here are some of our top contributors:
          </Typography>
          <List dense>
            <ListItem
              sx={{
                border: ".5px solid var(--mui-palette-text-secondary)",
                borderRadius: "8px",
              }}
            >
              <ListItemIcon>
                <Box
                  component={"img"}
                  src="https://avatars.githubusercontent.com/u/174150044?v=4"
                  sx={{ width: 40, height: 40, borderRadius: "50%" }}
                ></Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="https://github.com/Yead191"
                    sx={{
                      color: "primary.main",
                      textDecoration: "none",
                      mx: 0.5,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Asadur Rahman Yead (@Yead191)
                  </Link>
                }
                secondary="Contributed core components and accessibility improvements."
              />
            </ListItem>
            <ListItem
              sx={{
                border: ".5px solid var(--mui-palette-text-secondary)",
                borderRadius: "8px",
              }}
            >
              <ListItemIcon>
                <Box
                  component={"img"}
                  src="https://avatars.githubusercontent.com/u/187531328?v=4"
                  sx={{ width: 40, height: 40, borderRadius: "50%" }}
                ></Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="https://github.com/codemine24"
                    sx={{
                      color: "primary.main",
                      textDecoration: "none",
                      mx: 0.5,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Codemine (@codemine24)
                  </Link>
                }
                secondary="Contributed core components and accessibility improvements."
              />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Want to join the Hall of Fame? Start contributing today! Check out
            our{" "}
            <Link
              href="https://github.com/fazlyalahi01/mui-kit"
              target="_blank"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                mx: 0.5,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              GitHub repository
            </Link>{" "}
            to get started.
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 0, md: 4 }}>
        <OnThisPage sections={sections} />
      </Grid>
    </Grid>
  );
};
