"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

interface DigitProps {
    children: string;
    isAnimating: boolean;
}

const Digit: React.FC<DigitProps> = ({ children, isAnimating }) => {
    const digitRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (isAnimating && digitRef.current) {
            // Reset position before animating
            gsap.set(digitRef.current, { y: '100%', opacity: 0 });

            // Animate the digit
            gsap.to(digitRef.current, {
                y: '0%',
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }, [children, isAnimating]);

    return (
        <span
            ref={digitRef}
            style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'top'
            }}
        >
            {children}
        </span>
    );
};

interface AnimatedCountdownProps {
    value: number;
    step?: number;
    duration?: number;
    fontSize?: string | number;
    fontWeight?: string | number;
    suffix?: string;
    prefix?: string;
}

const AnimatedCountdown: React.FC<AnimatedCountdownProps> = ({
    value,
    step = 5,
    duration = 5,
    fontSize = 'inherit',
    fontWeight = 'inherit',
    suffix,
    prefix,
}) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [prevDigits, setPrevDigits] = useState<string[]>([]);
    const [currentDigits, setCurrentDigits] = useState<string[]>(['0']);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const animationRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (inView) {
            const startValue = 0;
            const endValue = value;
            const totalDuration = duration * 1000; // Convert to milliseconds

            const animate = (timestamp: number) => {
                if (!startTimeRef.current) startTimeRef.current = timestamp;
                const elapsed = timestamp - startTimeRef.current;
                const progress = Math.min(elapsed / totalDuration, 1);

                const current = Math.min(
                    startValue + Math.floor(progress * (endValue - startValue)) * step,
                    endValue
                );

                setCurrentValue(current);

                if (progress < 1) {
                    animationRef.current = requestAnimationFrame(animate);
                }
            };

            // Reset values
            setCurrentValue(0);
            setCurrentDigits(['0']);
            startTimeRef.current = null;

            // Start animation
            animationRef.current = requestAnimationFrame(animate);

            return () => {
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            };
        }
    }, [inView, value, step, duration]);

    useEffect(() => {
        setPrevDigits(currentDigits);
        setCurrentDigits(currentValue.toString().split(''));
    }, [currentValue]);

    return (
        <Box
            ref={ref}
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontVariantNumeric: 'tabular-nums',
                lineHeight: '0',
            }}
        >
            {prefix && <Typography component="span" mr={0.5} fontSize={fontSize} fontWeight={fontWeight}>{prefix}</Typography>}
            {currentDigits.map((digit, index) => {
                const prevDigit = prevDigits[index] || '0';
                const isAnimating = digit !== prevDigit;

                return (
                    <span
                        key={`${digit}-${index}-${isAnimating}`}
                        style={{
                            display: 'inline-block',
                            overflow: 'hidden',
                            height: '1em',
                            lineHeight: '1em'
                        }}
                    >
                        <Digit isAnimating={isAnimating}>{digit}</Digit>
                    </span>
                );
            })}
            {suffix && <Typography component="span" ml={0.5} fontSize={fontSize} fontWeight={fontWeight}>{suffix}</Typography>}
        </Box>
    );
};

export default AnimatedCountdown;