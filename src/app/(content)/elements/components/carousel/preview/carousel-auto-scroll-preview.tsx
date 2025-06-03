import AutoScroll from 'embla-carousel-auto-scroll';
import Box from '@mui/material/Box';
import { Carousel, IndexLabel, CarouselProgressBar, PlayButton } from '../components';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarouselAutoScroll, useCarouselProgress } from '../hooks';

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
export function CarouselAutoScrollPreview() {
    const options = { loop: true };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoScroll({ playOnInit: false })]);
    const autoScroll = useCarouselAutoScroll(emblaApi);
    const progress = useCarouselProgress(emblaApi);

    return (
        <Box width="100%">
            <Box display="flex" alignItems="center" justifyContent="flex-end">
                <PlayButton
                    isPlaying={autoScroll?.isPlaying}
                    onClick={autoScroll?.onTogglePlay}
                />
            </Box>

            <Box sx={{ position: 'relative' }}>
                <Carousel mainRef={emblaRef} options={options} sx={{ borderRadius: 2 }}>
                    {data.map((item, index) => (
                        <CarouselItem key={item.id} index={index} item={item} />
                    ))}
                </Carousel>

                <CarouselProgressBar
                    {...progress}
                    sx={{
                        top: 20,
                        right: 20,
                        color: 'warning.light',
                        position: 'absolute',
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
