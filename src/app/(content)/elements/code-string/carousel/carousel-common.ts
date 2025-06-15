export const carouselString = `import { Children, isValidElement } from 'react';
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

export const playButtonString = `import { PlayCircle, Stop } from "@mui/icons-material";
import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

export function PlayButton({
  isPlaying,
  ...other
}: ButtonProps & {
  isPlaying: boolean;
}) {
  return (
    <Button
      color={isPlaying ? "error" : "primary"}
      variant="contained"
      startIcon={isPlaying ? <Stop /> : <PlayCircle />}
      {...other}
    >
      {isPlaying ? "Stop" : "Play"}
    </Button>
  );
}
`;

export const carouselProgressBarString = `import { alpha, styled } from "@mui/material/styles";
import type { CarouselProgressBarProps } from "../types/type";

// ----------------------------------------------------------------------

export function CarouselProgressBar({
  sx,
  value,
  ...other
}: CarouselProgressBarProps) {
  return (
    <ProgressBarRoot
      sx={[{ "--progress-value": value }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <ProgressBar />
    </ProgressBarRoot>
  );
}

// ----------------------------------------------------------------------

const ProgressBarRoot = styled("div")(({ theme }) => ({
  height: 6,
  maxWidth: 120,
  width: "100%",
  borderRadius: 6,
  overflow: "hidden",
  position: "relative",
  color: theme.palette.text.primary,
  backgroundColor: alpha(theme.palette.grey[500], 0.2),
}));

const ProgressBar = styled("span")(({ theme }) => ({
  top: 0,
  bottom: 0,
  width: "100%",
  left: "-100%",
  position: "absolute",
  backgroundColor: "currentColor",
  transform: \`translate3d(calc(var(--progress-value) * \${
    theme.direction === "rtl" ? -1 : 1
  }%), 0px, 0px)\`,
}));
`;

export const carouselThumbString = `import { Box } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import type { CarouselThumbProps } from "../types/type";

// ----------------------------------------------------------------------

export function CarouselThumb({
  sx,
  src,
  index,
  selected,
  ...other
}: CarouselThumbProps) {
  return (
    <ThumbRoot selected={selected} sx={sx} {...other}>
      <Box
        component="img"
        alt={\`carousel-thumb-\${index}\`}
        src={src}
        className="carousel-thumb-image"
      />
    </ThumbRoot>
  );
}

// ----------------------------------------------------------------------

const ThumbRoot = styled(ButtonBase, {
  shouldForwardProp: (prop: string) => !["selected", "sx"].includes(prop),
})<Pick<CarouselThumbProps, "selected">>(({ theme }) => ({
  opacity: 0.48,
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: 10,
  transition: theme.transitions.create(["opacity", "box-shadow"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  [\`& .carousel-thumb-image\`]: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
  variants: [
    {
      props: { selected: true },
      style: {
        opacity: 1,
        boxShadow: \`0 0 0 2px \${theme.palette.primary.main}\`,
      },
    },
  ],
}));
`;

export const carouselThumbsString = `import { Children, isValidElement } from "react";

import { styled } from "@mui/material/styles";
import type { CarouselOptions, CarouselThumbsProps } from "../types/type";
import { CarouselSlide } from "./carousel-slide";

export function CarouselThumbs({
  sx,
  options,
  children,
  slotProps,
  ...other
}: CarouselThumbsProps) {
  const axis = options?.axis ?? "x";
  const slideSpacing = options?.slideSpacing ?? "12px";

  const renderChildren = () =>
    Children.map(children, (child) => {
      if (isValidElement(child)) {
        const reactChild = child as React.ReactElement<{ key?: React.Key }>;

        return (
          <CarouselSlide
            key={reactChild.key}
            options={{ ...options, slideSpacing }}
            sx={{
              ...slotProps?.slide,
              flex: "0 0 auto",
            }}
          >
            {child}
          </CarouselSlide>
        );
      }
      return null;
    });

  return (
    <ThumbsRoot
      axis={axis}
      enableMask={!slotProps?.disableMask}
      sx={{
        ...sx,
        maxWidth: "100%",
        overflow: "hidden",
      }}
      className="carousel-thumbs-root"
      {...other}
    >
      <ThumbsContainer
        axis={axis}
        slideSpacing={slideSpacing}
        sx={{
          ...slotProps?.container,
        }}
        className="carousel-thumbs-container"
      >
        {renderChildren()}
      </ThumbsContainer>
    </ThumbsRoot>
  );
}

// ----------------------------------------------------------------------

type ThumbsRootProps = Pick<CarouselOptions, "axis"> & {
  enableMask?: boolean;
};

const ThumbsRoot = styled("div", {
  shouldForwardProp: (prop: string) =>
    !["axis", "enableMask", "sx"].includes(prop),
})<ThumbsRootProps>(({ enableMask, theme }) => {
  const maskBg = \`\${theme.palette.background.paper} 20%, transparent 100%)\`;

  return {
    flexShrink: 0,
    margin: "auto",
    maxWidth: "100%",
    overflow: "hidden",
    position: "relative",
    variants: [
      {
        props: { axis: "x" },
        style: {
          maxWidth: "100%",
          padding: theme.spacing(0.5),
          ...(enableMask && {
            "&::before, &::after": {
              top: 0,
              zIndex: 9,
              width: 40,
              content: '""',
              height: "100%",
              position: "absolute",
            },
            "&::before": {
              left: -8,
              background: \`linear-gradient(to right, \${maskBg}\`,
            },
            "&::after": {
              right: -8,
              background: \`linear-gradient(to left, \${maskBg}\`,
            },
          }),
        },
      },
      {
        props: { axis: "y" },
        style: {
          height: "100%",
          maxHeight: "100%",
          padding: theme.spacing(0.5),
          ...(enableMask && {
            "&::before, &::after": {
              left: 0,
              zIndex: 9,
              height: 40,
              content: '""',
              width: "100%",
              position: "absolute",
            },
            "&::before": {
              top: -8,
              background: \`linear-gradient(to bottom, \${maskBg}\`,
            },
            "&::after": {
              bottom: -8,
              background: \`linear-gradient(to top, \${maskBg}\`,
            },
          }),
        },
      },
    ],
  };
});

type ThumbsContainerProps = Pick<CarouselOptions, "axis" | "slideSpacing">;

const ThumbsContainer = styled("ul", {
  shouldForwardProp: (prop: string) =>
    !["axis", "slideSpacing", "sx"].includes(prop),
})<ThumbsContainerProps>(({ slideSpacing }) => ({
  display: "flex",
  backfaceVisibility: "hidden",
  variants: [
    {
      props: { axis: "x" },
      style: {
        touchAction: "pan-y pinch-zoom",
        marginLeft: \`calc(\${slideSpacing} * -1)\`,
      },
    },
    {
      props: { axis: "y" },
      style: {
        height: "100%",
        paddingLeft: "0 !important",
        flexDirection: "column",
        touchAction: "pan-x pinch-zoom",
        marginTop: \`calc(\${slideSpacing} * -1)\`,
      },
    },
  ],
}));
`;

// hook string
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

export const useParallaxString = `import type { EmblaEventType, EmblaCarouselType } from 'embla-carousel';

import { useRef, useEffect, useCallback } from 'react';

import type { CarouselOptions } from '../types/type';

export function useParallax(mainApi?: EmblaCarouselType, parallax?: CarouselOptions['parallax']) {
    const tweenFactor = useRef(0);

    const tweenNodes = useRef<HTMLElement[]>([]);

    const TWEEN_FACTOR_BASE = typeof parallax === 'number' ? parallax : 0.24;

    const setTweenNodes = useCallback((_mainApi: EmblaCarouselType): void => {
        tweenNodes.current = _mainApi
            .slideNodes()
            .map(
                (slideNode) => slideNode.querySelector(\`.carousel__slide__content__parallax\`) as HTMLElement
            );
    }, []);


    const setTweenFactor = useCallback(
        (_mainApi: EmblaCarouselType) => {
            tweenFactor.current = TWEEN_FACTOR_BASE * _mainApi.scrollSnapList().length;
        },
        [TWEEN_FACTOR_BASE]
    );

    const tweenParallax = useCallback((_mainApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = _mainApi.internalEngine();

        const scrollProgress = _mainApi.scrollProgress();

        const slidesInView = _mainApi.slidesInView();

        const isScrollEvent = eventName === 'scroll';

        _mainApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;

            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }

                const translateValue = diffToTarget * (-1 * tweenFactor.current) * 100;

                const tweenNode = tweenNodes.current[slideIndex];

                if (tweenNode) {
                    tweenNode.style.transform = \`translateX(\${translateValue}%)\`;
                }
            });
        });
    }, []);

    useEffect(() => {
        if (!mainApi || !parallax) return;

        setTweenNodes(mainApi);
        setTweenFactor(mainApi);
        tweenParallax(mainApi);

        mainApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mainApi, tweenParallax]);

    return null;
}`;

export const useCarouselAutoplayString = `import type { EmblaCarouselType } from "embla-carousel";
import type { } from "embla-carousel-autoplay";

import { useCallback, useEffect, useState } from "react";

import type { UseCarouselAutoPlayReturn } from "../types/type";

// ----------------------------------------------------------------------

export function useCarouselAutoPlay(
  mainApi?: EmblaCarouselType
): UseCarouselAutoPlayReturn {
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickAutoplay = useCallback(
    (callback: () => void) => {
      const autoplay = mainApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [mainApi]
  );

  const onTogglePlay = useCallback(() => {
    const autoplay = mainApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [mainApi]);

  useEffect(() => {
    const autoplay = mainApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    mainApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(false));
  }, [mainApi]);

  return { isPlaying, onTogglePlay, onClickAutoplay };
}
`;

export const useCarouselAutoScrollString = `import type { EmblaCarouselType } from "embla-carousel";
import type { } from "embla-carousel-auto-scroll";

import { useCallback, useEffect, useState } from "react";

import type { UseCarouselAutoPlayReturn } from "../types/type";

// ----------------------------------------------------------------------

export function useCarouselAutoScroll(
  mainApi?: EmblaCarouselType
): UseCarouselAutoPlayReturn {
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickAutoplay = useCallback(
    (callback: () => void) => {
      const autoScroll = mainApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [mainApi]
  );

  const onTogglePlay = useCallback(() => {
    const autoScroll = mainApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [mainApi]);

  useEffect(() => {
    const autoScroll = mainApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    mainApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(false));
  }, [mainApi]);

  return { isPlaying, onTogglePlay, onClickAutoplay };
}
`;

export const useCarouseProgressString = `import type { EmblaCarouselType } from "embla-carousel";

import { useCallback, useEffect, useState } from "react";

import type { UseCarouselProgressReturn } from "../types/type";

// ----------------------------------------------------------------------

export function useCarouselProgress(
  mainApi?: EmblaCarouselType
): UseCarouselProgressReturn {
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((_mainApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, _mainApi.scrollProgress()));

    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!mainApi) return;

    onScroll(mainApi);
    mainApi.on("reInit", onScroll);
    mainApi.on("scroll", onScroll);
  }, [mainApi, onScroll]);

  return { value: scrollProgress };
}
`;

export const useThumbsString = `import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { CarouselOptions, UseCarouselThumbsReturn } from "../types/type";

export function useThumbs(
  mainApi?: EmblaCarouselType,
  options?: Partial<CarouselOptions>
): UseCarouselThumbsReturn {
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    ...options,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClickThumb = useCallback(
    (index: number) => {
      if (!mainApi || !thumbsApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbsApi) return;
    setSelectedIndex(mainApi.selectedScrollSnap());
    thumbsApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  return {
    onClickThumb,
    thumbsRef,
    thumbsApi,
    selectedIndex,
  };
}
`;
