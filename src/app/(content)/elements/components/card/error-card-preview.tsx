import { Alert, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import LanguageIcon from "@mui/icons-material/Language";

export default function ErrorCardPreview() {
    return (
        <Card sx={{ maxWidth: 400, mx: "auto" }}>
            <CardContent>
                <Alert variant="filled" severity="error">
                    This is an error Alert.
                </Alert>

                <Stack spacing={2} mt={3} alignItems="start">
                    <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <LanguageIcon />
                        Custome CMS For Startup
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor ducimus laboriosam, nisi a quisquam voluptas quaerat nulla consequatur quod
                    </Typography>
                    <Button variant="text" endIcon={<ArrowRightAlt />}>
                        Learn More
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
}