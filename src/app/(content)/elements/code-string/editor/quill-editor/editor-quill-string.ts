export const EditorQuillString = `import { ExternalPackageAlert } from "@/components/external-package-alert";
import { Box } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export const EditorQuillPreview = () => {
  const [value, setValue] = useState("");
  console.log(value, "value.....");

  return (
    <Box sx={{ width: "100%" }}>
      <ExternalPackageAlert
        packages={[
          {
            name: "react-quill-new",
            url: "https://www.npmjs.com/package/react-quill-new",
          },
        ]}
        force={true}
      />

      <Box sx={{ minHeight: 100 }}>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </Box>
    </Box>
  );
};`;
