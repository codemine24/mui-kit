import { pxToRem } from "@/utils/pxToRem";
import { SxProps, Theme, Typography } from "@mui/material";

export const BodyText = ({
  text,
  sx,
}: {
  text: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Typography
      color="text.secondary"
      sx={{
        fontSize: { xs: pxToRem(16), md: pxToRem(17) },
        mr: { xs: 0, md: pxToRem(50) },
        marginBottom: 0,
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};
