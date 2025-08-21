export const jumbotronInputString = `import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, TextField, Typography } from "@mui/material";

export const JumbotronInputPreview = () => {
  return (
    <Box>
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
            bgcolor: "#00707413",
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
              bgcolor: "#007074",
              color: "common.white",
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
              color: "#007074",
            }}
          >
            New product has been launched. See what&apos;s new
          </Typography>
          <KeyboardArrowRightIcon
            sx={{
              verticalAlign: "middle",
              fontSize: "20px",
              color: "#007074",
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
          Get exclusive price for all digital products.
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
          This offer valid for a limited time only. Grab your favorite products
          at the lowest price ever. We have 24/7 customer support available.
        </Typography>
        <Box sx={{ minWidth: "400px" }}>
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            placeholder="Enter your work email"
            slotProps={{
              input: {
                startAdornment: <EmailIcon sx={{ mr: 1 }} />,
                endAdornment: (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{
                      textTransform: "none",
                      px: 2,
                      flexShrink: 0,
                    }}
                  >
                    Sign up
                  </Button>
                ),
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};`