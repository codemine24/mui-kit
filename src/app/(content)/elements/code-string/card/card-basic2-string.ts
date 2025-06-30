export const cardBasic2String = `import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardGiftcard from "@mui/icons-material/CardGiftcard";
import Button from "@mui/material/Button";
import ChevronRight from "@mui/icons-material/ChevronRight";

export const CardBasic2 = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
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
};`;
