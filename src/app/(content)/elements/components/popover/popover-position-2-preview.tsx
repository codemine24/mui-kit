"use client";

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const PopoverPosition2Preview = () => {
    const [centerLeftAnchor, setCenterLeftAnchor] = React.useState<HTMLButtonElement | null>(null);
    const [centerRightAnchor, setCenterRightAnchor] = React.useState<HTMLButtonElement | null>(null);
    const [centerCenterAnchor, setCenterCenterAnchor] = React.useState<HTMLButtonElement | null>(null);

    const handleCenterLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCenterLeftAnchor(event.currentTarget);
    };

    const handleCenterRightClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCenterRightAnchor(event.currentTarget);
    };

    const handleCenterCenterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCenterCenterAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setCenterLeftAnchor(null);
        setCenterRightAnchor(null);
        setCenterCenterAnchor(null);
    };

    return (
        <div>
            <Stack direction="row" flexWrap="wrap" rowGap={2} spacing={2}>
                <Button aria-describedby="popover-center-left" variant="contained" onClick={handleCenterLeftClick}>
                    Center Left
                </Button>
                <Button aria-describedby="popover-center-right" variant="contained" onClick={handleCenterRightClick}>
                    Center Right
                </Button>
                <Button aria-describedby="popover-center-center" variant="contained" onClick={handleCenterCenterClick}>
                    Center Center
                </Button>
            </Stack>

            <Popover
                id="popover-center-left"
                open={Boolean(centerLeftAnchor)}
                anchorEl={centerLeftAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Center Left Popover</Typography>
            </Popover>

            <Popover
                id="popover-center-right"
                open={Boolean(centerRightAnchor)}
                anchorEl={centerRightAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Center Right Popover</Typography>
            </Popover>

            <Popover
                id="popover-center-center"
                open={Boolean(centerCenterAnchor)}
                anchorEl={centerCenterAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Center Center Popover</Typography>
            </Popover>
        </div>
    );
};
