import Bathtub from "@mui/icons-material/Bathtub";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Nightlight from "@mui/icons-material/Nightlight";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CardPropertyPreview = () => {
  return (
    <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3, p: 2 }}>
      <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Paella dish"
        sx={{ height: 300, borderRadius: 2 }}
      />
      <CardContent sx={{ p: 0, mt: 2 }}>
        <Typography variant="body2" component="div" color="text.secondary" gutterBottom>
          $240,000
        </Typography>
        <Typography variant="h6">123 Wallaby Avenue, Park Road</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <DirectionsCar fontSize="small" color="primary" />
            <Typography variant="caption">2 spaces</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Bathtub fontSize="small" color="primary" />
            <Typography variant="caption">2 rooms</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Nightlight fontSize="small" color="primary" />
            <Typography variant="caption">4 rooms</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
