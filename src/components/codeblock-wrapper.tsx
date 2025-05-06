"use client";
import { Iconify } from "@/components/iconify";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockWrapperProps {
  codeString: string;
}

const CodeBlockWrapper: React.FC<CodeBlockWrapperProps> = ({ codeString }) => {
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [icon, setIcon] = useState<string>("eva:copy-fill");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopySuccess("Copied!");
      setIcon("eva:checkmark-fill");
      setTimeout(() => {
        setCopySuccess("");
        setIcon("solar:copy-line-duotone");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Copy Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
        onClick={handleCopy}
      >
        <Iconify icon={icon} />
        {copySuccess ? "Copied" : "Copy"}
      </Button>

      {/* Code Block */}
      <SyntaxHighlighter language="typescript" style={oneDark}>
        {codeString}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlockWrapper;
