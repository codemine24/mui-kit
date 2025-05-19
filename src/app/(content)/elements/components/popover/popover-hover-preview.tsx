'use client';

import React, { useState, useRef } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const PopoverHoverPreview = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);
    const hoverRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        if (hoverRef.current) clearTimeout(hoverRef.current);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        hoverRef.current = setTimeout(() => {
            setOpen(false);
            setAnchorEl(null);
        }, 200); // buffer to allow hover between button and popover
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button
                aria-describedby="hover-popover"
                variant="contained"
            >
                Hover me
            </Button>
            <Popover
                id="hover-popover"
                open={open}
                anchorEl={anchorEl}
                disableRestoreFocus
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Typography sx={{ p: 2 }}>
                    The content of the Popover.
                </Typography>
            </Popover>
        </div>
    );
};
