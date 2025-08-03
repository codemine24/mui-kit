"use client";

import React, { useRef, useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

type AvatarUploaderProps = {
    onAvatarChange?: (file: File | null) => void;
};

const AvatarUploader: React.FC<AvatarUploaderProps> = ({
    onAvatarChange,
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [avatar, setAvatar] = useState<string | null>(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];

        // Validate file type
        if (!["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(file.type)) {
            alert("Only JPEG, JPG, PNG, or GIF files are allowed.");
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert("File size must be less than 5 MB.");
            return;
        }

        const imageUrl = URL.createObjectURL(file);
        setAvatar(imageUrl);
        onAvatarChange?.(file);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <Box
                sx={{
                    position: "relative",
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    bgcolor: "background.paper",
                }}
                onClick={handleClick}
            >
                <input
                    ref={inputRef}
                    type="file"
                    hidden
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleFileSelect}
                />

                {avatar && (
                    <Box position="relative" sx={{
                        overflow: 'hidden',
                        '&:hover .overlay': {
                            visibility: 'visible'
                        }
                    }}>
                        <Avatar
                            src={avatar}
                            sx={{
                                width: 120,
                                height: 120
                            }}
                        />
                        <Box
                            className="overlay"
                            bgcolor="rgba(0,0,0,0.4)"
                            borderRadius="50%"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            gap={1}
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                visibility: "hidden"
                            }}
                        >
                            <CameraAltIcon sx={{ color: "#fff" }} />
                            <Typography variant="body2" sx={{ color: "#fff" }}>
                                Upload Photo
                            </Typography>
                        </Box>
                    </Box>

                )}

                {/* Camera Icon Overlay */}
                {!avatar && (
                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={1}>
                        <CameraAltIcon color="action" />
                        <Typography variant="body2" color="text.secondary">
                            Upload Photo
                        </Typography>
                    </Box>
                )}
            </Box>

            <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 2, fontSize: "0.85rem" }}
            >
                Allowed *.jpeg, *.jpg, *.png, *.gif <br /> max size of 5 Mb
            </Typography>
        </Box>
    );
};


export const UploadAvatarPreview = () => {
    const handleAvatarChange = (file: File | null) => {
        console.log("Avatar selected:", file);
    };

    return (
        <Box p={4}>
            <AvatarUploader onAvatarChange={handleAvatarChange} />
        </Box>
    );
}
