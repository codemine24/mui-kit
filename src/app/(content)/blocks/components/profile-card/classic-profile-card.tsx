'use client'

import {
  Card,
  Avatar,
  Typography,
  Box,
  Link,
  Stack,
  Button,
} from "@mui/material";


export const ClassicProfileCardView = ()=> {
    const avatar = "https://randomuser.me/api/portraits/women/70.jpg";
    const name = "Jane Doe";
    const position = "Frontend Developer";
    const email = "jane.doe@example.com";
    const phone = "123-456-7890";
    const website = "https://janedoe.com";

  return (
    <Card
      sx={{
        maxWidth: 520,
        width: 350,
        mx: "auto",
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        transition: "box-shadow 0.3s",
        "&:hover": { boxShadow: 8 },
        textAlign: "center",
      }}
    >
      <Avatar
        src={avatar}
        alt={name}
        sx={{ width: 96, height: 96, margin: "auto", mb: 2 }}
      />
      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={2}>
        {position}
      </Typography>

      <Box sx={{ textAlign: "left", mt: 2, mb:2 }}>
        <Typography variant="body2" color="text.secondary">
          Email:{" "}
          <Link href={`mailto:${email}`} underline="hover">
            {email}
          </Link>
        </Typography>
        {phone && (
          <Typography variant="body2" color="text.secondary">
            Phone: <Link href={`tel:${phone}`}>{phone}</Link>
          </Typography>
        )}
        {website && (
          <Typography variant="body2" color="text.secondary">
            Website:{" "}
            <Link href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </Link>
          </Typography>
        )}
      </Box>

      <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
        <Button variant="contained" size="small" color="primary">
          Contact
        </Button>
        <Button variant="outlined" size="small" color="primary">
          Portfolio
        </Button>
      </Stack>
    </Card>
  );
}
