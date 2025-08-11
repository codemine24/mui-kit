import { Stack, Skeleton } from "@mui/material"

export const SkeletonVerticalPreview = () => {
    return (
        <Stack direction="row" alignItems="flex-end" width={350} spacing={2}>
            <Skeleton
                variant="rectangular"
                width={30}
                height={250}
                sx={{ transform: 'none', borderRadius: "8px 8px 0 0" }}
            />
            <Skeleton
                variant="rectangular"
                width={30}
                height={300}
                sx={{ transform: 'none', borderRadius: "8px 8px 0 0" }}
            />
            <Skeleton
                variant="rectangular"
                width={30}
                height={280}
                sx={{ transform: 'none', borderRadius: "8px 8px 0 0" }}
            />
            <Skeleton
                variant="rectangular"
                width={30}
                height={290}
                sx={{ transform: 'none', borderRadius: "8px 8px 0 0" }}
            />
            <Skeleton
                variant="rectangular"
                width={30}
                height={260}
                sx={{ transform: 'none', borderRadius: "8px 8px 0 0" }}
            />
            <Skeleton
                variant="rectangular"
                width={30}
                height={300}
                sx={{ transform: 'none', borderRadius: "8px 8px 0 0" }}
            />
        </Stack>

    )
}