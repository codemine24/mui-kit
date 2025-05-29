"use client";

import React, { useEffect, useRef } from "react";
import { createRoot, Root } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { CssBaseline } from "@mui/material";
import AppProvider from "@/providers/app-provider"; // Your provider that includes ThemeProvider, etc.

interface IframePreviewProps {
    children: React.ReactNode;
    width: string;
    height?: string;
}

export const IframePreview: React.FC<IframePreviewProps> = ({
    children,
    width,
    height = "100%",
}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const rootRef = useRef<Root | null>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;

        // Reset iframe content
        doc.open();
        doc.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <base target="_parent" />
         <style>
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
            //   overflow-x: hidden;
              font-family: Roboto, sans-serif;
            }
            #root {
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 16px;
            }
            ::-webkit-scrollbar {
              display: none;
            }
            * {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
          </style>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `);
        doc.close();

        const mountPoint = doc.getElementById("root");
        if (!mountPoint) return;

        // ✅ Create a new Emotion cache for the iframe's head
        const cache = createCache({
            key: "mui-iframe",
            container: doc.head,
        });

        rootRef.current?.unmount(); // Clean up previous render
        rootRef.current = createRoot(mountPoint);
        rootRef.current.render(
            <CacheProvider value={cache}>
                <AppProvider>
                    <CssBaseline />
                    {children}
                </AppProvider>
            </CacheProvider>
        );

        return () => {
            rootRef.current?.unmount();
        };
    }, [children]);

    return (
        <iframe
            ref={iframeRef}
            style={{
                width: "100%",
                height: "100%",
                maxWidth: width,
                maxHeight: height,
                border: "none",
                display: 'block',
            }}
        />
    );
};
