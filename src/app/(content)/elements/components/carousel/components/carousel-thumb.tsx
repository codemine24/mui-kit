import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import type { CarouselThumbProps } from "../types/type";

// ----------------------------------------------------------------------

export function CarouselThumb({ sx, src, index, selected, ...other }: CarouselThumbProps) {
  return (
    <ThumbRoot selected={selected} sx={sx} {...other}>
      <Box
        component="img"
        alt={`carousel-thumb-${index}`}
        src={src}
        className="carousel-thumb-image"
      />
    </ThumbRoot>
  );
}

// ----------------------------------------------------------------------

const ThumbRoot = styled(ButtonBase, {
  shouldForwardProp: (prop: string) => !["selected", "sx"].includes(prop)
})<Pick<CarouselThumbProps, "selected">>(({ theme }) => ({
  opacity: 0.48,
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: 10,
  transition: theme.transitions.create(["opacity", "box-shadow"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short
  }),
  [`& .carousel-thumb-image`]: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10
  },
  variants: [
    {
      props: { selected: true },
      style: {
        opacity: 1,
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}`
      }
    }
  ]
}));
