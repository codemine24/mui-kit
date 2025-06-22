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
import { Editor1CodeString } from "../code-string/editor/editor-1/editor";
import { Editor1StyleCodeString } from "../code-string/editor/editor-1/style";
import { Editor1ToolbarCodeString } from "../code-string/editor/editor-1/toolbar";
import { Editor1TypesCodeString } from "../code-string/editor/editor-1/types";
import Editor1 from "../components/editor/editor-1";

const sections = [
  {
    id: "editor-1",
    title: "Editor",
    description:
      "Use Material UI soft alerts with extended design. No extra package required.",
    codeString: [
      { name: "index.tsx", code: Editor1IndexPageCodeString },
      { name: "editor.tsx", code: Editor1CodeString },
      { name: "toolbar.tsx", code: Editor1ToolbarCodeString },
      { name: "types.ts", code: Editor1TypesCodeString },
      { name: "styles.tsx", code: Editor1ClassesCodeString },
      { name: "classes.ts", code: Editor1StyleCodeString },
      {
        name: "components/toolbar-item.tsx",
        code: Editor1ToolbarCodeString,
      },
      {
        name: "components/heading-block.tsx",
        code: Editor1HeadingBlockCodeString,
      },
      {
        name: "components/image-block.tsx",
        code: Editor1ImageBlockCodeString,
      },
      {
        name: "components/link-block.tsx",
        code: Editor1LinkBlockCodeString,
      },
      {
        name: "components/code-highlight-block.tsx",
        code: Editor1CodeHighlightBlock,
      },
      {
        name: "components/code-highlight-block.css",
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
        title="Editor"
        description="Text editor with extended design, and functionality. "
      />

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
