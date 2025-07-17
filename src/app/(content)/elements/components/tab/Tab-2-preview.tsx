import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tab2Preview() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        ReviewsGet a quick summary of the item, including key features,
        specifications, and highlights. This section gives you a general idea of
        what the item offers before diving into more details.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Explore in-depth information, including technical specifications,
        materials, dimensions, and usage instructions. This section provides
        everything you need to fully understand the product or item.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Read user reviews and ratings to learn about real experiences from other
        customers. Gain insights into satisfaction, performance, and any
        potential issues before making your decision.
      </CustomTabPanel>
    </Box>
  );
}
