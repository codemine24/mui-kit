export const carouseString = `import { Children, isValidElement } from 'react';
import { styled } from '@mui/material/styles';
import type { CarouselProps, CarouselOptions } from '../types/type';
import { CarouselSlide } from './carousel-slide';

export function Carousel({
    sx,
    mainRef,
    options,
    pluginNames,
    children,
    slotProps,
    ...other
}: CarouselProps) {
    const axis = options?.axis ?? 'x';
    const slideSpacing = options?.slideSpacing ?? '0px';

    const renderChildren = () =>
        Children.map(children, (child) => {
            if (isValidElement(child)) {
                const reactChild = child as React.ReactElement<{ key?: React.Key }>;

                return (
                    <CarouselSlide key={reactChild.key} options={options} sx={slotProps?.slide}>
                        {child}
                    </CarouselSlide>
                );
            }
            return null;
        });

    return (
        <CarouselRoot
            sx={sx}
            ref={mainRef}
            axis={axis}
            {...other}
        >
            <CarouselContainer
                axis={axis}
                slideSpacing={slideSpacing}
                sx={[
                    (theme) => ({
                        pl: "0 !important",
                        ...(pluginNames?.includes('autoHeight') && {
                            alignItems: 'flex-start',
                            transition: theme.transitions.create(['height'], {
                                easing: theme.transitions.easing.easeInOut,
                                duration: theme.transitions.duration.shorter,
                            }),
                        }),
                    }),
                    ...(Array.isArray(slotProps?.container)
                        ? (slotProps?.container ?? [])
                        : [slotProps?.container]),
                ]}
            >
                {renderChildren()}
            </CarouselContainer>
        </CarouselRoot>
    );
}

// ----------------------------------------------------------------------

const CarouselRoot = styled('div', {
    shouldForwardProp: (prop: string) => !['axis', 'sx'].includes(prop),
})<Pick<CarouselOptions, 'axis'>>(() => ({
    margin: 'auto',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    variants: [{ props: { axis: 'y' }, style: { height: '100%' } }],
}));

const CarouselContainer = styled('ul', {
    shouldForwardProp: (prop: string) => !['axis', 'slideSpacing', 'sx'].includes(prop),
})<Pick<CarouselOptions, 'axis' | 'slideSpacing'>>(({ slideSpacing }) => ({
    display: 'flex',
    backfaceVisibility: 'hidden',
    variants: [
        {
            props: { axis: 'x' },
            style: {
                touchAction: 'pan-y pinch-zoom',
                marginLeft: \`calc(\${slideSpacing} * -1)\`,
            },
        },
        {
            props: { axis: 'y' },
            style: {
                height: '100%',
                flexDirection: 'column',
                touchAction: 'pan-x pinch-zoom',
                marginTop: \`calc(\${slideSpacing} * -1)\`,
            },
        },
    ],
}));
`;

