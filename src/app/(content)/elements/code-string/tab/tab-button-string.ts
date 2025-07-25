export const tabButtonString = `import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
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

export const TabButtonPreview = () => {
  const tabs = [
    {
      id: 0,
      title: "Dashboard",
    },

    {
      id: 1,
      title: "Profile",
    },

    {
      id: 2,
      title: "Settings",
    },
  ];
  const theme = useTheme();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <Typography>
            Find helpful answers and guides to improve your experience with our
            tools and services
          </Typography>
        );
      case 1:
        return <Typography>Guide</Typography>;
      case 2:
        return <Typography>Help</Typography>;
      default:
        return <Typography>Default</Typography>;
    }
  };

  return (
    <Box sx={styles.container}>
      <AppBar position="static" sx={styles.appBar(theme)}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Full-width tabs example"
          sx={styles.tabs(theme)}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.title}
              sx={styles.tab(theme)}
              aria-controls={\`tabpanel-\${tab.id}\`}
              aria-labelledby={\`tab-\${tab.id}\`}
            />
          ))}
        </Tabs>
      </AppBar>
      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
};
`;
