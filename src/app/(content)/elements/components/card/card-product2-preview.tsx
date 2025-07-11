import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const CardProduct2Preview = () => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://images.unsplash.com/photo-1629367494173-c78a56567877"
        alt="Paella"
      />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontWeight="bold">Apple AirPods</Typography>
          <Typography color="primary" fontWeight="bold">
            $95.00
          </Typography>
        </Box>
        <Typography variant="body2" mt={1}>
          With plenty of talk and listen time, voice-activated Siri access, and an available
          wireless charging case.
        </Typography>
        <Button variant="contained" fullWidth sx={{ mt: 1 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
