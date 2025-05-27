import { pxToRem } from "@/utils/pxToRem";
import { SxProps, Theme, Typography } from "@mui/material";

export const Heading1 = ({
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
        fontSize: { xs: pxToRem(32), md: pxToRem(38), lg: pxToRem(48) },
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
