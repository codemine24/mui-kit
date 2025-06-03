export const csClassicString = `import { Iconify } from "@/components/iconify";
import { Box, Button, Link, Typography } from "@mui/material";


export const CSClassicPreview = () => {
  return (
    <Box
      sx={{
        height: "350px", //for full screen, use => calc(100vh - 100px)
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 3,
        gap: 2,
      }}
    >
      {/* Download the image from here => https://github.com/codemine24/mui-kit/blob/main/public/images/coming-soon.png*/}
      <Box
        component={"img"}
        src="/images/coming-soon.png"
        alt="coming soon"
        width={{ xs: 150, md: 200 }}
        height={{ xs: 150, md: 200 }}
      />
      <Typography
        sx={{
          color: "text.secondary",
          mb: 2,
          textAlign: "center",
          maxWidth: "600px",
          fontSize: "1.2rem",
        }}
      >
        We&apos;re working hard to bring you this page. Stay tuned for something
        awesome!
      </Typography>
      {/* If you are using next.js use => Link from "next/link" */}
      <Link href={"/"}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
          sx={{
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Return
        </Button>
      </Link>
    </Box>
  );
};`; 
