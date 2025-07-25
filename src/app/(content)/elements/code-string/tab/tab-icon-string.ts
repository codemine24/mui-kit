export const tabIconString = `import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, styled, Typography } from "@mui/material";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export const TabIconPreview = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const CustomTab = styled(Tab)(() => {
    return {
      [\`&.\${tabClasses.root}\`]: {
        paddingBottom: 0,
        marginBottom: 0,
      },
    };
  });

  const tabs = [
    {
      id:1,
      label: "Home",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      label: "Profile",
      icon: <AccountCircleIcon />,
    },
    {
      id: 3,
      label: "Setting",
      icon: <SettingsIcon />,
    },
  ];

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
    <Box>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        {tabs.map((item) => (
          <CustomTab
            icon={item.icon}
            key={item.id}
            iconPosition="start"
            label={item.label}
          />
        ))}
      </Tabs>

      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
};`