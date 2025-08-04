import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface State extends SnackbarOrigin {
    open: boolean;
}

export const PositionedSnackbarPreview = () => {
    const theme = useTheme();
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
                    Top-Center
                </Button>
            </Box>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid size={6}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
                        Top-Left
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: 'right' }} size={6}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
                        Top-Right
                    </Button>
                </Grid>
                <Grid size={6}>
                    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
                        Bottom-Left
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: 'right' }} size={6}>
                    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
                        Bottom-Right
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
                    Bottom-Center
                </Button>
            </Box>
        </React.Fragment>
    );

    return (
        <Box sx={{ width: 500 }}>
            {buttons}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Button
                        size="small"
                        sx={{
                            backgroundColor: alpha(theme.palette.error.main, 0.2),
                            color: theme.palette.error.main,
                            borderRadius: "10px",
                            minWidth: "auto",
                        }}
                    >
                        <FavoriteIcon />
                    </Button>
                    <Typography>I love snacks</Typography>
                </Box>}
                key={vertical + horizontal}
            />
        </Box>
    );
}
