import Autoplay from 'embla-carousel-autoplay';
import Box from '@mui/material/Box';
import { Carousel, CarouselDotButtons, IndexLabel, PlayButton } from '../components';
import { useCarouselAutoPlay, useCarouselDots } from '../hooks';
import useEmblaCarousel from 'embla-carousel-react';

{/* 
  ⚠️ Warning: You must import components, hooks, and types from the file where you defined them.
*/}

const data = [
    {
        id: "1",
        coverUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470",
    },
    {
        id: "2",
        coverUrl: "https://images.unsplash.com/photo-1564296786842-4fc88fb50485?q=80&w=1470",
    },
    {
        id: "3",
        coverUrl: "https://images.unsplash.com/photo-1562563436-a73bab993173?q=80&w=1470",
    },
    {
        id: "4",
        coverUrl: "https://images.unsplash.com/photo-1619963225112-a3cba72baeca?q=80&w=1470",
    },
    {
        id: "5",
        coverUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1470",
    },
]

export function CarouselAutoplayPreview() {
    const options = { loop: true };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: false, delay: 2000 })]);
    const autoplay = useCarouselAutoPlay(emblaApi);
    const dots = useCarouselDots(emblaApi);

    return (
        <Box width="100%">
            <Box display="flex" justifyContent="flex-end">
                <PlayButton
                    isPlaying={autoplay?.isPlaying}
                    onClick={autoplay?.onTogglePlay}
                />
            </Box>

            <Box sx={{ position: 'relative' }}>
                <Carousel mainRef={emblaRef} options={options}>
                    {data.map((item, index) => (
                        <CarouselItem key={item.id} index={index} item={item} />
                    ))}
                </Carousel>

                <CarouselDotButtons
                    scrollSnaps={dots.scrollSnaps}
                    selectedIndex={dots.selectedIndex}
                    onClickDot={dots.onClickDot}
                    sx={{
                        top: 16,
                        right: 16,
                        position: 'absolute',
                        color: 'common.white',
                    }}
                />
            </Box>
        </Box>
    );
}

type CarouselItemProps = {
    index: number;
    item: typeof data[number];
};

function CarouselItem({ item, index }: CarouselItemProps) {
    return (
        <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', height: { xs: 200, sm: 250, md: 350 } }}>
            <IndexLabel index={index + 1} />

            <Box
                component="img"
                alt={item.id}
                src={item.coverUrl}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </Box>
    );
}
