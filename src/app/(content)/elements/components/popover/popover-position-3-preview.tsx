"use client";

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const PopoverPosition3Preview = () => {
    const [bottomLeftAnchor, setBottomLeftAnchor] = React.useState<HTMLButtonElement | null>(null);
    const [bottomRightAnchor, setBottomRightAnchor] = React.useState<HTMLButtonElement | null>(null);
    const [bottomCenterAnchor, setBottomCenterAnchor] = React.useState<HTMLButtonElement | null>(null);

    const handleBottomLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setBottomLeftAnchor(event.currentTarget);
    };

    const handleBottomRightClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setBottomRightAnchor(event.currentTarget);
    };

    const handleBottomCenterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setBottomCenterAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setBottomLeftAnchor(null);
        setBottomRightAnchor(null);
        setBottomCenterAnchor(null);
    };

    return (
        <div>
            <Stack direction="row" flexWrap="wrap" rowGap={2} spacing={2}>
                <Button aria-describedby="popover-center-left" variant="contained" onClick={handleBottomLeftClick}>
                    Bottom Left
                </Button>
                <Button aria-describedby="popover-center-right" variant="contained" onClick={handleBottomRightClick}>
                    Bottom Right
                </Button>
                <Button aria-describedby="popover-center-center" variant="contained" onClick={handleBottomCenterClick}>
                    Bottom Center
                </Button>
            </Stack>

            <Popover
                id="popover-center-left"
                open={Boolean(bottomLeftAnchor)}
                anchorEl={bottomLeftAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Bottom Left Popover</Typography>
            </Popover>

            <Popover
                id="popover-center-right"
                open={Boolean(bottomRightAnchor)}
                anchorEl={bottomRightAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Bottom Right Popover</Typography>
            </Popover>

            <Popover
                id="popover-center-center"
                open={Boolean(bottomCenterAnchor)}
                anchorEl={bottomCenterAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Bottom Center Popover</Typography>
            </Popover>
        </div>
    );
};
