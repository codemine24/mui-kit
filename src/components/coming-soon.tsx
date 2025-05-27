import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Iconify } from "./iconify";

interface IProps {
  returnUrl?: string;
}
export const ComingSoon = ({ returnUrl = "/" }: IProps) => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 124px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 3,
        gap: 2,
      }}
    >
      <Image
        src="/images/coming-soon.png"
        alt="coming soon"
        width={200}
        height={200}
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
      <Link href={returnUrl} passHref>
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
};
