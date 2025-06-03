
import { styled, Breakpoint } from '@mui/material/styles';

import type { CarouselOptions, CarouselSlideProps } from '../types/type';

type InputValue = CarouselOptions['slidesToShow'];
type ObjectValue = {
    [key: string]: string | number;
};

function getValue(value: string | number = 1): string {
    if (typeof value === 'string') {
        const isSupported = value === 'auto' || value.endsWith('%') || value.endsWith('px');

        if (!isSupported) {
            throw new Error(`Only accepts values: auto, px, %, or number.`);
        }
        // value is either 'auto', ends with '%', or ends with 'px'
        return `0 0 ${value}`;
    }

    if (typeof value === 'number') {
        return `0 0 ${100 / value}%`;
    }

    // Default case should not be reached due to the type signature, but we include it for safety
    throw new Error(`Invalid value type. Only accepts values: auto, px, %, or number.`);
}


export function getSlideSize(slidesToShow: InputValue): InputValue {
    if (slidesToShow && typeof slidesToShow === 'object') {
        return Object.keys(slidesToShow).reduce<ObjectValue>((acc, key) => {
            const sizeByKey = slidesToShow[key as Breakpoint];
            acc[key] = getValue(sizeByKey);
            return acc;
        }, {});
    }

    return getValue(slidesToShow);
}

// ----------------------------------------------------------------------

export function CarouselSlide({ sx, options, children, className, ...other }: CarouselSlideProps) {
    const slideSize = getSlideSize(options?.slidesToShow);

    return (
        <CarouselSlideRoot
            axis={options?.axis ?? 'x'}
            slideSpacing={options?.slideSpacing}
            // className={mergeClasses([carouselClasses.slide.root, className])}
            sx={[{ flex: slideSize }, ...(Array.isArray(sx) ? sx : [sx])]}
            {...other}
        >
            {options?.parallax ? (
                <div>
                    <div>{children}</div>
                </div>
            ) : (
                children
            )}
        </CarouselSlideRoot>
    );
}

// ----------------------------------------------------------------------

const CarouselSlideRoot = styled('li', {
    shouldForwardProp: (prop: string) => !['axis', 'slideSpacing', 'sx'].includes(prop),
})<Pick<CarouselOptions, 'axis' | 'slideSpacing'>>(({ slideSpacing }) => ({
    display: 'block',
    position: 'relative',
    // [`& .${carouselClasses.slide.content}`]: {
    //     overflow: 'hidden',
    //     position: 'relative',
    //     borderRadius: 'inherit',
    // },
    variants: [
        { props: { axis: 'x' }, style: { minWidth: 0, paddingLeft: slideSpacing } },
        { props: { axis: 'y' }, style: { minHeight: 0, paddingTop: slideSpacing } },
    ],
}));
