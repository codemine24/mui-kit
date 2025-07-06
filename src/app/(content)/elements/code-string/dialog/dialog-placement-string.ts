export const dialogPlacementString = `import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const placements: Record<string, React.CSSProperties> = {
    "top-left": { top: 20, left: 20 },
    "top-right": { top: 20, right: 20 },
    "bottom-left": { bottom: 20, left: 20 },
    "bottom-right": { bottom: 20, right: 20 },
    center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
};

export const DialogPlacement = () => {
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState("top-left");

    const handlePlacementChange = (event: SelectChangeEvent) => {
        setPlacement(event.target.value);
    };

    const onClose = () => setOpen(false);

    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                <Select value={placement} onChange={handlePlacementChange}>
                    {Object.keys(placements).map((pos) => (
                        <MenuItem key={pos} value={pos}>
                            {pos}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Open Modal
            </Button>
            <Dialog
                open={open}
                onClose={onClose}
                slotProps={{
                    paper: {
                        sx: {
                            position: "absolute",
                            margin: 0,
                            ...placements[placement],
                        },
                    },
                }}
                aria-labelledby="dialog-title"
                disableEscapeKeyDown
            >
                <DialogTitle id="dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Disagree</Button>
                    <Button onClick={onClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
`;
