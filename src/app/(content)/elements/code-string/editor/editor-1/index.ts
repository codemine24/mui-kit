export const Editor1IndexPageCodeString = `import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Editor } from "./editor";

const defaultValue = \`
  <h2>Welcome to the Editor</h2>
  <h4>Getting Started</h4>
  <p>
    This editor lets you create and format content with ease. 
    You can add headings, style text, insert code, and much more.
  </p>
  <ul>
    <li>Use <code>&lt;h2&gt;</code> for main headings</li>
    <li>Insert <code>&lt;p&gt;</code> for paragraphs</li>
    <li>Include <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> for lists</li>
  </ul>
  <p>
    Try selecting text to see available formatting options. Happy writing!
  </p>
\`;

export default function Editor1() {
  const [content, setContent] = useState(defaultValue);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Editor
        value={content}
        onChange={(value) => setContent(value)}
        sx={{ maxHeight: 720 }}
      />
    </Stack>
  );
}`;
