import { styled } from "@mui/material/styles";
import type { CarouselOptions, CarouselSlideProps } from "../types/type";
import { getSlideSize } from "../utils";

// ----------------------------------------------------------------------

export function CarouselSlide({
  sx,
  options,
  children,
  ...other
}: CarouselSlideProps) {
  const slideSize = getSlideSize(options?.slidesToShow);
  return (
    <CarouselSlideRoot
      axis={options?.axis ?? "x"}
      slideSpacing={options?.slideSpacing}
      className="carousel-slide-root"
      sx={[
        { flex: slideSize, minWidth: "0px" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {options?.parallax ? (
        <div className="carousel-slide-content">
          <div className="carousel__slide__content__parallax">{children}</div>
        </div>
      ) : (
        children
      )}
    </CarouselSlideRoot>
  );
}

// ----------------------------------------------------------------------

const CarouselSlideRoot = styled("li", {
  shouldForwardProp: (prop: string) =>
    !["axis", "slideSpacing", "sx"].includes(prop),
})<Pick<CarouselOptions, "axis" | "slideSpacing">>(({ slideSpacing }) => ({
  display: "block",
  position: "relative",
  [`& .carousel-slide-content`]: {
    overflow: "hidden",
    position: "relative",
    borderRadius: "inherit",
  },
  variants: [
    { props: { axis: "x" }, style: { minWidth: 0, paddingLeft: slideSpacing } },
    { props: { axis: "y" }, style: { minHeight: 0, paddingTop: slideSpacing } },
  ],
}));
