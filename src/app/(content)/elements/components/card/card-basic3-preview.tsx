import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";

export const CardBasic3Preview = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Stack spacing={2} alignItems="start">
                    <Typography variant="h4" mb={2}>Networthy Technology Acquisitions 2025</Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellat deleniti aperiam ipsum voluptatibus quam, ipsam atque maxime neque nostrum sed velit optio asperiores, rem aut ut iure odio at!
                    </Typography>

                    <Button variant="contained" endIcon={<ArrowRightAlt />} fullWidth={false} >
                        Read More
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
};