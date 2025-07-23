export const tabBasicString=   `import { SxProps, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

interface TabPanelProps {
  id: string;
  activeTab: string;
  children?: React.ReactNode;
  sx?: SxProps;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, id, activeTab, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={id !== activeTab}
      id={\`simple-tabpanel-\${id}\`}
      aria-labelledby={\`simple-tab-\${id}\`}
      {...other}
    >
      {activeTab === id && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const tabs = [
  {
    id: "one",
    label:
      "Find helpful answers and guides to improve your experience with our tools and services",
  },
  {
    id: "two",
    label: "Guide",
  },
  {
    id: "three",
    label: "Help",
  },
];

export default function TabBasicPreview() {
  const [activeTab, setActiveTab] = React.useState<string>("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "one":
        return (
          <Typography>
            Find helpful answers and guides to improve your experience with our
            tools and services
          </Typography>
        );
      case "two":
        return <Typography>Guide</Typography>;
      case "three":
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
            <CustomTabPanel
              id={tab.label}
              activeTab={activeTab}
              key={tab.id}
              sx={{ textTransform: "none" }}
            />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
}`