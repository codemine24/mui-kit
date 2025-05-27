export const popoverHoverString = `import React, { useState, useRef, useEffect } from 'react';
import {
    Button,
    Popover,
    Typography,
    Box,
} from '@mui/material';

export const PopoverHover = () => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const [isHoveringButton, setIsHoveringButton] = useState(false);
    const [isHoveringPopover, setIsHoveringPopover] = useState(false);

    useEffect(() => {
        setOpen(isHoveringButton || isHoveringPopover);
    }, [isHoveringButton, isHoveringPopover]);
    const handleButtonMouseEnter = () => {
        setIsHoveringButton(true);
    };

    const handleButtonMouseLeave = () => {
        setIsHoveringButton(false);
    };

    const handlePopoverMouseEnter = () => {
        setIsHoveringPopover(true);
    };

    const handlePopoverMouseLeave = () => {
        setIsHoveringPopover(false);
    };

    return (
        <Box sx={{ display: 'inline-block' }}>
            <Button
                ref={buttonRef}
                variant="contained"
                color="primary"
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
            >
                Hover Me
            </Button>

            <Popover
                open={open}
                anchorEl={buttonRef.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={() => setOpen(false)}
                disableRestoreFocus
                sx={{
                    pointerEvents: 'none',
                }}
            >
                <Box
                    onMouseEnter={handlePopoverMouseEnter}
                    onMouseLeave={handlePopoverMouseLeave}
                    sx={{
                        padding: 2,
                        pointerEvents: 'auto',
                        maxWidth: 350,
                    }}
                >
                    <Typography variant="h6">
                        Hover Popover
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae at iste hic pariatur, tempora quibusdam ex sit libero assumenda.
                    </Typography>
                </Box>
            </Popover>
        </Box>
    );
};
`