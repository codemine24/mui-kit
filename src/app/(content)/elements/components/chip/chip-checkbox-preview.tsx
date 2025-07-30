import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";

interface CheckboxChipProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxChip: React.FC<CheckboxChipProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <Chip
      label={
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            size="small"
            checked={checked}
            style={{ padding: 0, marginRight: 4, color: "inherit" }}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              onChange(e.target.checked);
            }}
          />
          {label}
        </div>
      }
      variant={checked ? "filled" : "outlined"}
      onClick={handleClick}
      color={checked ? "primary" : "default"}
      sx={{
        cursor: "pointer",
        "& .MuiChip-label": {
          paddingLeft: "4px",
        },
      }}
    />
  );
};

export const ChipCheckboxPreview = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Stack direction="row" spacing={1}>
      <CheckboxChip
        label="Checkable Chip"
        checked={checked}
        onChange={setChecked}
      />
    </Stack>
  );
};
