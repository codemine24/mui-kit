export const tabBadgeString = `import { Box, Chip, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { useState } from "react";

interface TabData {
  id: number;
  label: string;
  badge?: string;
}

const tabs: TabData[] = [
  {
    id: 0,
    label: "New customer",
    badge: "99+",
  },
  {
    id: 1,
    label: "Message",
    badge: "45+",
  },
  {
    id: 2,
    label: "Product",
    badge: "12",
  },
  {
    id: 3,
    label: "Notification",
    badge: "8",
  },
];

const tabLabel = (tab: TabData, isActive: boolean) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {tab.label}
      {tab.badge !== undefined && (
        <Chip
          label={tab.badge}
          size="small"
          sx={{
            bgcolor: (theme) =>
              isActive
                ? theme.palette.primary.light
                : theme.palette.mode === "dark"
                ? theme.palette.grey[700]
                : theme.palette.grey[300],
            color: ((theme) =>
              isActive
                ? theme.palette.common.white
                : theme.palette.text.primary),
            fontWeight: 500,
          }}
        />
      )}
    </Box>
  );
};

export const TabBadgePreview = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setActiveTab(newValue);

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
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          "& .MuiTab-root": {
            color: theme.palette.text.primary,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
            py: 1,
            borderRadius: 2,
            minHeight: "auto",
            mr: 1,
          },
          "& .Mui-selected": {
            color: theme.palette.primary.main,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: theme.palette.primary.main,
            height: 3,
            borderRadius: 2,
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tabLabel(tab, activeTab === index)} />
        ))}
      </Tabs>

      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
};`;
