import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";

export const ContactWithMapPreview = () => {
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
        py: { xs: 2, lg: 4 },
        px: 2,
      }}
    >
      <Typography
        sx={{
          color: "#929292",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Contact Us
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
        Get In Touch
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

      <Grid
        container
        sx={{ width: "100%", maxWidth: "1140px", mt: { xs: 2, lg: 4 } }}
      >
        <Grid size={{ xs: 12, lg: 6 }} sx={{ height: { xs: 300, lg: 400 } }}>
          {/* Change the src with your google map embed link */}
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197289436675!2d-122.4194152846817!3d37.77492977975942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d3e0db87f%3A0x4e9e4e9c7b1dfe65!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1617207906905!5m2!1sen!2sus"
          ></iframe>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            px: { xs: 0, md: 0, lg: 4 },
            mt: { xs: 4, md: 4, lg: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: { xs: 22, md: 24, lg: 28 },
              mb: 1,
            }}
          >
            General Inquiries
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Typography sx={{ color: "#929292" }}>
              1408 Block Valley St
            </Typography>
            <Typography sx={{ color: "#929292" }}>
              San Francisco, CA 94110
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography sx={{ color: "#929292" }}>(415) 123-4567</Typography>
            <Typography sx={{ color: "#929292" }}>
              info@yourdomain.com
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: { xs: 22, md: 24, lg: 28 },
              mb: 1,
            }}
          >
            Press & Media
          </Typography>
          <Typography sx={{ color: "#929292", mb: 1 }}>
            If you are a reporter looking for information on media services
            please contact us at:{" "}
          </Typography>
          <Typography sx={{ color: "#929292", mb: 1 }}>
            press@yourdomain.com
          </Typography>
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: { xs: 22, md: 24, lg: 28 },
              mb: 1,
            }}
          >
            Got Questions?
          </Typography>
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
      </Grid>
    </Box>
  );
};
