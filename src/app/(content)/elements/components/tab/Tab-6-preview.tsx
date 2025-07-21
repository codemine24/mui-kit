"use client";
import { Box, Chip, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { useState } from "react";

interface TabData {
  label: string;
  count?: number;
  content: string;
}

const tabData: TabData[] = [
  {
    label: "Tab 1",
    count: "99+",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    label: "Tab 2",
    count: "45+",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    label: "Tab 3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    label: "Tab 4",
    count: "8",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
];

const tabLabel = (
  tab: TabData,
  index: number,
  isActive: boolean,
  theme: ReturnType<typeof useTheme>
) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {tab.label}
      {tab.count !== undefined && (
        <Chip
          label={tab.count}
          size="small"
          sx={{
            bgcolor: isActive
              ? theme.palette.primary.light
              : theme.palette.mode === "dark"
              ? theme.palette.grey[700]
              : theme.palette.grey[300],
            color: isActive
              ? theme.palette.common.white
              : theme.palette.text.primary,
            fontWeight: 500,
          }}
        />
      )}
    </Box>
  );
};

export default function Tab6Preview() {
  const [value, setValue] = useState<number>(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          "& .MuiTab-root": {
            color: theme.palette.text.primary,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
            py: 1,
            borderRadius: 2,
            minHeight: "auto",
            mr: 1,
          },
          "& .Mui-selected": {
            color: theme.palette.primary.main,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: theme.palette.primary.main,
            height: 3,
            borderRadius: 2,
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={tabLabel(tab, index, value === index, theme)}
          />
        ))}
      </Tabs>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body1">{tabData[value].content}</Typography>
      </Box>
    </Box>
  );
}
