import { Box, Skeleton } from "@mui/material"

export const SkeletonCardPreview = () => {
    return (
        <Box width={[350, 400]} p={2} border={1} borderColor="divider" borderRadius={2} gap={2}>
            <Skeleton variant="rectangular" width="100%" sx={{ mb: 2 }}>
                <Box sx={{ pt: '57%' }} />
            </Skeleton>

            <Skeleton variant="text" sx={{ fontSize: '1rem', width: '60%' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

            <Box display="flex" alignItems="center" gap={2} mt={2}>
                <Skeleton variant="circular" width={40} height={40} />
                <Box flex={1} display="flex" flexDirection="column">
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Box>
            </Box>
        </Box>
    )
}