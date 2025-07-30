import * as React from "react";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

interface CheckboxChipProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  useErrorColor?: boolean;
}

const CheckboxChip: React.FC<CheckboxChipProps> = ({
  label,
  checked,
  onChange,
  useErrorColor = false,
}) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <Chip
      label={
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            size="medium"
            checked={checked}
            style={{ padding: 0, marginRight: 4, color: "inherit" }}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              onChange(e.target.checked);
            }}
          />
          {label}
        </Box>
      }
      variant="filled"
      onClick={handleClick}
      color={checked ? (useErrorColor ? "error" : "primary") : "default"}
      sx={{
        textTransform: "uppercase",
        borderRadius: 2,
        cursor: "pointer",
        [`& .${chipClasses.label}`]: {
          paddingLeft: "4px",
        },
      }}
    />
  );
};

export const ChipCheckboxPreview = () => {
  const [onlineChecked, setOnlineChecked] = React.useState(false);
  const [offlineChecked, setOfflineChecked] = React.useState(false);

  return (
    <Stack direction="row" spacing={2}>
      <CheckboxChip
        label="Online"
        checked={onlineChecked}
        onChange={setOnlineChecked}
      />
      <CheckboxChip
        label="Offline"
        checked={offlineChecked}
        onChange={setOfflineChecked}
        useErrorColor={true}
      />
    </Stack>
  );
};
