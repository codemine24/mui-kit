import AutoHeight from "embla-carousel-auto-height";

import Box from "@mui/material/Box";

import useEmblaCarousel from "embla-carousel-react";
import { Carousel, CarouselArrowBasicButtons, IndexLabel } from "../components";
import { useCarouselArrows } from "../hooks";
import type { CarouselOptions } from "../types/type";

// ----------------------------------------------------------------------

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

export function CarouselAutoHeightPreview() {
  const options: CarouselOptions = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoHeight()]);
  const arrows = useCarouselArrows(emblaApi);

  return (
    <Box width="100%">
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <CarouselArrowBasicButtons {...arrows} options={options} />
      </Box>
      <Carousel
        mainRef={emblaRef}
        options={options}
        sx={{ borderRadius: 2, height: "auto" }}
        slotProps={{ slide: { height: "auto" } }}
      >
        {data.map((item, index) => (
          <CarouselItem key={item.id} item={item} index={index} />
        ))}
      </Carousel>
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
    <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 2 }}>
      <IndexLabel index={index + 1} />

      <Box
        component="img"
        alt={item.id}
        src={item.coverUrl}
        sx={{
          width: 1,
          objectFit: "cover",
          ...(index === 0 && { height: 200 }),
          ...(index === 1 && { height: 240 }),
          ...(index === 2 && { height: 160 }),
          ...(index === 3 && { height: 320 }),
          ...(index === 4 && { height: 280 }),
        }}
      />
    </Box>
  );
}
