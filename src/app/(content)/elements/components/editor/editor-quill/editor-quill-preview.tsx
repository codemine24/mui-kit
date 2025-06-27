"use client";

import { Box } from "@mui/material";
import "quill/dist/quill.snow.css";
import * as React from "react";
import Editor from "./editor";

export const EditorQuillPreview = () => {
  const [content, setContent] = React.useState();
  const quillRef = React.useRef(null);

  const handleTextChange = () => {
    if (quillRef.current) {
      const html = quillRef.current.root.innerHTML;
      setContent(html);
    }
  };
  console.log(content, "content...");

  const valueComingFromBackend = `<h2>Welcome to the Rich Text Editor</h2><p>This demonstrates all available formatting features:</p><p><br></p><ol><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>list 1</li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>list2</li></ol><p><br></p><h2>Text Formatting:</h2><p><strong>Bold text </strong><em>Italic text </em><u>Underlined text </u><sub> and Subscript this is amazing</sub></p>`;

  return (
    <Box sx={{ width: "100%" }}>
      <Editor
        value={valueComingFromBackend}
        onTextChange={handleTextChange}
        ref={quillRef}
      />
    </Box>
  );
};
