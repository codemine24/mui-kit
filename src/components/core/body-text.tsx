import { pxToRem } from "@/utils/pxToRem";
import { Typography } from "@mui/material";

export const BodyText = ({ text }: { text: string }) => {
  return (
    <Typography
      color="text.secondary"
      sx={{
        mb: 4,
        fontSize: { xs: pxToRem(16), md: pxToRem(17) },
        mr: { xs: 0, md: pxToRem(50) },
      }}
    >
      {text}
    </Typography>
  );
};
