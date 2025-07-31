import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonSquireBlockPreview = () => {
    return (
        <Grid container wrap="wrap" spacing={2}>
            {Array.from(new Array(3)).map((item, index) => (
                <Box key={index} sx={{ width: 210 }}>
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Box>
            ))}
        </Grid>
    );
}
