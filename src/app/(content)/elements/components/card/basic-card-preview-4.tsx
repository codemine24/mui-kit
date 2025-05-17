import { Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { CardGiftcard } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

export const BasicCard4Preview = () => {
    return (
        <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardContent>
                <Stack spacing={2} alignItems="start">
                    <IconButton><CardGiftcard fontSize="large" /></IconButton>
                    <Typography variant="h4" mb={2}>Need a gift card?</Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, odit id quas aspernatur voluptas quo.
                    </Typography>

                    <Button variant="text" color="primary" endIcon={<ChevronRight fontSize="large" />}>See more</Button>
                </Stack>
            </CardContent>
        </Card>
    );
};