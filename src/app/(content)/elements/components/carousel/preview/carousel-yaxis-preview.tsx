import Box from '@mui/material/Box';

import {
    Carousel,
    IndexLabel,
    CarouselDotButtons,
    CarouselArrowBasicButtons,
} from '../components';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarouselArrows, useCarouselDots } from '../hooks';
import type { CarouselOptions } from '../types/type';

// ----------------------------------------------------------------------

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


export function CarouselYaxis() {
    const options: CarouselOptions = {
        axis: 'y',
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const arrows = useCarouselArrows(emblaApi);
    const dots = useCarouselDots(emblaApi);

    return (
        <Box sx={{ position: 'relative' }}>
            <Carousel
                mainRef={emblaRef}
                options={options}
                sx={{ borderRadius: 2, overflow: 'hidden', height: { xs: 240, sm: 320, md: 480 } }}
            >
                {data.map((item, index) => (
                    <CarouselItem key={item.id} index={index} item={item} />
                ))}
            </Carousel>

            <CarouselDotButtons
                scrollSnaps={dots.scrollSnaps}
                selectedIndex={dots.selectedIndex}
                onClickDot={dots.onClickDot}
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: '#fff',
                }}
            />

            <CarouselArrowBasicButtons
                {...arrows}
                options={options}
                slotProps={{ prevBtn: { sx: { rotate: '-90deg', border: 'none' } }, nextBtn: { sx: { rotate: '-90deg', border: 'none' } } }}
                sx={{
                    p: 0.5,
                    gap: 0.5,
                    right: 16,
                    bottom: 16,
                    borderRadius: 1,
                    position: 'absolute',
                    bgcolor: '#fff',
                    color: '#000',
                }}
            />
        </Box>
    );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
    index: number;
    item: typeof data[number];
};

function CarouselItem({ item, index }: CarouselItemProps) {
    return (
        <Box sx={{ position: 'relative', height: 1 }}>
            <IndexLabel index={index + 1} />

            <Box
                component="img"
                alt={item.id}
                src={item.coverUrl}
                sx={{ width: 1, height: 1, objectFit: 'cover' }}
            />
        </Box>
    );
}
