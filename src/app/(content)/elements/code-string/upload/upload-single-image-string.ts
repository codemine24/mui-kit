export const uploadSingleImageString = `import { Iconify } from "@/components/iconify";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Fade, IconButton, Stack, Typography, Zoom } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  multiple?: boolean;
  accept?: { [mime: string]: string[] };
  onFilesChange?: (files: File[]) => void;
};

const FileUploader: React.FC<FileUploaderProps> = ({
  multiple = false,
  accept = { "image/*": [] },
  onFilesChange,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = multiple
        ? [...files, ...acceptedFiles]
        : [acceptedFiles[0]];
      setFiles(newFiles);
      onFilesChange?.(newFiles);
    },
    [multiple, files, onFilesChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    multiple,
    onDrop,
  });

  const handleRemove = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* Upload Box */}
      <Box
        {...getRootProps()}
        sx={{
          width: ["100%", 550],
          height: "100%",
          border: "1px dotted",
          borderColor: "secondary.main",
          borderRadius: 3,
          px: 4,
          py: 8,
          textAlign: "center",
          cursor: "pointer",
          transition: "0.25s ease",
          backgroundColor: "background.paper",
        }}
      >
        <input {...getInputProps()} />

        {/* Placeholder */}
        <Iconify icon="formkit:uploadcloud" width={50} height={50} />
        <Typography color="secondary.main">
          {isDragActive ? "Drop files here..." : "Drop or select file"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Drop files here or click to browse your machine.
        </Typography>
      </Box>

      {/* Image Previews */}
      {files.length > 0 && (
        <Stack direction="row" gap={2} flexWrap="wrap" mt={3}>
          {files.map((file, index) => (
            <Fade in key={index}>
              <Box
                sx={{
                  position: "relative",
                  width: 100,
                  height: 100,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid #ddd",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <Zoom in>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    fill
                    objectFit="cover"
                  />
                </Zoom>
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
                    handleRemove(index);
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </Fade>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export const UploadSingleImagePreview = () => {
  const handleFilesChange = (files: File[]) => {
    console.log("Selected files:", files);
  };
  return (
    <Box>
      <FileUploader onFilesChange={handleFilesChange} />
    </Box>
  );
};
`;