export const carouselArrowButtonsString = `import type { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { ArrowButton } from './arrow-button';

import type { CarouselArrowButtonsProps } from '../types/type';

const BasicButtonsRoot = styled('div')(({ theme }) => ({
    gap: "10px",
    zIndex: 9,
    alignItems: 'center',
    display: 'inline-flex',
    color: theme.palette.action.active,
}));

export function CarouselArrowBasicButtons({
    sx,
    options,
    slotProps,
    onClickPrev,
    onClickNext,
    disablePrev,
    disableNext,
    ...other
}: CarouselArrowButtonsProps) {
    return (
        <BasicButtonsRoot
            sx={sx}
            {...other}
        >
            <ArrowButton
                variant="prev"
                options={options}
                disabled={disablePrev}
                onClick={onClickPrev}
                svgIcon={slotProps?.prevBtn?.svgIcon}
                svgSize={slotProps?.prevBtn?.svgSize}
                sx={slotProps?.prevBtn?.sx}
            />

            <ArrowButton
                variant="next"
                options={options}
                disabled={disableNext}
                onClick={onClickNext}
                svgIcon={slotProps?.nextBtn?.svgIcon}
                svgSize={slotProps?.nextBtn?.svgSize}
                sx={slotProps?.nextBtn?.sx}
            />
        </BasicButtonsRoot>
    );
}

export function CarouselArrowFloatButtons({
    sx,
    options,
    slotProps,
    onClickPrev,
    onClickNext,
    disablePrev,
    disableNext,
}: CarouselArrowButtonsProps) {
    const baseStyles = (theme: Theme) => ({
        zIndex: 9,
        top: '50%',
        borderRadius: 1.5,
        position: 'absolute',
        color: 'common.white',
        bgcolor: 'text.primary',
        '&:hover': { opacity: 0.8 },
        ...theme.applyStyles('dark', {
            color: 'grey.800',
        }),
    });

    return (
        <>
            <ArrowButton
                variant="prev"
                options={options}
                disabled={disablePrev}
                onClick={onClickPrev}
                svgIcon={slotProps?.prevBtn?.svgIcon}
                svgSize={slotProps?.prevBtn?.svgSize}
                sx={[
                    (theme) => ({
                        ...baseStyles(theme),
                        left: 0,
                        transform: 'translate(-50%, -50%)',
                    }),
                    ...(Array.isArray(sx) ? sx : [sx]),
                    ...(Array.isArray(slotProps?.prevBtn?.sx)
                        ? (slotProps?.prevBtn?.sx ?? [])
                        : [slotProps?.prevBtn?.sx]),
                ]}
            />

            <ArrowButton
                variant="next"
                options={options}
                disabled={disableNext}
                onClick={onClickNext}
                svgIcon={slotProps?.nextBtn?.svgIcon}
                svgSize={slotProps?.nextBtn?.svgSize}
                sx={[
                    (theme) => ({
                        ...baseStyles(theme),
                        right: 0,
                        transform: 'translate(50%, -50%)',
                    }),
                    ...(Array.isArray(sx) ? sx : [sx]),
                    ...(Array.isArray(slotProps?.nextBtn?.sx)
                        ? (slotProps?.nextBtn?.sx ?? [])
                        : [slotProps?.nextBtn?.sx]),
                ]}
            />
        </>
    );
}

// ----------------------------------------------------------------------

const NumberButtonsRoot = styled('div')(({ theme }) => ({
    gap: '2px',
    zIndex: 9,
    alignItems: 'center',
    display: 'inline-flex',
    padding: theme.spacing(0.5),
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius * 1.25,
}));

export function CarouselArrowNumberButtons({
    sx,
    options,
    slotProps,
    className,
    totalSlides,
    onClickPrev,
    onClickNext,
    disablePrev,
    disableNext,
    selectedIndex,
    ...other
}: CarouselArrowButtonsProps) {
    return (
        <NumberButtonsRoot
            sx={sx}
            {...other}
        >
            <ArrowButton
                variant="prev"
                options={options}
                disabled={disablePrev}
                onClick={onClickPrev}
                svgIcon={slotProps?.prevBtn?.svgIcon}
                svgSize={slotProps?.prevBtn?.svgSize ?? 16}
                sx={slotProps?.prevBtn?.sx}
            />

            <span className={className}>
                {selectedIndex}/{totalSlides}
            </span>

            <ArrowButton
                variant="next"
                options={options}
                disabled={disableNext}
                onClick={onClickNext}
                svgIcon={slotProps?.nextBtn?.svgIcon}
                svgSize={slotProps?.nextBtn?.svgSize ?? 16}
                sx={slotProps?.nextBtn?.sx}
            />
        </NumberButtonsRoot>
    );
}
`;

export const carouselDotButtonsString = `import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import type { CSSObject } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import type { CarouselDotButtonsProps } from "../types/type";

// ----------------------------------------------------------------------

export function CarouselDotButtons({
  sx,
  gap,
  slotProps,
  onClickDot,
  scrollSnaps,
  selectedIndex,
  variant = "circular",
  ...other
}: CarouselDotButtonsProps) {
  const GAPS = { rounded: gap ?? 2, circular: gap ?? 2, number: gap ?? 6 };

  const SIZES = {
    circular: slotProps?.dot?.size ?? 18,
    rounded: slotProps?.dot?.size ?? 18,
    number: slotProps?.dot?.size ?? 28,
  };

  return (
    <Box
      component="ul"
      sx={[
        () => ({
          gap: \`\${GAPS[variant]}px\`,
          height: SIZES[variant],
          zIndex: 9,
          display: "flex",
          "& > li": {
            display: "inline-flex",
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {scrollSnaps.map((_, index) => {
        const selected = index === selectedIndex;

        return (
          <li key={index}>
            <DotItem
              disableRipple
              aria-label={\`dot-\${index}\`}
              variant={variant}
              selected={selected}
              onClick={() => onClickDot(index)}
              sx={[
                () => ({
                  width: SIZES[variant],
                  height: SIZES[variant],
                }),
                ...(Array.isArray(slotProps?.dot?.sx)
                  ? slotProps?.dot?.sx ?? []
                  : [slotProps?.dot?.sx]),
              ]}
            >
              {variant === "number" && index + 1}
            </DotItem>
          </li>
        );
      })}
    </Box>
  );
}

// ----------------------------------------------------------------------

type DotItemProps = Pick<CarouselDotButtonsProps, "variant"> & {
  selected?: boolean;
};

const DotItem = styled(ButtonBase, {
  shouldForwardProp: (prop: string) =>
    !["variant", "selected", "sx"].includes(prop),
})<DotItemProps>(({ selected, theme }) => {
  const dotStyles: CSSObject = {
    width: 8,
    height: 8,
    content: '""',
    opacity: 0.24,
    borderRadius: "50%",
    backgroundColor: "currentColor",
    transition: theme.transitions.create(["width", "opacity"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
  };

  return {
    variants: [
      {
        props: { variant: "circular" },
        style: {
          "&::before": { ...dotStyles, ...(selected && { opacity: 1 }) },
        },
      },
      {
        props: { variant: "rounded" },
        style: {
          "&::before": {
            ...dotStyles,
            ...(selected && {
              opacity: 1,
              width: "calc(100% - 4px)",
              borderRadius: theme.shape.borderRadius,
            }),
          },
        },
      },
      {
        props: { variant: "number" },
        style: {
          ...theme.typography.caption,
          borderRadius: "50%",
          color: theme.palette.text.disabled,
          // border: \`solid 1px \${varAlpha(theme.palette.grey['500Channel'], 0.16)}\`,
          ...(selected && {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightBold,
            ...theme.applyStyles("dark", {
              color: theme.palette.grey[800],
            }),
          }),
        },
      },
    ],
  };
});
`;

