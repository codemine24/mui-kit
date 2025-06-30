export const dialogAnimationString = `import * as React from 'react';
import type { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import Stack from "@mui/material/Stack";

// Slide Up
const TransitionSlideUp = React.forwardRef<
    HTMLElement,
    TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
    return <Slide direction="up" timeout={300} ref={ref} {...props} />;
});

// Slide Down
const TransitionSlideDown = React.forwardRef<
    HTMLElement,
    TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
    return <Slide direction="down" timeout={300} ref={ref} {...props} />;
});

// Slide Left
const TransitionSlideLeft = React.forwardRef<
    HTMLElement,
    TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
    return <Slide direction="left" timeout={300} ref={ref} {...props} />;
});

// Slide Right
const TransitionSlideRight = React.forwardRef<
    HTMLElement,
    TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
    return <Slide direction="right" timeout={300} ref={ref} {...props} />;
});

// Grow
const TransitionGrow = React.forwardRef<
    HTMLElement,
    TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
    return <Grow timeout={300} ref={ref} {...props} />;
});

// Fade
const TransitionFade = React.forwardRef<
    HTMLElement,
    TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
    return <Fade timeout={300} ref={ref} {...props} />;
});

// Zoom
const TransitionZoom = React.forwardRef<
    HTMLElement,
    TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
    return <Zoom timeout={300} ref={ref} {...props} />;
});

export const DialogAnimation = () => {
    const [openDialog, setOpenDialog] = React.useState<
        'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'grow' | 'fade' | 'zoom' | null
    >(null);

    const handleOpen = (type: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'grow' | 'fade' | 'zoom') => () => {
        setOpenDialog(type);
    };

    const handleClose = () => {
        setOpenDialog(null);
    };

    const DialogContentBlock = (
        <>
            <DialogTitle>Custom Animation Dialog</DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    The key to more success is to have a lot of pillows. Put it this way,
                    it took me twenty five years to get these plants, twenty five years
                    of blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                    getting started.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="inherit">
                    Cancel
                </Button>
                <Button onClick={handleClose} variant="contained" color="success">
                    Confirm
                </Button>
            </DialogActions>
        </>
    );

    return (
        <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap">
            {/* Slide Up Dialog */}
            <>
                <Button variant="contained" onClick={handleOpen('slide-up')}>
                    Slide Up
                </Button>
                <Dialog
                    open={openDialog === 'slide-up'}
                    onClose={handleClose}
                    slots={{
                        transition: TransitionSlideUp,
                    }}
                    keepMounted
                >
                    {DialogContentBlock}
                </Dialog>
            </>

            {/* Slide Down Dialog */}
            <>
                <Button variant="contained" onClick={handleOpen('slide-down')}>
                    Slide Down
                </Button>
                <Dialog
                    open={openDialog === 'slide-down'}
                    onClose={handleClose}
                    slots={{
                        transition: TransitionSlideDown,
                    }}
                    keepMounted
                >
                    {DialogContentBlock}
                </Dialog>
            </>

            {/* Slide Left Dialog */}
            <>
                <Button variant="contained" onClick={handleOpen('slide-left')}>
                    Slide Left
                </Button>
                <Dialog
                    open={openDialog === 'slide-left'}
                    onClose={handleClose}
                    slots={{
                        transition: TransitionSlideLeft,
                    }}
                    keepMounted
                >
                    {DialogContentBlock}
                </Dialog>
            </>

            {/* Slide Right Dialog */}
            <>
                <Button variant="contained" onClick={handleOpen('slide-right')}>
                    Slide Right
                </Button>
                <Dialog
                    open={openDialog === 'slide-right'}
                    onClose={handleClose}
                    slots={{
                        transition: TransitionSlideRight,
                    }}
                    keepMounted
                >
                    {DialogContentBlock}
                </Dialog>
            </>

            {/* Grow Dialog */}
            <>
                <Button variant="contained" onClick={handleOpen('grow')}>
                    Grow
                </Button>
                <Dialog
                    open={openDialog === 'grow'}
                    onClose={handleClose}
                    slots={{
                        transition: TransitionGrow,
                    }}
                    keepMounted
                >
                    {DialogContentBlock}
                </Dialog>
            </>

            {/* Fade Dialog */}
            <>
                <Button variant="contained" onClick={handleOpen('fade')}>
                    Fade
                </Button>
                <Dialog
                    open={openDialog === 'fade'}
                    onClose={handleClose}
                    slots={{
                        transition: TransitionFade,
                    }}
                    keepMounted
                >
                    {DialogContentBlock}
                </Dialog>
            </>

            {/* Zoom Dialog */}
            <>
                <Button variant="contained" onClick={handleOpen('zoom')}>
                    Zoom
                </Button>
                <Dialog
                    open={openDialog === 'zoom'}
                    onClose={handleClose}
                    slots={{
                        transition: TransitionZoom,
                    }}
                    keepMounted
                >
                    {DialogContentBlock}
                </Dialog>
            </>
        </Stack>
    );
}
`;
