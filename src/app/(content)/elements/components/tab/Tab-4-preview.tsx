import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function Tab4Preview() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue >= 0 && newValue <= 2) {
      setValue(newValue);
    }
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab icon={<HomeIcon />} iconPosition="start" label="Home" />
      <Tab icon={<AccountCircleIcon />} iconPosition="start" label="Profile" />
      <Tab icon={<SettingsIcon />} iconPosition="start" label="Setting" />
    </Tabs>
  );
}
