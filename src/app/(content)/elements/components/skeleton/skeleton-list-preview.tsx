import { Box, Skeleton, Stack } from "@mui/material"

export const SkeletonListPreview = () => {
    return (
        <Stack width={[350, 450]} spacing={2} p={2} border={1} borderColor="divider" borderRadius={2}>
            {Array.from({ length: 5 }).map((_, index) => (
                <Box key={index} display="flex" alignItems="flex-end" justifyContent="space-between">
                    <Box>
                        <Skeleton width={100} />
                        <Skeleton width={140} />
                    </Box>
                    <Skeleton width={100} />
                </Box>
            ))}
        </Stack>
    )
}