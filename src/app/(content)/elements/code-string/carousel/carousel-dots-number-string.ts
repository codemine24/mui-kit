export const carouselDotsNumberString = `import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import useEmblaCarousel from "embla-carousel-react";
import {
    Carousel,
    CarouselArrowBasicButtons,
    CarouselDotButtons,
    IndexLabel,
} from "../components";
import { useCarouselArrows, useCarouselDots } from "../hooks";
import type { CarouselOptions } from "../types/type";

// ----------------------------------------------------------------------

const data = [
  {
    id: "1",
    title: "Title 1",
    coverUrl:
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470",
  },
  {
    id: "2",
    title: "Title 2",
    coverUrl:
      "https://images.unsplash.com/photo-1564296786842-4fc88fb50485?q=80&w=1470",
  },
  {
    id: "3",
    title: "Title 3",
    coverUrl:
      "https://images.unsplash.com/photo-1562563436-a73bab993173?q=80&w=1470",
  },
  {
    id: "4",
    title: "Title 4",
    coverUrl:
      "https://images.unsplash.com/photo-1619963225112-a3cba72baeca?q=80&w=1470",
  },
  {
    id: "5",
    title: "Title 5",
    coverUrl:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1470",
  },
];

export function CarouselDotsNumberPreview() {
  const options: CarouselOptions = {
    loop: true,
    dragFree: true,
    slideSpacing: "20px",
    slidesToShow: { xs: 1, sm: 2, md: "36%" },
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { disablePrev, disableNext, onClickPrev, onClickNext } =
    useCarouselArrows(emblaApi);
  const dots = useCarouselDots(emblaApi);

  return (
    <Box width="100%" sx={{ position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        <Carousel mainRef={emblaRef} options={options}>
          {data.map((item, index) => (
            <CarouselItem key={item.id} index={index} item={item} />
          ))}
        </Carousel>

        <CarouselArrowBasicButtons
          options={options}
          disablePrev={disablePrev}
          disableNext={disableNext}
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          slotProps={{
            prevBtn: { sx: { bgcolor: "background.paper" } },
            nextBtn: { sx: { bgcolor: "background.paper" } },
          }}
          sx={{
            gap: 2,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 9,
          }}
        />
      </Box>

      <CarouselDotButtons
        variant="number"
        scrollSnaps={dots.scrollSnaps}
        selectedIndex={dots.selectedIndex}
        onClickDot={dots.onClickDot}
        sx={{
          mt: 5,
          mb: 2,
          width: 1,
          justifyContent: "center",
        }}
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
    <Box sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }}>
      <IndexLabel index={index + 1} />

      <Box
        component="img"
        alt={item.id}
        src={item.coverUrl}
        sx={{ height: 350, objectFit: "cover" }}
      />

      <CardContent
        sx={() => ({
          width: 1,
          bottom: 0,
          zIndex: 9,
          textAlign: "left",
          position: "absolute",
          color: "common.white",
          backgroundImage: \`linear-gradient(to top, rgba(0,0,0,0.8) 25%, transparent)\`,
        })}
      >
        <Typography variant="h5" sx={[]}>
          {item.title}
        </Typography>

        <Link
          color="inherit"
          variant="overline"
          sx={(theme) => ({
            gap: 1,
            opacity: 0.72,
            alignItems: "center",
            display: "inline-flex",
            transition: theme.transitions.create(["opacity"]),
            "&:hover": { opacity: 1 },
          })}
        >
          Learn more
        </Link>
      </CardContent>
    </Box>
  );
}`;
