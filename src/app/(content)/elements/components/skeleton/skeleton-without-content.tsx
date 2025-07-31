import { Avatar, Box, Skeleton, Stack } from "@mui/material"

export const SkeletonWithoutContent = () => {
    return (
        <Stack width={345} spacing={1} p={2} border={1} borderColor="divider" borderRadius={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ margin: 1 }}>
                    <Skeleton variant="circular">
                        <Avatar />
                    </Skeleton>
                </Box>
                <Skeleton width="100%" />
            </Box>

            <Skeleton variant="rectangular" width="100%">
                <Box sx={{ pt: '57%' }} />
            </Skeleton>
        </Stack>
    )
}