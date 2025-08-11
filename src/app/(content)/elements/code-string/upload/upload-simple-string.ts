export const uploadSimpleString = `"use client";

import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography, alpha } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import React, { useRef, useState } from "react";

type FileUploaderProps = {
  accept?: string;
  onFileChange?: (file: File | null) => void;
};

const FileUploader: React.FC<FileUploaderProps> = ({
  accept = "image/*",
  onFileChange,
}) => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    onFileChange?.(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    onFileChange?.(null);
  };

  const handleClick = () => inputRef.current?.click();

  return (
    <Box
      sx={{
        width: ["100%", 400],
        height: 220,
        border: "1px solid",
        borderColor: \`\${alpha(theme.palette.secondary.main, 0.33)}\`,
        borderRadius: 3,
        p: 2,
        textAlign: "center",
        cursor: "pointer",
        transition: "0.25s ease",
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        accept={accept}
        onChange={handleFileSelect}
      />

      {/* Placeholder */}
      {!file && (
        <>
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            Upload file
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Click to browse your machine.
          </Typography>
        </>
      )}

      {/* Preview */}
      {file && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 2,
            overflow: "hidden",
            mx: "auto",
            position: "relative",
          }}
        >
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            loader={() => URL.createObjectURL(file)}
            unoptimized
            width={300}
            height={220}
            style={{ objectFit: "contain" }}
          />

          <IconButton
            size="small"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "rgba(0,0,0,0.4)",
              color: "white",
              "&:hover": { background: "rgba(0,0,0,0.6)" },
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export const UploadSimplePreview = () => {
  const handleFileChange = (file: File | null) => {
    console.log("Selected file:", file);
  };

  return (
    <Box>
      <FileUploader onFileChange={handleFileChange} />
    </Box>
  );
};
`;
