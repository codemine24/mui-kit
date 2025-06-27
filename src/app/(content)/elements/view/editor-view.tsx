"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { Editor1IndexPageCodeString } from "../code-string/editor/editor-1";
import { Editor1ClassesCodeString } from "../code-string/editor/editor-1/classes";
import { Editor1CodeHighlightBlock } from "../code-string/editor/editor-1/components/code-highlight-block";
import { editor1CodeHighlightBlockCSSString } from "../code-string/editor/editor-1/components/code-highlight-block-css";
import { Editor1HeadingBlockCodeString } from "../code-string/editor/editor-1/components/heading-block";
import { Editor1ImageBlockCodeString } from "../code-string/editor/editor-1/components/image-block";
import { Editor1LinkBlockCodeString } from "../code-string/editor/editor-1/components/link-block";
import { Editor1ToolbarItemCodeString } from "../code-string/editor/editor-1/components/toolbar-item";
import { Editor1CodeString } from "../code-string/editor/editor-1/editor";
import { Editor1StyleCodeString } from "../code-string/editor/editor-1/style";
import { Editor1ToolbarCodeString } from "../code-string/editor/editor-1/toolbar";
import { Editor1TypesCodeString } from "../code-string/editor/editor-1/types";
import { EditorQuillString } from "../code-string/editor/quill-editor/editor-quill-string";
import Editor1 from "../components/editor/editor-1";
import { EditorQuillPreview } from "../components/editor/editor-quill/editor-quill-preview";

const sections = [
  {
    id: "editor-1",
    title: "Quill editor",
    description:
      "If you need a very basic editor with minimal functionality, this quill editor is for you.",
    codeString: EditorQuillString,
    preview: <EditorQuillPreview />,
  },
  {
    id: "editor-2",
    title: "Tiptap editor (complex)",
    description:
      "Tiptap editor kind of complex and large editor. Use this variant if you need huge functionality and full control over the editor.",
    codeString: [
      { name: "index.tsx", code: Editor1IndexPageCodeString },
      { name: "editor.tsx", code: Editor1CodeString },
      { name: "classes.ts", code: Editor1ClassesCodeString },
      {
        name: "code-highlight-block.tsx",
        code: Editor1CodeHighlightBlock,
      },
      { name: "styles.tsx", code: Editor1StyleCodeString },
      { name: "toolbar.tsx", code: Editor1ToolbarCodeString },
      { name: "types.ts", code: Editor1TypesCodeString },
      {
        name: "toolbar-item.tsx",
        code: Editor1ToolbarItemCodeString,
      },
      {
        name: "heading-block.tsx",
        code: Editor1HeadingBlockCodeString,
      },
      {
        name: "image-block.tsx",
        code: Editor1ImageBlockCodeString,
      },
      {
        name: "link-block.tsx",
        code: Editor1LinkBlockCodeString,
      },
      {
        name: "code-highlight-block.css",
        code: editor1CodeHighlightBlockCSSString,
      },
    ],
    preview: <Editor1 />,
  },
];

export const EditorView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Editor", path: "" },
        ]}
      />
      <PageTitle
        title="Text Editor"
        description="Material ui is missing rich text editor. So we've added it using a light weight but powerful package @tiptap/react which is fully compatible with mui."
      />
      <Divider sx={{ my: 4 }} />
      <Divider sx={{ my: 4 }} />

      {/* Alert Section */}
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          <SectionTitle
            title={section.title}
            description={section.description || ""}
            id={section.id}
          />

          <CodePreviewCopyWrapper
            codeString={section.codeString}
            preview={section.preview}
          />
        </Box>
      ))}
    </Box>
  );
};
