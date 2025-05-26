import { pxToRem } from "@/utils/pxToRem";
import { SxProps, Theme, Typography } from "@mui/material";

export const Heading2 = ({
  text,
  sx,
}: {
  text: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Typography
      gutterBottom
      sx={{
        fontSize: { xs: pxToRem(28), md: pxToRem(32), lg: pxToRem(38) },
        fontWeight: 600,
        marginBottom: 0, 
        "& span": { color: "primary.main" },
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};
