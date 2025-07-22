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
    icon: <SettingsIcon />,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, optio? Amet, quae! Praesentium accusamus eos mollitia, autem nulla corrupti consectetur explicabo magni qui necessitatibus adipisci amet, nesciunt, possimus ducimus nam?",
  },
  {
    id: 3,
    title: "Item Three",
    icon: <SettingsIcon />,
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
];

// export const Tab12Preview = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         bgcolor: "background.paper",
//         display: "flex",
//         height: 224,
//       }}
//     >
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: "divider", minWidth: 120 }}
//       >
//         {tabData.map((tab, index) => (
//           <Tab
//             key={tab.id}
//             label={tab.title}
//             id={`vertical-tab-${index}`}
//             aria-controls={`vertical-tabpanel-${index}`}
//           />
//         ))}
//       </Tabs>

//       {tabData.map((tab, index) => (
//         <Box
//           key={tab.id}
//           role="tabpanel"
//           hidden={value !== index}
//           id={`vertical-tabpanel-${index}`}
//           aria-labelledby={`vertical-tab-${index}`}
//           sx={{
//             flex: 1,
//             overflow: "auto", // Make content area scrollable
//             maxHeight: "100%",
//           }}
//         >
//           {value === index && (
//             <Box sx={{ p: 3 }}>
//               <Typography>{tab.content}</Typography>
//             </Box>
//           )}
//         </Box>
//       ))}
//     </Box>
//   );
// };

export const Tab12Preview = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: 140,
          "& .MuiTabs-indicator": {
            display: "none",
          },
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
                bgcolor: "action.selected", // Active tab background color
              },
              "&:hover": {
                bgcolor: "action.hover", // Hover state
              },
            }}
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
            overflow: "auto",
          }}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              {typeof tab.content === "string" ? (
                <Typography>{tab.content}</Typography>
              ) : (
                tab.content
              )}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};
