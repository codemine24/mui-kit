import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

const tabData = [
  {
    id: 1,
    title: "Item One",
    icon: <SettingsIcon />,
  },
  {
    id: 2,
    title: "Item Two",
    icon: <SettingsIcon />,
  },
  {
    id: 3,
    title: "Item Three",
    icon: <SettingsIcon />,
  },
  {
    id: 4,
    title: "Item Four",
  },
  {
    id: 5,
    title: "Item Five",
  },
];

export const Tab12Preview = () => {
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
    <Box
      sx={{
        display: "flex",
        height: 300,
      }}
    >
      <Tabs
        orientation="vertical"
        value={activeTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: 540,
          "& .MuiTabs-indicator": {
            display: "none",
          },
          border: 1, 
          width: "100%",
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={tab.id}
            icon={tab.icon}
            iconPosition="start"
            label={tab.title}
            id={`vertical-tab-${index}`}
            aria-controls={`vertical-tabpanel-${index}`}
            sx={{
              textTransform: "none",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              borderRadius: "8px",
              bgcolor: "background.paper",
              my: 0.5,
              "&.Mui-selected": {
                bgcolor: "action.selected",
              },
              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          />
        ))}
      </Tabs>

      {tabData.map((tab, index) => (
        <Box
          key={tab.id}
          role="tabpanel"
          hidden={activeTab !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          sx={{
            flex: 1,
            flexGrow: 1,
            overflow: "auto",
            border: 1, 
            width: "100%",
          }}
        >
          {renderContent()}
        </Box>
      ))}
    </Box>
  );
};
