export const carouselOpacityString = `import Box from '@mui/material/Box';

import {
    Carousel,
    IndexLabel,
    CarouselDotButtons,
    CarouselArrowBasicButtons,
} from '../components';
import useEmblaCarousel from 'embla-carousel-react';
import type { CarouselOptions } from '../types/type';
import { useCarouselArrows, useCarouselDots } from '../hooks';

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

export function CarouselOpacityPreview() {
    const options: CarouselOptions = {
        loop: true,
        slidesToShow: '70%',
        slideSpacing: '20px',
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { disablePrev, disableNext, onClickPrev, onClickNext } = useCarouselArrows(emblaApi);
    const dots = useCarouselDots(emblaApi);

    return (
        <Box width="100%">
            <Carousel mainRef={emblaRef} options={options}>
                {data.map((item, index) => (
                    <CarouselItem
                        key={item.id}
                        index={index}
                        item={item}
                        selected={dots.selectedIndex === index}
                    />
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
                <CarouselArrowBasicButtons
                    disablePrev={disablePrev}
                    disableNext={disableNext}
                    onClickPrev={onClickPrev}
                    onClickNext={onClickNext}
                />
                <CarouselDotButtons
                    scrollSnaps={dots.scrollSnaps}
                    selectedIndex={dots.selectedIndex}
                    onClickDot={dots.onClickDot}
                />
            </Box>
        </Box>
    );
}

type CarouselItemProps = {
    index: number;
    selected: boolean;
    item: typeof data[number];
};

function CarouselItem({ item, index, selected }: CarouselItemProps) {
    return (
        <Box
            sx={[
                (theme) => ({
                    opacity: 0.24,
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    height: { xs: 200, sm: 250, md: 350 },
                    transition: theme.transitions.create(['opacity'], {
                        easing: theme.transitions.easing.easeIn,
                        duration: theme.transitions.duration.complex,
                    }),
                    ...(selected && { opacity: 1 }),
                }),
            ]}
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