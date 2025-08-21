export const kbdGroupKeyString = `"use client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

// Type definitions
type FormattingOption = {
  name: string;
  shortcut: string;
};

type RowStylesProps = {
  index: number;
  optionsLength: number;
};

type ContentCellStylesProps = {
  optionName: string;
};

const containerStyles: SxProps<Theme> = {
  maxWidth: 500,
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  backgroundColor: "transparent",
  p: "20px",
};

const getRowStyles = ({
  index,
  optionsLength,
}: RowStylesProps): SxProps<Theme> => ({
  borderBottom: index < optionsLength - 1 ? "1px solid #e0e0e0" : "none",
});

const getContentCellStyles = ({
  optionName,
}: ContentCellStylesProps): SxProps<Theme> => ({
  border: "none",
  fontWeight: optionName === "Bold" ? "bold" : "inherit",
  fontStyle: optionName === "Italic" ? "italic" : "inherit",
  textDecoration:
    optionName === "Underline"
      ? "underline"
      : optionName === "Strikethrough"
      ? "line-through"
      : "inherit",
  fontSize: optionName === "Small text" ? "0.8rem" : "inherit",
  textAlign: "left",
  px: 0,
});

const shortcutCellStyles: SxProps<Theme> = {
  border: "none",
  textAlign: "right",
  px: 0,
};

const keyStyles: React.CSSProperties = {
  padding: "2px 6px",
  borderRadius: "4px",
  display: "inline-block",
  border: "1px solid #999",
};

const plusSignStyles: React.CSSProperties = {
  margin: "0 4px",
  color: "#666",
};

export const KbdGroupKeyPreview = () => {
  const formattingOptions: FormattingOption[] = [
    { name: "Bold", shortcut: "Ctrl + b" },
    { name: "Italic", shortcut: "Ctrl + i" },
    { name: "Underline", shortcut: "Ctrl + u" },
    { name: "Strikethrough", shortcut: "Ctrl + Alt + u" },
    { name: "Small text", shortcut: "Ctrl + s" },
  ];

  return (
    <TableContainer component={Paper} elevation={0} sx={containerStyles}>
      <Table size="small">
        <TableBody>
          {formattingOptions.map((option, index) => (
            <TableRow
              key={index}
              sx={getRowStyles({
                index,
                optionsLength: formattingOptions.length,
              })}
            >
              <TableCell sx={getContentCellStyles({ optionName: option.name })}>
                {option.name}
              </TableCell>
              <TableCell sx={shortcutCellStyles}>
                {option.shortcut.split(" + ").map((key, i, array) => (
                  <span key={i}>
                    <span style={keyStyles}>{key}</span>
                    {i < array.length - 1 && (
                      <span style={plusSignStyles}>+</span>
                    )}
                  </span>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
`;
