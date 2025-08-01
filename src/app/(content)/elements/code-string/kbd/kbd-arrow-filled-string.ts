export const kbdArrowFilledString = `import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const IconKey = styled("kbd")(({ theme }) => ({
  fontSize: 40,
  padding: 5,
  borderRadius: 8,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  border: \`1px solid \${theme.palette.divider}\`,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  transition: "all 0.2s ease",
}));

type IconStyles = {
  fontSize: number;
};

const iconStyles: IconStyles = {
  fontSize: 30,
};

export const KbdArrowFilledPreview = () => {
  return (
    <Stack direction="row" spacing={2}>
      <IconKey>
        <ArrowDropUpIcon sx={iconStyles} />
      </IconKey>
      <IconKey>
        <ArrowRightIcon sx={iconStyles} />
      </IconKey>
      <IconKey>
        <ArrowDropDownIcon sx={iconStyles} />
      </IconKey>
      <IconKey>
        <ArrowLeftIcon sx={iconStyles} />
      </IconKey>
    </Stack>
  );
};
`;
