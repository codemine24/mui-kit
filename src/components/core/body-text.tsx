import { pxToRem } from "@/utils/pxToRem";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";

export const BodyText = ({ text, sx }: { text: string | React.ReactNode; sx?: SxProps<Theme> }) => {
  return (
    <Typography
      color="text.secondary"
      sx={{
        fontSize: { xs: pxToRem(16), md: pxToRem(17) },
        mr: { xs: 0, md: pxToRem(50) },
        marginBottom: 0,
        ...sx
      }}>
      {text}
    </Typography>
  );
};
