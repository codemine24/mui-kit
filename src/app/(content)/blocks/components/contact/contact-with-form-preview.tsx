import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const ContactWithFormPreview = () => {
  return (
    <Box
      sx={{
        zIndex: 40,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          color: "#929292",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Social Media
      </Typography>
      <Typography
        sx={{
          color: "text.primary",
          fontFamily: "serif",
          textAlign: "center",
          fontWeight: 500,
          fontSize: { xs: 32, md: 44, lg: 52 },

          lineHeight: 1,
        }}
      >
        Contact Us
      </Typography>
      <Typography
        sx={{
          color: "#929292",
          textAlign: "center",
          fontWeight: 400,
          fontSize: { xs: 16, md: 16 },
          px: { xs: 0, md: "15%" },
          lineHeight: 1.5,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
        maiores error aliquid ipsum !
      </Typography>

      <Divider
        sx={{
          borderColor: "text.primary",
          width: "130px",
          borderBottomWidth: ".5px",
          mb: { xs: 2, lg: 4 },
        }}
      />

      <Grid container sx={{ width: "100%", maxWidth: "1140px" }}>
        <Grid size={{ xs: 12, lg: 6 }} sx={{ pr: { xs: 0, md: "10%" } }}>
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: { xs: 22, md: 24, lg: 28 },
              mb: 2,
            }}
          >
            General Inquiries
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#929292" }}>
              1408 Block Valley St
            </Typography>
            <Typography sx={{ color: "#929292" }}>
              San Francisco, CA 94110
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#929292" }}>(415) 123-4567</Typography>
            <Typography sx={{ color: "#929292" }}>
              info@yourdomain.com
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#929292" }}>
              If you are a reporter looking for information on media services
              please contact us at:{" "}
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#929292" }}>
              press@yourdomain.com
            </Typography>
          </Box>

          <Stack direction="row" sx={{ mt: 2 }}>
            <IconButton
              sx={{
                color: "#929292",
                padding: 1,
              }}
            >
              <Facebook sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              sx={{
                color: "#929292",
                padding: 1,
              }}
            >
              <X sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              sx={{
                color: "#929292",
                padding: 1,
              }}
            >
              <Instagram sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              sx={{
                color: "#929292",
                padding: 1,
              }}
            >
              <LinkedIn sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} sx={{mt: { xs: 4, lg: 0}}}>
          <form>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  id="first_name"
                  label="First Name"
                  variant="filled"
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  id="last_name"
                  label="Last Name"
                  variant="filled"
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  id="email"
                  label="Email"
                  variant="filled"
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  id="phone"
                  label="Phone"
                  variant="filled"
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <TextField
                  id="message"
                  label="Message"
                  variant="filled"
                  multiline
                  rows={4}
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ bgcolor: "text.primary", py: 1.5}}
                >
                  Submit Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
