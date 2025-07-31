import { Card, CardContent, CardHeader, Skeleton } from "@mui/material"

export const SkeletonSocialPostPreview = () => {
    return (
        <Card sx={{ width: 345, m: 2 }}>
            <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                title={<Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }} />}
                subheader={<Skeleton animation="wave" height={15} width="40%" />}
            />
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

            <CardContent>
                <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={15} width="80%" />
            </CardContent>
        </Card>
    )
}