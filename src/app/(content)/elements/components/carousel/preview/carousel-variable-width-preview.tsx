import Box from '@mui/material/Box';

import {
    Carousel,
    CarouselDotButtons,
    CarouselArrowBasicButtons,
    IndexLabel,
} from '../components';
import useEmblaCarousel from 'embla-carousel-react';
import type { CarouselOptions } from '../types/type';
import { useCarouselArrows, useCarouselDots } from '../hooks';
import { Props } from 'next/script';


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


export function CarouselVariableWidthsPreview() {
    const options: CarouselOptions = {
        slidesToShow: 'auto',
        slideSpacing: '20px',
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const dots = useCarouselDots(emblaApi);

    return (
        <Box width="100%">
            <Carousel mainRef={emblaRef} options={options} slotProps={{ slide: { flex: '0 0 auto' } }}>
                {data.map((item, index) => (
                    <CarouselItem key={item.id} index={index} item={item} />
                ))}
            </Carousel>
            <Box
                sx={{
                    mt: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <CarouselArrowBasicButtons {...useCarouselArrows(emblaApi)} options={options} />
                <CarouselDotButtons
                    scrollSnaps={dots.scrollSnaps}
                    selectedIndex={dots.selectedIndex}
                    onClickDot={dots.onClickDot}
                />
            </Box>
        </Box>
    );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
    index: number;
    item: typeof data[number];
};

function CarouselItem({ item, index }: CarouselItemProps) {
    const width = (index + 2) * 140;

    return (
        <Box sx={{ position: 'relative' }}>
            <IndexLabel index={index + 1} />

            <Box
                component="img"
                alt={item.id}
                src={item.coverUrl}
                sx={{
                    borderRadius: 2,
                    objectFit: 'cover',
                    width: { xs: width / 3, md: width },
                    height: { xs: 160, sm: 240, md: 320 },
                }}
            />
        </Box>
    );
}
