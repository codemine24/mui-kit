import Box from "@mui/material/Box";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

// Tab data kept outside JSX for better maintainability
const tabData = [
  {
    id: 1,
    label: "Dashboard",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates voluptatum doloremque quia quae quod, quibusdam voluptatem quas voluptate quidem. Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    label: "Analytics",
    content:
      "Dolor sit amet consectetur adipisicing elit. Quisquam voluptates voluptatum doloremque quia quae quod, quibusdam voluptatem quas voluptate quidem. Lorem ipsum dolor sit.",
  },
  {
    id: 3,
    label: "Settings",
    content:
      "Amet consectetur adipisicing elit. Quisquam voluptates voluptatum doloremque quia quae quod, quibusdam voluptatem quas voluptate quidem. Lorem ipsum dolor sit amet consectetur.",
  },
];

export const Tab10Preview = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        sx={{
          "& .MuiTab-root": {
            [`&.${tabClasses.selected}`]: {
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
            },
            marginRight: "4px",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {tabData.map((tab) => (
          <Tab key={tab.id} label={tab.label} aria-label={`${tab.label} tab`} />
        ))}
      </Tabs>

      {tabData.map((tab, index) => (
        <Box
          key={tab.id}
          role="tabpanel"
          hidden={activeTab !== index}
          sx={{ p: 1 }}
        >
          {tab.content}
        </Box>
      ))}
    </Box>
  );
};
