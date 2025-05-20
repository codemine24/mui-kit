export const popoverPositionString = `import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const PopoverPosition = () => {
    const [topLeftAnchor, setTopLeftAnchor] = React.useState<HTMLButtonElement | null>(null);
    const [topRightAnchor, setTopRightAnchor] = React.useState<HTMLButtonElement | null>(null);
    const [topCenterAnchor, setTopCenterAnchor] = React.useState<HTMLButtonElement | null>(null);

    const handleTopLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTopLeftAnchor(event.currentTarget);
    };

    const handleTopRightClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTopRightAnchor(event.currentTarget);
    };

    const handleTopCenterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTopCenterAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setTopLeftAnchor(null);
        setTopRightAnchor(null);
        setTopCenterAnchor(null);
    };

    return (
        <div>
            <Stack direction="row" flexWrap="wrap" rowGap={2} spacing={2}>
                <Button aria-describedby="popover-top-left" variant="contained" onClick={handleTopLeftClick}>
                    Top Left
                </Button>
                <Button aria-describedby="popover-top-right" variant="contained" onClick={handleTopRightClick}>
                    Top Right
                </Button>
                <Button aria-describedby="popover-top-center" variant="contained" onClick={handleTopCenterClick}>
                    Top Center
                </Button>
            </Stack>

            <Popover
                id="popover-top-left"
                open={Boolean(topLeftAnchor)}
                anchorEl={topLeftAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Top Left Popover</Typography>
            </Popover>

            <Popover
                id="popover-top-right"
                open={Boolean(topRightAnchor)}
                anchorEl={topRightAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Top Right Popover</Typography>
            </Popover>

            <Popover
                id="popover-top-center"
                open={Boolean(topCenterAnchor)}
                anchorEl={topCenterAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>This is the Top Center Popover</Typography>
            </Popover>
        </div>
    );
};
`