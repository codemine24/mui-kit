export const carouselParallaxString = `import Box from "@mui/material/Box";
import useEmblaCarousel from "embla-carousel-react";
import {
    Carousel,
    CarouselArrowFloatButtons,
    CarouselDotButtons,
    IndexLabel,
} from "../components";
import { useCarouselArrows, useCarouselDots, useParallax } from "../hooks";
import type { CarouselOptions } from "../types/type";

{
  /* 
  ⚠️ Warning: You must import components, hooks, and types from the file where you defined them.
*/
}

const data = [
  {
    id: "1",
    coverUrl:
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470",
  },
  {
    id: "2",
    coverUrl:
      "https://images.unsplash.com/photo-1564296786842-4fc88fb50485?q=80&w=1470",
  },
  {
    id: "3",
    coverUrl:
      "https://images.unsplash.com/photo-1562563436-a73bab993173?q=80&w=1470",
  },
  {
    id: "4",
    coverUrl:
      "https://images.unsplash.com/photo-1619963225112-a3cba72baeca?q=80&w=1470",
  },
  {
    id: "5",
    coverUrl:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1470",
  },
];

export function CarouselParallax() {
  const options: CarouselOptions = {
    dragFree: true,
    loop: true,
    parallax: true,
    slidesToShow: "70%",
    slideSpacing: "20px",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { disablePrev, disableNext, onClickPrev, onClickNext } =
    useCarouselArrows(emblaApi);
  const dots = useCarouselDots(emblaApi);
  useParallax(emblaApi, options.parallax);

  return (
    <Box width="100%">
      <Box sx={{ position: "relative" }}>
        <Carousel
          mainRef={emblaRef}
          options={options}
          slotProps={{ slide: { borderRadius: 2 } }}
        >
          {data.map((item, index) => (
            <CarouselItem key={item.id} index={index} item={item} />
          ))}
        </Carousel>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
          }}
        >
          <CarouselArrowFloatButtons
            disablePrev={disablePrev}
            disableNext={disableNext}
            onClickPrev={onClickPrev}
            onClickNext={onClickNext}
          />
        </Box>
      </Box>

      <CarouselDotButtons
        scrollSnaps={dots.scrollSnaps}
        selectedIndex={dots.selectedIndex}
        onClickDot={dots.onClickDot}
        sx={{ width: 1, justifyContent: "center", mt: 3 }}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  index: number;
  item: (typeof data)[number];
};

function CarouselItem({ item, index }: CarouselItemProps) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        height: { xs: 200, sm: 250, md: 350 },
      }}
    >
      <IndexLabel index={index + 1} />

      <Box
        component="img"
        alt={item.coverUrl}
        src={item.coverUrl}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}`;
