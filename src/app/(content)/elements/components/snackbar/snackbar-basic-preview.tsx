"use client";

import * as React from "react";
import {
    Button,
    Snackbar,
    IconButton,
    Box,
    Typography,
    alpha,
    Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from "@mui/material/styles";

type SnackbarType = "success" | "error" | "info";

export const SnackbarBasicPreview = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState<SnackbarType>("success");

    const handleOpen = (variant: SnackbarType) => {
        setType(variant);
        setOpen(true);
    };

    const handleClose = (
        _?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    const getColor = () => {
        switch (type) {
            case "error":
                return theme.palette.error.main;
            case "info":
                return theme.palette.warning.main;
            default:
                return theme.palette.secondary.main;
        }
    };

    const getIcon = () => {
        switch (type) {
            case "error":
                return <CancelIcon />;
            case "info":
                return <InfoIcon />;
            default:
                return <CheckCircleIcon />;
        }
    };

    const Message = () => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
                size="small"
                sx={{
                    backgroundColor: alpha(getColor(), 0.2),
                    color: getColor(),
                    borderRadius: "10px",
                    minWidth: "auto",
                }}
            >
                {getIcon()}
            </Button>
            <Typography>
                {type === "error"
                    ? "Something went wrong"
                    : type === "info"
                        ? "This is an info message"
                        : "Item has been created"}
            </Typography>
        </Box>
    );

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="contained" color="secondary" onClick={() => handleOpen("success")}>Success</Button>
            <Button variant="contained" color="error" onClick={() => handleOpen("error")}>Error</Button>
            <Button variant="contained" color="warning" onClick={() => handleOpen("info")}>Info</Button>

            <Snackbar
                open={open}
                autoHideDuration={2500}
                onClose={handleClose}
                message={<Message />}
                action={
                    <IconButton size="small" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            />
        </Stack>
    );
}
