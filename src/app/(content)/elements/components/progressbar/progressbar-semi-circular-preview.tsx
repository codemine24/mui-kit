"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type ResponsiveValue<T> = T | T[];

function useResponsiveValue<T>(value: ResponsiveValue<T>): T {
  const theme = useTheme();

  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  if (!Array.isArray(value)) return value;

  if (isXl && value.length > 4) return value[4];
  if (isLg && value.length > 3) return value[3];
  if (isMd && value.length > 2) return value[2];
  if (isSm && value.length > 1) return value[1];

  return value[0];
}

interface SemiCircularProgressProps {
  value: number; // 0 - 100
  label: string;
  color: string;
  size?: number | number[];
  thickness?: number;
}

const SemiCircularProgress = ({
  value,
  label,
  color,
  size = 150,
  thickness = 12,
}: SemiCircularProgressProps) => {
  const circleSize = useResponsiveValue(size);
  const radius = (circleSize - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  const arcFraction = 240 / 360; // fraction of full circle
  const arcLength = circumference * arcFraction;

  // Progress offset
  const progressLength = (value / 100) * arcLength;
  const progressOffset = arcLength - progressLength;

  // SVG rotation so arc starts bottom-left and ends bottom-right
  const rotation = 150;

  return (
    <Box
      sx={{
        position: "relative",
        width: circleSize,
        height: circleSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width={circleSize}
        height={circleSize}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Background arc */}
        <circle
          stroke={`${color}33`}
          fill="transparent"
          strokeWidth={thickness / 2}
          r={radius}
          cx={circleSize / 2}
          cy={circleSize / 2}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={0}
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={thickness}
          r={radius}
          cx={circleSize / 2}
          cy={circleSize / 2}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>

      {/* Center label */}
      <Box
        sx={{
          position: "absolute",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: color,
            lineHeight: 1,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export const ProgressbarSemiCircularPreview = () => {
  return (
    <Stack
      width={["100%", "80%"]}
      direction="row"
      spacing={4}
      justifyContent="center"
    >
      <SemiCircularProgress
        value={25}
        label="25"
        size={[100, 150]}
        color="#9c27b0"
      />
      <SemiCircularProgress
        value={75}
        label="75"
        size={[100, 150]}
        color="#4caf50"
      />
      <SemiCircularProgress
        value={50}
        label="50"
        size={[100, 150]}
        color="#ff9800"
      />
    </Stack>
  );
};
