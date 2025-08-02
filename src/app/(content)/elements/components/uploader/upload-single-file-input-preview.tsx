"use client";

import React, { useState } from "react";
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
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

type FileUploaderProps = {
    accept?: string;
    onFilesChange?: (files: File[]) => void;
    label?: string;
};

const FileUploader: React.FC<FileUploaderProps> = ({
    onFilesChange,
    label,
    accept = ".svg,.png,.jpg,.gif",
}) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        if (selectedFile) {
            onFilesChange?.([selectedFile]);
        } else {
            onFilesChange?.([]);
        }
    };

    const handleRemove = () => {
        setFile(null);
        onFilesChange?.([]);
    };

    return (
        <Box width={["100%", 450, 400, 550]} minWidth={350} display="flex" flexDirection="column" alignItems="center">
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
                    <input
                        accept={accept}
                        id="file-upload-input"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />

                    <Box component="label" htmlFor="file-upload-input">
                        <Button
                            component="span"
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
                            Choose File
                        </Button>
                    </Box>

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
                        {file ? file.name : "No file chosen"}
                    </Typography>
                </Box>

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
            </Box>

            {/* Image Preview */}
            {file && (
                <Stack direction="row" gap={2} flexWrap="wrap" mt={3}>
                    <Fade in>
                        <Box
                            sx={{
                                p: 2,
                                position: "relative",
                                width: '100%',
                                borderRadius: 2,
                                overflow: "hidden",
                                border: "1px solid",
                                borderColor: "divider",
                                backgroundColor: "background.paper",
                            }}
                        >
                            <Zoom in>
                                <Box display="flex" alignItems="center" justifyContent="space-between" gap={3}>
                                    <InsertDriveFileIcon />
                                    <Typography variant="body2">
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
                                            handleRemove();
                                        }}
                                    >
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Zoom>
                        </Box>
                    </Fade>
                </Stack>
            )}
        </Box>
    );
};

export const UploadSingleFileInputPreview = () => {
    const handleFilesChange = (files: File[]) => {
        console.log("Selected file:", files);
    };
    return (
        <Box>
            <FileUploader label="SVG, PNG, JPG or GIF (MAX. 800×400px)." accept=".svg,.png,.jpg,.gif" onFilesChange={handleFilesChange} />
        </Box>
    );
};
