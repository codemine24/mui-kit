export const subHeroDoubleColString = `import AlbumSharpIcon from "@mui/icons-material/AlbumSharp";
import MailOutline from "@mui/icons-material/MailOutline";
import { Box, Button, Dialog, Grid, Typography } from "@mui/material";
import { useState } from "react";

export const SubHeroDoubleColPreview = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Grid container>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: { xs: 2, md: 4 },
            background: "#060606",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "white",
              fontSize: { xs: 24, md: 32 },
              fontWeight: 900,
              letterSpacing: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Product Designer based in Nepal
          </Typography>
          <Typography
            sx={{
              color: "#64748b",
              letterSpacing: 2,
              fontSize: { xs: 12, md: 14 },
              fontWeight: 300,
              textAlign: { xs: "center", md: "left" },
              mt: "10px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam
            nulla exercitationem eum? Minus consectetur sapiente explicabo
            accusantium neque obcaecati voluptates facere ab. Possimus,
            similique? Accusamus atque odio consectetur! Cupiditate a tempora
            nihil vitae maxime ad quod ipsum laborum ea cumque minus ducimus
            architecto, fugiat nam qui illo id excepturi.
          </Typography>
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              gap: "5px",
              justifyContent: { xs: "space-between" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: { xs: "50%" },
                bgcolor: "#000",
                color: "#fff",
                px: 1,
                borderRadius: 2,
                fontWeight: 600,
                border: "1px solid #333",
                "&:hover": { bgcolor: "#222" },
              }}
              startIcon={<MailOutline />}
            >
              Contact
            </Button>

            <Button
              variant="contained"
              sx={{
                width: { xs: "50%" },
                bgcolor: "#000",
                color: "#fff",
                px: 3,
                borderRadius: 2,
                fontWeight: 600,
                border: "1px solid #333",
                "&:hover": { bgcolor: "#222" },
              }}
              startIcon={<AlbumSharpIcon sx={{ color: "#00a152" }} />}
            >
              Available for collaboration
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
          <Box
            component={"img"}
            src="https://i.postimg.cc/02fdM0y9/need-just-right-side.png"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              //   borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>

      {/* DIALOG */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "black",
            position: "relative",
          },
        }}
      >
        <Box
          component="video"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          autoPlay
          sx={{
            width: "100%",
            height: "auto",
            outline: "none",
          }}
        />
      </Dialog>
    </Box>
  );
};`;
