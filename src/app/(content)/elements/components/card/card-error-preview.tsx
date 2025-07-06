import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import LanguageIcon from "@mui/icons-material/Language";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const CardErrorPreview = () => {
  return (
    <Card sx={{ maxWidth: 400 }}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor ducimus laboriosam,
            nisi a quisquam voluptas quaerat nulla consequatur quod
          </Typography>
          <Button variant="text" endIcon={<ArrowRightAlt />}>
            Learn More
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
