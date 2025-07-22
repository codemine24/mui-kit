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

export const Tab1Preview = () => {
  const tabData = [
    {
      id: 0,
      title: "Dashboard",
      content: (
        <Typography component={"span"}>
          {" "}
          Your dashboard shows key metrics: 15 new orders, 32 pending tasks, and
          5 urgent alerts today. Revenue increased by 12% this week. Quick
          actions allow you to manage workflows efficiently.
        </Typography>
      ),
    },

    {
      id: 1,
      title: "Profile",
      content: (
        <Box
          component={"img"}
          src="https://cdn.pixabay.com/photo/2022/11/05/22/11/channel-7572879_1280.jpg"
        />
      ),
    },

    {
      id: 2,
      title: "Settings",
      content: (
        <Typography component={"span"}>
          {" "}
          Manage your account settings, notifications, and privacy preferences.
          Customize your experience to match your needs.
        </Typography>
      ),
    },
  ];
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
          {tabData.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.title}
              sx={styles.tab(theme)}
              aria-controls={`tabpanel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
            />
          ))}
        </Tabs>
      </AppBar>
      {tabData.map((tab) => (
        <TabPanel key={tab.id} value={value} index={tab.id}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};
