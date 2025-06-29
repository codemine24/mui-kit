import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";

export const DialogSignInPreview = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="contained" onClick={handleToggle}>
        Open Sign In Dialog
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 1
          }
        }}>
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}>
            <CloseIcon />
          </IconButton>

          <DialogTitle
            sx={{
              pt: 2,
              pb: 2,
              fontWeight: "medium",
              fontSize: "1.3rem"
            }}>
            Sign in to our platform
          </DialogTitle>

          <DialogContent sx={{ pb: 3, pt: 0 }}>
            <Stack spacing={2.5}>
              <Box>
                <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                  Your email
                </Typography>
                <TextField
                  fullWidth
                  placeholder="name@company.com"
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Box>
                <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                  Your password
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="••••••••"
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={<Typography variant="body2">Remember me</Typography>}
                />

                <Link href="#" underline="hover" color="primary" variant="body2">
                  Lost Password?
                </Link>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  py: 1.5,
                  textTransform: "none",
                  bgcolor: "primary.main",
                  borderRadius: 1,
                  fontSize: "0.9rem"
                }}>
                Login to your account
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary" component="span">
                  Not registered?
                </Typography>{" "}
                <Link href="#" underline="hover" color="primary" variant="body2">
                  Create account
                </Link>
              </Box>
            </Stack>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};
