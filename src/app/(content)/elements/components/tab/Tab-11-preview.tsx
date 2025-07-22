import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

const tabData = [
  {
    id: 1,
    title: "Item One",
    content: (
      <>
        <Typography component="span">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          optio? Amet, quae! Praesentium accusamus eos mollitia, autem nulla
          corrupti consectetur explicabo magni qui necessitatibus adipisci amet,
          nesciunt, possimus ducimus nam?,
        </Typography>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1752436365654-de0ebc45784b?&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sx={{ width: "100%" }}
        />
      </>
    ),
  },
  {
    id: 2,
    title: "Item Two",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, optio? Amet, quae! Praesentium accusamus eos mollitia, autem nulla corrupti consectetur explicabo magni qui necessitatibus adipisci amet, nesciunt, possimus ducimus nam?",
  },
  {
    id: 3,
    title: "Item Three",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, optio? Amet, quae! Praesentium accusamus eos mollitia,",
  },
  {
    id: 4,
    title: "Item Four",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, optio? Amet, quae! Praesentium accusamus eos mollitia,",
  },
  {
    id: 5,
    title: "Item Five",
    content: (
      <>
        <Typography component="span">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          optio? Amet, quae! Praesentium accusamus eos mollitia, autem nulla
          corrupti consectetur explicabo magni qui necessitatibus adipisci amet,
          nesciunt, possimus ducimus nam?,
        </Typography>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1752436365654-de0ebc45784b?&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sx={{ width: "100%" }}
        />
      </>
    ),
  },
  {
    id: 6,
    title: "Item Six",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, optio? Amet, quae! Praesentium accusamus eos mollitia,",
  },
  {
    id: 7,
    title: "Item Seven",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, optio? Amet, quae! Praesentium accusamus eos mollitia, autem nulla corrupti consectetur explicabo magni qui necessitatibus adipisci amet, nesciunt, possimus ducimus nam?",
  },
];

export const Tab11Preview = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", minWidth: 120 }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={tab.id}
            label={tab.title}
            id={`vertical-tab-${index}`}
            aria-controls={`vertical-tabpanel-${index}`}
          />
        ))}
      </Tabs>

      {tabData.map((tab, index) => (
        <Box
          key={tab.id}
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          sx={{
            flex: 1,
            overflow: "auto", // Make content area scrollable
            maxHeight: "100%",
          }}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{tab.content}</Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};
