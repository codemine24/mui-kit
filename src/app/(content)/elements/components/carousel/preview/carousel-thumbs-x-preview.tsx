import Box from '@mui/material/Box';

import {
    Carousel,
    CarouselThumb,
    CarouselThumbs,
    CarouselArrowNumberButtons,
    IndexLabel,
} from '../components';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselOptions } from '../types/type';
import { useThumbs, useCarouselArrows, useCarouselDots } from '../hooks';

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


export function CarouselThumbsXPreview() {
    const options: CarouselOptions = {
        thumbs: {
            slidesToShow: 'auto',
        },
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const thumbs = useThumbs(emblaApi);
    const arrows = useCarouselArrows(emblaApi);
    const dots = useCarouselDots(emblaApi);

    return (
        <div>
            <Box sx={{ mb: 2.5, position: 'relative' }}>
                <Carousel mainRef={emblaRef} options={options} sx={{ borderRadius: 2 }}>
                    {data.map((item, index) => (
                        <Box key={item.id} sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', height: { xs: 200, sm: 250, md: 350 } }}>
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

                <CarouselArrowNumberButtons
                    {...arrows}
                    options={options}
                    totalSlides={dots.dotCount}
                    selectedIndex={dots.selectedIndex + 1}
                    sx={{ right: 16, bottom: 16, position: 'absolute' }}
                    slotProps={{
                        prevBtn: {
                            sx: { color: 'common.white' },
                        },
                        nextBtn: {
                            sx: { color: 'common.white' },
                        },
                    }}
                />
            </Box>

            <CarouselThumbs
                ref={thumbs.thumbsRef}
                options={options}
                sx={{ width: { xs: 1, sm: 360 }, borderRadius: 9 }}
            >
                {data.map((item, index) => (
                    <CarouselThumb
                        key={item.id}
                        index={index}
                        src={item.coverUrl}
                        selected={index === thumbs.selectedIndex}
                        onClick={() => thumbs.onClickThumb(index)}
                        sx={{ width: { xs: 48, sm: 64 }, height: { xs: 48, sm: 64 } }}
                    />
                ))}
            </CarouselThumbs>
        </div>
    );
}
