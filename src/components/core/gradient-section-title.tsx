import { pxToRem } from "@/utils/pxToRem";
import { Typography } from "@mui/material";

export const GradientSectionTitle = ({ text }: { text: string }) => {
  return (
    <Typography
      gutterBottom
      sx={{
        fontSize: { xs: pxToRem(24), md: pxToRem(30), lg: pxToRem(40) },
        fontWeight: 600,
        lineHeight: { xs: 1.1, md: 1.3 },
        letterSpacing: 0,
        position: "relative",
        display: "inline-block",
        padding: "0.25rem 0.5rem",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          padding: "2px",
          borderRadius: "4px",
          background: "linear-gradient(90deg, #007074 0%, #24a76b 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        },
        "& span": {
          background: "linear-gradient(90deg, #007074 0%, #24a76b 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline",
        },
      }}
    >
      <span>{text}</span>
    </Typography>
  );
};
