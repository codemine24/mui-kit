import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
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
};

const tabData = [
  {
    id: 0,
    title: "Dashboard",
    content: (
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1752436365654-de0ebc45784b?&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        sx={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
    ),
  },
  {
    id: 1,
    title: "Overview",
    content: (
      <Typography component={"span"}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde
        labore sint exercitationem voluptatem accusantium sunt nihil quo
        perferendis, asperiores neque, ipsa ratione et ipsam dicta dolores modi
        ea vel!
      </Typography>
    ),
  },
  {
    id: 2,
    title: "Overview",
    content: (
      <Typography component={"span"}>
        {" "}
        Your dashboard shows key metrics: 15 new orders, 32 pending tasks, and 5
        urgent alerts today. Revenue increased by 12% this week. Quick actions
        allow you to manage workflows efficiently.
      </Typography>
    ),
  },
];

export default function TabBasicPreview() {
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
          {tabData.map((tab) => (
            <Tab
              label={tab.title}
              key={tab.id}
              sx={{ textTransform: "none" }}
            />
          ))}
        </Tabs>
      </Box>

      {tabData.map((tab) => (
        <CustomTabPanel value={value} index={tab.id} key={tab.id}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
