import { Tab, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

const tabs = [
  {
    id: 0,
    label: "General",
  },
  {
    id: 1,
    label: "Guide",
  },
  {
    id: 2,
    label: "Help",
  },
];

export default function TabBasicPreview() {
  const [activeTab, setActiveTab] = React.useState<number>(0);

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
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              sx={{ textTransform: "none" }}
            />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
}
