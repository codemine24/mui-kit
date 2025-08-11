export const uploadMultipleFileInputString = `import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Fade,
  Zoom,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

type FileUploaderProps = {
  accept?: string;
  multiple?: boolean;
  onFilesChange?: (files: File[]) => void;
  label?: string;
};

const FileUploader: React.FC<FileUploaderProps> = ({
  accept = ".svg,.png,.jpg,.gif",
  multiple = false,
  onFilesChange,
  label,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const updatedFiles = multiple
      ? [...files, ...selectedFiles]
      : selectedFiles;
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
    e.target.value = ""; // reset so same file(s) can be reselected
  };

  const handleRemove = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const labelText = multiple
    ? files.length > 0
      ? \`\${files.length} file(s) selected\`
      : "No files chosen"
    : files.length > 0
    ? files[0].name
    : "No file chosen";

  return (
    <Box
      width={["100%", 450, 400, 550]}
      minWidth={350}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Upload Box */}
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "4px",
            backgroundColor: "background.paper",
            minHeight: "40px",
            overflow: "hidden",
          }}
        >
          <Button
            component="label"
            variant="contained"
            sx={{
              borderRadius: 0,
              padding: "10px 16px",
              minHeight: "40px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 400,
              border: "none",
              boxShadow: "none",
            }}
          >
            Choose File{multiple ? "s" : ""}
            <input
              accept={accept}
              type="file"
              multiple={multiple}
              hidden
              onChange={handleFileChange}
            />
          </Button>

          <Typography
            sx={{
              color: "#666",
              fontSize: "14px",
              paddingLeft: "12px",
              flex: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {labelText}
          </Typography>
        </Box>

        {label && (
          <Typography
            variant="caption"
            sx={{
              color: "#999",
              fontSize: "12px",
              mt: 1,
              display: "block",
            }}
          >
            {label}
          </Typography>
        )}
      </Box>

      {/* File Previews */}
      {files.length > 0 && (
        <Stack direction="column" gap={1.5} flexWrap="wrap" mt={3} width="100%">
          {files.map((file, index) => (
            <Fade in key={index}>
              <Box
                sx={{
                  p: 2,
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                }}
              >
                <Zoom in>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={2}
                  >
                    <InsertDriveFileIcon />
                    <Typography
                      variant="body2"
                      sx={{
                        flex: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {file.name}
                    </Typography>
                    <IconButton
                      size="small"
                      sx={{
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
                </Zoom>
              </Box>
            </Fade>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export const UploadMultipleFileInputPreview = () => {
  const handleFilesChange = (files: File[]) => {
    console.log("Selected files:", files);
  };
  return (
    <Box>
      <FileUploader
        multiple
        label="SVG, PNG, JPG or GIF (MAX. 800×400px)."
        accept=".svg,.png,.jpg,.gif"
        onFilesChange={handleFilesChange}
      />
    </Box>
  );
};
`