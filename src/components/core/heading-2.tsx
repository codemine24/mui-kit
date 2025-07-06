import { pxToRem } from "@/utils/pxToRem";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";

export const Heading2 = ({ text, sx }: { text: string; sx?: SxProps<Theme> }) => {
  return (
    <Typography
      gutterBottom
      sx={{
        fontSize: { xs: pxToRem(24), md: pxToRem(30), lg: pxToRem(36) },
        fontWeight: 600,
        marginBottom: 0,
        "& span": { color: "primary.main" },
        ...sx
      }}>
      {text}
    </Typography>
  );
};
