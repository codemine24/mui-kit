import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function Tab3Preview() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="Find helpful answers and guides to improve your experience with our tools and services"
          wrapped
        />
        <Tab value="two" label="Guide" />
        <Tab value="three" label="Help" />
      </Tabs>
    </Box>
  );
}
