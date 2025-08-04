import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  InputAdornment,
  Box,
  Typography,
  outlinedInputClasses,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import KeyIcon from "@mui/icons-material/Key";

export const ClipboardV9Preview = () => {
  const [open, setOpen] = useState(false);

  const [isCopied, setIsCopied] = useState(false);

  const patToken = "9A8b7c6d-5e4F-3g2h-1l0j-k9l8m7n6C";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(patToken).then(() => {
      setIsCopied(true);
    });
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <Box>
      {}
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "#6e44ff",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#5837d0",
          },
        }}
      >
        Open clipboard
      </Button>

      {}
      <Dialog
        onClose={handleClose}
        open={open}
        slotProps={{
          paper: {
            style: {
              borderRadius: "12px",
              padding: "1rem",
              maxWidth: "500px",
            },
          },
        }}
      >
        <DialogTitle sx={{ p: 1.2, paddingBottom: 1 }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            Personal Access Token
          </Typography>
          {}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: "0 10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              my: 1,
            }}
          >
            <TextField
              fullWidth
              value={patToken}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                  border: "1px solid #999999",
                },
                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                  border: "1px solid #999999",
                },
                [`& .${outlinedInputClasses.input}`]: {
                  padding: "11px 14px",
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleCopy}
              startIcon={isCopied ? <CheckIcon /> : <ContentCopyIcon />}
              sx={{
                backgroundColor: "#6e44ff",
                color: "white",
                padding: "10.5px 20px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#5837d0",
                },
              }}
            >
              Copy
            </Button>
          </Box>

          <DialogContentText sx={{ fontSize: "0.875rem", mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            doloremque nobis incidunt iusto quae tempore hic corporis ex optio
            laboriosam?
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ padding: "0 0.7rem 0.5rem" }}>
          <Button
            onClick={handleClose}
            sx={{
              color: "#333",
              backgroundColor: "#e0e0e0",
              textTransform: "none",
              padding: "4px 16px",
              border: "1px solid transparent",
              "&:hover": {
                backgroundColor: "#e0e0e0",
                border: "1px solid #cac1c1",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
