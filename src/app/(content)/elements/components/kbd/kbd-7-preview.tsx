"use client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export const Kbd7Preview = () => {
  // Array of objects containing the formatting options and shortcuts
  const formattingOptions = [
    { name: "Bold", shortcut: "Ctrl + b" },
    { name: "Italic", shortcut: "Ctrl + i" },
    { name: "Underline", shortcut: "Ctrl + u" },
    { name: "Strikethrough", shortcut: "Ctrl + s" },
    { name: "Small text", shortcut: "Ctrl + s" }, // Note: This has same shortcut as strikethrough in your example
  ];

  return (
    <TableContainer component={Paper} elevation={0} sx={{ maxWidth: 500 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Text Formatting Shortcuts
      </Typography>
      <Table size="small">
        <TableBody>
          {formattingOptions.map((option, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{
                  border: "none",
                  fontWeight: option.name === "Bold" ? "bold" : "inherit",
                }}
              >
                {option.name}
              </TableCell>
              <TableCell sx={{ border: "none" }}>{option.shortcut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
