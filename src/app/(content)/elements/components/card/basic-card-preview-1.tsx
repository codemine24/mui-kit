import { Card, CardContent, Divider, Typography } from "@mui/material";

export const BasicCard1Preview = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant="body2">Header for the card</Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h4" mb={2}>Networthy Technology Acquisitions 2025</Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellat deleniti aperiam ipsum voluptatibus quam, ipsam atque maxime neque nostrum sed velit optio asperiores, rem aut ut iure odio at!
                </Typography>
            </CardContent>
        </Card>
    );
};