export const indexLabelString = `import Box from '@mui/material/Box';

export const IndexLabel = ({ index }: { index: number }) => {
    return (
        <Box
            sx={[
                () => ({
                    top: 16,
                    left: 16,
                    width: 24,
                    zIndex: 9,
                    height: 24,
                    display: 'flex',
                    color: 'grey.800',
                    borderRadius: '50%',
                    position: 'absolute',
                    alignItems: 'center',
                    bgcolor: 'common.white',
                    typography: 'subtitle2',
                    justifyContent: 'center',
                }),
            ]}
        >
            {index}
        </Box>
    );
}`;

export const useCarouselArrowString = `import type { EmblaCarouselType } from 'embla-carousel';

import { useState, useEffect, useCallback } from 'react';

import type { UseCarouselArrowsReturn } from '../types/type';

// ----------------------------------------------------------------------

export const useCarouselArrows = (mainApi?: EmblaCarouselType): UseCarouselArrowsReturn => {
    const [disablePrev, setDisabledPrevBtn] = useState(true);

    const [disableNext, setDisabledNextBtn] = useState(true);

    const onClickPrev = useCallback(() => {
        if (!mainApi) return;
        mainApi.scrollPrev();
    }, [mainApi]);

    const onClickNext = useCallback(() => {
        if (!mainApi) return;
        mainApi.scrollNext();
    }, [mainApi]);

    const onSelect = useCallback((_mainApi: EmblaCarouselType) => {
        setDisabledPrevBtn(!_mainApi.canScrollPrev());
        setDisabledNextBtn(!_mainApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!mainApi) return;

        onSelect(mainApi);
        mainApi.on('reInit', onSelect);
        mainApi.on('select', onSelect);
    }, [mainApi, onSelect]);

    return {
        disablePrev,
        disableNext,
        onClickPrev,
        onClickNext,
    };
};
`;
export const useCarouselDotsString = `import type { EmblaCarouselType } from 'embla-carousel';

import { useState, useEffect, useCallback } from 'react';

import type { UseCarouselDotsReturn } from '../types/type';

// ----------------------------------------------------------------------

export function useCarouselDots(mainApi?: EmblaCarouselType): UseCarouselDotsReturn {
    const [dotCount, setDotCount] = useState(0);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onClickDot = useCallback(
        (index: number) => {
            if (!mainApi) return;
            mainApi.scrollTo(index);
        },
        [mainApi]
    );

    const onInit = useCallback((_mainApi: EmblaCarouselType) => {
        setScrollSnaps(_mainApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((_mainApi: EmblaCarouselType) => {
        setSelectedIndex(_mainApi.selectedScrollSnap());
        setDotCount(_mainApi.scrollSnapList().length);
    }, []);

    useEffect(() => {
        if (!mainApi) return;

        onInit(mainApi);
        onSelect(mainApi);
        mainApi.on('reInit', onInit);
        mainApi.on('reInit', onSelect);
        mainApi.on('select', onSelect);
    }, [mainApi, onInit, onSelect]);

    return {
        dotCount,
        scrollSnaps,
        selectedIndex,
        onClickDot,
    };
}`;

export const carouselOptionsString = `export type CarouselOptions = CarouselBaseOptions & {
    thumbs?: CarouselBaseOptions;
    breakpoints?: {
        [key: string]: Omit<CarouselBaseOptions, 'slidesToShow'>;
    };
};`;
