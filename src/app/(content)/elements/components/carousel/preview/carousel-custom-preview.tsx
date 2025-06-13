import Box from '@mui/material/Box';

import {
    Carousel,
    CarouselDotButtons,
    CarouselArrowBasicButtons,
    CarouselArrowFloatButtons,
    CarouselArrowNumberButtons,
    IndexLabel,
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


export function CarouselCustoms() {
    const options: CarouselOptions = {
        align: 'start',
        slideSpacing: '20px',
        slidesToShow: { xs: 1, sm: 2 },
    };
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { disablePrev, disableNext, onClickPrev, onClickNext } = useCarouselArrows(emblaApi);
    const dots = useCarouselDots(emblaApi);

    return (
        <Box width="100%">
            <Box sx={{ position: 'relative' }}>
                <Carousel mainRef={emblaRef} options={options} sx={{ maxWidth: 640 }}>
                    {data.map((item, index) => (
                        <CarouselItem key={item.id} index={index} item={item} />
                    ))}
                </Carousel>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}>
                    <CarouselArrowFloatButtons
                        disablePrev={disablePrev}
                        disableNext={disableNext}
                        onClickPrev={onClickPrev}
                        onClickNext={onClickNext}
                        options={options}
                        slotProps={{
                            prevBtn: {
                                sx: { left: 24 },
                                svgIcon: (
                                    <path d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z" />
                                ),
                            },
                            nextBtn: {
                                sx: { right: 24 },
                                svgIcon: (
                                    <path d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z" />
                                ),
                            },
                        }}
                        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    p: 5,
                    gap: 3,
                    display: 'flex',
                    borderRadius: 2,
                    alignItems: 'center',
                    flexDirection: 'column',
                    bgcolor: 'background.neutral',
                }}
            >
                <CarouselArrowBasicButtons
                    disablePrev={disablePrev}
                    disableNext={disableNext}
                    onClickPrev={onClickPrev}
                    onClickNext={onClickNext}
                    options={options}
                    sx={{ color: 'secondary.main' }}
                />

                <CarouselArrowNumberButtons
                    disablePrev={disablePrev}
                    disableNext={disableNext}
                    onClickPrev={onClickPrev}
                    onClickNext={onClickNext}
                    options={options}
                    totalSlides={dots.dotCount}
                    selectedIndex={dots.selectedIndex + 1}
                    slotProps={{
                        prevBtn: {
                            svgIcon: (
                                <path
                                    fill="currentColor"
                                    d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"
                                />
                            ),
                            sx: { border: "none" }
                        },
                        nextBtn: {
                            svgIcon: (
                                <path
                                    fill="currentColor"
                                    d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"
                                />
                            ),
                            sx: { border: "none" }
                        },
                    }}
                    sx={{ bgcolor: '#E60076', color: '#fff' }}
                />

                <CarouselDotButtons
                    scrollSnaps={dots.scrollSnaps}
                    selectedIndex={dots.selectedIndex}
                    onClickDot={dots.onClickDot}
                    sx={{ color: 'primary.main' }}
                />

                <CarouselDotButtons
                    variant="rounded"
                    scrollSnaps={dots.scrollSnaps}
                    selectedIndex={dots.selectedIndex}
                    onClickDot={dots.onClickDot}
                    sx={{ color: 'info.main' }}
                />

                <CarouselDotButtons
                    variant="number"
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
    return (
        <Box sx={{
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            height: { xs: 200, sm: 250, md: 350 }
        }}>
            <IndexLabel index={index + 1} />

            <Box
                component="img"
                alt={item.id}
                src={item.coverUrl}
                sx={{ objectFit: 'cover', width: "100%", height: "100%" }}
            />
        </Box>
    );
}
