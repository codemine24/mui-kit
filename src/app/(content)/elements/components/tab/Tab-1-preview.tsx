import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface Styles {
  appBar: (theme: Theme) => SxProps<Theme>;
  tabs: (theme: Theme) => SxProps<Theme>;
  tab: (theme: Theme) => SxProps<Theme>;
  container: SxProps<Theme>;
}

const styles: Styles = {
  container: {
    width: 500,
    bgcolor: "background.paper",
  },
  appBar: (theme) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#2d3748" : "#F1F5F9", // Lighter dark mode
    boxShadow: "none",
    color: theme.palette.text.primary,
  }),
  tabs: (theme) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#2d3748" : "#e3eaf2", // Lighter dark mode
    "& .MuiTabs-indicator": {
      display: "none",
    },
    padding: "4px",
  }),
  tab: (theme) => ({
    margin: "0 4px",
    borderRadius: "6px",
    minHeight: "36px",
    "&.Mui-selected": {
      backgroundColor: theme.palette.mode === "dark" ? "#718096" : "#FFFFFF",
      fontWeight: "600",
    },
  }),
};

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Tab1Preview() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.container}>
      <AppBar position="static" sx={styles.appBar(theme)}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={styles.tabs(theme)}
        >
          <Tab label="Dashboard" {...a11yProps(0)} sx={styles.tab(theme)} />
          <Tab label="Profile" {...a11yProps(1)} sx={styles.tab(theme)} />
          <Tab label="Setting" {...a11yProps(2)} sx={styles.tab(theme)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Your dashboard shows key metrics: 15 new orders, 32 pending tasks, and 5
        urgent alerts today. Revenue increased by 12% this week. Quick actions
        allow you to manage workflows efficiently.
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        John Doe, Senior Developer with 5 years experience. Skills include
        React, Node.js, and UX design. Contact: john@example.com. Currently
        working on the new customer portal project.
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Configure notifications, privacy, and account preferences. Theme
        settings allow switching between light/dark modes. Two-factor
        authentication is currently enabled for security.
      </TabPanel>
    </Box>
  );
}
