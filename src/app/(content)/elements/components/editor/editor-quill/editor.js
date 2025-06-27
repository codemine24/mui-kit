import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import Quill from "quill";
import "./quill-styles.css";

const Editor = forwardRef(({ value, onTextChange }, ref) => {
  const containerRef = useRef(null);
  const defaultValueRef = useRef(value);
  const onTextChangeRef = useRef(onTextChange);

  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange;
  });

  useEffect(() => {
    ref.current?.enable(!readOnly);
  }, [ref, readOnly]);

  useEffect(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );
    const quill = new Quill(editorContainer, {
      theme: "snow",
    });

    ref.current = quill;

    const initialValue = defaultValueRef.current;
    if (initialValue) {
      if (typeof initialValue === "string") {
        // It's HTML
        quill.clipboard.dangerouslyPasteHTML(initialValue);
      } else {
        // Assume it's Delta
        quill.setContents(initialValue);
      }
    }

    quill.on(Quill.events.TEXT_CHANGE, (...args) => {
      onTextChangeRef.current?.(...args);
    });

    quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
      onSelectionChangeRef.current?.(...args);
    });

    return () => {
      ref.current = null;
      container.innerHTML = "";
    };
  }, [ref]);

  return <div ref={containerRef}></div>;
});

Editor.displayName = "Editor";

export default Editor;
