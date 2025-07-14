"use client";
// import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import Input from "@mui/joy/Input";
import { Box, Typography } from "@mui/material";

export const JumbotronFourPreview = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          backgroundImage:
            "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VtaW5hcnxlbnwwfHwwfHx8MA%3D%3D",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            zIndex: 40,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            py: 4,
            px: 2,
          }}
        >
          <Box
            sx={{
              mb: 2,
              bgcolor: "#DBE9FE",
              px: 1,
              borderRadius: "50px",
            }}
          >
            <Typography
              variant="overline"
              color="primary.dark"
              component="span"
              sx={{
                fontWeight: "bold",
                bgcolor: "#1C4ED8",
                color: "#fff",
                px: 2,
                py: "4px",
                mr: 1,
                borderRadius: 5,
              }}
            >
              New
            </Typography>
            <Typography
              variant="h4"
              component="span"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                fontWeight: "700",
                color: "#1C4ED8",
              }}
            >
              Jumbotron component was launched! See what&apos;s new
            </Typography>
            <KeyboardArrowRightIcon
              sx={{
                verticalAlign: "middle",
                fontSize: "20px",
                color: "#1C4ED8",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "primary.white",
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: 32, md: 44, lg: 52 },
              lineHeight: 1,
            }}
          >
            We invest in the world&apos;s potential
          </Typography>

          <Typography
            sx={{
              color: "primary.white",
              textAlign: "center",
              fontWeight: 400,
              fontSize: { xs: 16, md: 16 },
              px: { xs: 0, md: "15%" },
              lineHeight: 1.5,
            }}
          >
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </Typography>
          {/* <Input
            startDecorator={<MailIcon />}
            endDecorator={<Button>Message</Button>}
          ></Input> */}
          {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <EmailIcon />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
