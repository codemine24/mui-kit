export const tabVerticalString = `import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const TabVerticalPreview = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabs = [
    {
      id: 1,
      title: "Item One",
    },
    {
      id: 2,
      title: "Item Two",
    },
    {
      id: 3,
      title: "Item Three",
    },
    {
      id: 4,
      title: "Item Four",
    },
    {
      id: 5,
      title: "Item Five",
    },
    {
      id: 6,
      title: "Item Six",
    },
    {
      id: 7,
      title: "Item Seven",
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
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={activeTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", minWidth: 120 }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            label={tab.title}
            id={\`vertical-tab-\${index}\`}
            aria-controls={\`vertical-tabpanel-\${index}\`}
          />
        ))}
      </Tabs>

      {tabs.map((tab, index) => (
        <Box
          key={tab.id}
          role="tabpanel"
          hidden={activeTab !== index}
          id={\`vertical-tabpanel-\${index}\`}
          aria-labelledby={\`vertical-tab-\${index}\`}
          sx={{
            flex: 1,
            overflow: "auto",
            maxHeight: "100%",
          }}
        >
          {renderContent()}
        </Box>
      ))}
    </Box>
  );
};`