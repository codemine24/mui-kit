export const cardProductString = `import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const CardProduct = () => {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia component="img" height="200" image="https://images.unsplash.com/photo-1558126319-c9feecbf57ee" alt="Paella" />
            <CardContent>
                <Typography fontWeight="bold">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                    <Rating value={4} readOnly size="small" />
                    <Chip label="5.0" size="small" sx={{ ml: 1 }} />
                </Box>
                <Typography variant="h6" mt={1}>$599</Typography>
                <Button variant="contained" fullWidth startIcon={<AddShoppingCartIcon />} sx={{ mt: 1 }}>Add to cart</Button>
            </CardContent>
        </Card>

    )
}`;
