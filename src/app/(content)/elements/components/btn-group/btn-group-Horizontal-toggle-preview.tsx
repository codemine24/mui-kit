import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { alpha, Stack } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import * as React from "react";

export const BtnGroupHorizontalTogglePreview = () => {
  const [view, setView] = React.useState("list");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };

  return (
    <>
      <Stack spacing={2}>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleChange}
          sx={{
            [`& .${toggleButtonGroupClasses.selected}`]: {
              bgcolor: alpha("#00A66E", 0.1),
              color: "#00A66E",
            },
          }}
        >
          <ToggleButton value="list" aria-label="list" sx={{}}>
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="quilt" aria-label="quilt">
            <ViewQuiltIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleChange}
          sx={{
            [`& .${toggleButtonGroupClasses.selected}`]: {
              bgcolor: alpha("#FFAB00", 0.1),
              color: "#FFAB00",
            },
          }}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="quilt" aria-label="quilt">
            <ViewQuiltIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleChange}
          sx={{
            [`& .${toggleButtonGroupClasses.selected}`]: {
              bgcolor: alpha("##8D33FF", 0.1),
              color: "#8D33FF",
            },
          }}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="quilt" aria-label="quilt">
            <ViewQuiltIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};
