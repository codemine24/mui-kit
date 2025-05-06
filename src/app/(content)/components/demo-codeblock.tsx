"use client";
import CodeBlockWrapper from "@/components/codeblock-wrapper";

const codeString = `import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: { main: "#3e3e63" },
  secondary: { main: "#333" },
  background: {
    default: "#f9f9f9",
    paper: "#ffffff",
  },
  text: {
    primary: "#111",
    secondary: "#555",
  },
  divider: "#ddd",
};`;

const CodeBlock = () => {
  return (
    <div>
      <h1>Code Example with wrapper</h1>
      <CodeBlockWrapper codeString={codeString} />
    </div>
  );
};

export default CodeBlock;
