"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
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
import Editor1 from "../components/editor/editor-1";
import { ExternalPackageAlert } from "@/components/external-package-alert";

const sections = [
  {
    id: "editor-1",
    title: "All in one editor",
    description:
      "We packaged almost every possible functionality that a rich text editor can have. You can remove some of them if you don't need.",
    codeString: [
      { name: "index.tsx", code: Editor1IndexPageCodeString },
      { name: "editor.tsx", code: Editor1CodeString },
      { name: "classes.ts", code: Editor1ClassesCodeString },
      {
        name: "code-highlight-block.tsx",
        code: Editor1CodeHighlightBlock
      },
      { name: "styles.tsx", code: Editor1StyleCodeString },
      { name: "toolbar.tsx", code: Editor1ToolbarCodeString },
      { name: "types.ts", code: Editor1TypesCodeString },
      {
        name: "toolbar-item.tsx",
        code: Editor1ToolbarItemCodeString
      },
      {
        name: "heading-block.tsx",
        code: Editor1HeadingBlockCodeString
      },
      {
        name: "image-block.tsx",
        code: Editor1ImageBlockCodeString
      },
      {
        name: "link-block.tsx",
        code: Editor1LinkBlockCodeString
      },
      {
        name: "code-highlight-block.css",
        code: editor1CodeHighlightBlockCSSString
      }
    ],
    preview: <Editor1 />
  }
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
          { label: "Editor", path: "" }
        ]}
      />
      <PageTitle
        title="Text Editor"
        description="Material ui is missing rich text editor. So we've added it using a light weight but powerful package @tiptap/react which is fully compatible with mui."
      />
      <Divider sx={{ my: 4 }} />
      <Divider sx={{ my: 4 }} />
      <ExternalPackageAlert
        packages={[
          {
            name: "@tiptap/react",
            url: "https://www.npmjs.com/package/@tiptap/react"
          },
          {
            name: "@tiptap/starter-kit",
            url: "https://www.npmjs.com/package/@tiptap/starter-kit"
          },
          {
            name: "@tiptap/extension-image",
            url: "https://www.npmjs.com/package/@tiptap/extension-image"
          },
          {
            name: "@tiptap/extension-text-align",
            url: "https://www.npmjs.com/package/@tiptap/extension-text-align"
          },
          {
            name: "@tiptap/extension-placeholder",
            url: "https://www.npmjs.com/package/@tiptap/extension-placeholder"
          },
          {
            name: "@tiptap/extension-code-block-lowlight",
            url: "https://www.npmjs.com/package/@tiptap/extension-code-block-lowlight"
          },
          {
            name: "lowlight",
            url: "https://www.npmjs.com/package/lowlight"
          },
          {
            name: "@iconify/react",
            url: "https://www.npmjs.com/package/@iconify/react"
          },
          {
            name: "@tiptap/extension-link",
            url: "https://www.npmjs.com/package/@tiptap/extension-link"
          },
          {
            name: "@tiptap/extension-underline",
            url: "https://www.npmjs.com/package/@tiptap/extension-underline"
          }
        ]}
      />

      {/* Alert Section */}
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          <SectionTitle
            title={section.title}
            description={section.description || ""}
            id={section.id}
          />

          <CodePreviewCopyWrapper codeString={section.codeString} preview={section.preview} />
        </Box>
      ))}
    </Box>
  );
};
