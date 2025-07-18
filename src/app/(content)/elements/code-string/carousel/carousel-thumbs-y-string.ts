export const carouselThumbsYString = `import Box from "@mui/material/Box";
import useEmblaCarousel from "embla-carousel-react";
import {
    Carousel,
    CarouselThumb,
    CarouselThumbs,
    IndexLabel,
} from "../components";
import { useThumbs } from "../hooks";
import { CarouselOptions } from "../types/type";

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
  {
    id: "6",
    coverUrl:
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470",
  },
  {
    id: "7",
    coverUrl:
      "https://images.unsplash.com/photo-1564296786842-4fc88fb50485?q=80&w=1470",
  },
  {
    id: "8",
    coverUrl:
      "https://images.unsplash.com/photo-1562563436-a73bab993173?q=80&w=1470",
  },
  {
    id: "9",
    coverUrl:
      "https://images.unsplash.com/photo-1619963225112-a3cba72baeca?q=80&w=1470",
  },
];

export function CarouselThumbsYPreview() {
  const options: CarouselOptions = {
    thumbs: { axis: "y", slideSpacing: "8px", slidesToShow: "auto" },
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const thumbs = useThumbs(emblaApi, options.thumbs);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Carousel
        mainRef={emblaRef}
        options={{ loop: true }}
        sx={{ borderRadius: 2 }}
      >
        {data.map((item, index) => (
          <Box
            key={item.id}
            sx={{ position: "relative", height: { xs: 250, sm: 350, md: 420 } }}
          >
            <IndexLabel index={index + 1} />

            <Box
              component="img"
              alt={item.id}
              src={item.coverUrl}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Carousel>

      <Box
        sx={{
          p: 0.5,
          right: 8,
          top: "50%",
          borderRadius: 1.25,
          position: "absolute",
          bgcolor: "background.paper",
          transform: "translateY(-50%)",
        }}
      >
        <CarouselThumbs
          ref={thumbs.thumbsRef}
          options={options.thumbs}
          sx={{ height: { xs: 200, md: 280 } }}
        >
          {data.map((item, index) => (
            <CarouselThumb
              key={item.id}
              index={index}
              src={item.coverUrl}
              selected={index === thumbs.selectedIndex}
              onClick={() => thumbs.onClickThumb(index)}
              sx={{ width: 48, height: 48 }}
            />
          ))}
        </CarouselThumbs>
      </Box>
    </Box>
  );
}`;
