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
    width: "100%",
    bgcolor: "background.paper",
    borderRadius: "10px",
  },
  appBar: (theme) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#2d3748" : "#F1F5F9",
    boxShadow: "none",
    color: theme.palette.text.primary,
    borderRadius: "10px",
  }),
  tabs: (theme) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#2d3748" : "#e3eaf2",
    "& .MuiTabs-indicator": {
      display: "none",
    },
    padding: "4px",
    borderRadius: "6px 6px 0 0",
  }),
  tab: (theme) => ({
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
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
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
          aria-label="Full-width tabs example"
          sx={styles.tabs(theme)}
        >
          <Tab
            label="Dashboard"
            id="tab-0"
            aria-controls="tabpanel-0"
            sx={styles.tab(theme)}
          />
          <Tab
            label="Profile"
            id="tab-1"
            aria-controls="tabpanel-1"
            sx={styles.tab(theme)}
          />
          <Tab
            label="Settings"
            id="tab-1"
            aria-controls="tabpanel-1"
            sx={styles.tab(theme)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Your dashboard shows key metrics: 15 new orders, 32 pending tasks, and 5
        urgent alerts today. Revenue increased by 12% this week. Quick actions
        allow you to manage workflows efficiently.
      </TabPanel>
      <TabPanel value={value} index={1}>
        John Doe, Senior Developer with 5 years experience. Skills include
        React, Node.js, and UX design. Contact: john@example.com. Currently
        working on the new customer portal project.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Configure notifications, privacy, and account preferences. Theme
        settings allow switching between light/dark modes. Two-factor
        authentication is currently enabled for security.
      </TabPanel>
    </Box>
  );
}
