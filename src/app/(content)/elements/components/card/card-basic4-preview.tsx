import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export const CardBasic4Preview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h4" mb={2}>
          Networthy Technology Acquisitions 2025
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellat deleniti aperiam
          ipsum voluptatibus quam, ipsam atque maxime neque nostrum sed velit optio asperiores, rem
          aut ut iure odio at!
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Typography variant="body2">Last Updated: 4 days ago</Typography>
      </CardContent>
    </Card>
  );
};
