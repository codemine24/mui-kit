import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function Tab4Preview() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const CustomTab = styled(Tab)(() => {
    return {
      [`&.${tabClasses.root}`]: {
        paddingBottom: 0,
        marginBottom: 0,
      },
    };
  });

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <CustomTab icon={<HomeIcon />} iconPosition="start" label="Home" />
      <CustomTab icon={<AccountCircleIcon />} iconPosition="start" label="Profile" />
      <CustomTab icon={<SettingsIcon />} iconPosition="start" label="Setting" />
    </Tabs>
  );
}
