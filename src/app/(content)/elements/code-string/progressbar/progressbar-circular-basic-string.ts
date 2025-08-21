export const progressbarCircularBasicString = `import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

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

type CircularProgressProps = {
  value: number;
  size?: number | number[];
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  showLabel?: boolean;
};

const CircularProgress = ({
  value,
  size = 100,
  strokeWidth = 8,
  color = "#1a90ff",
  trackColor = "#e0e0e0",
  showLabel = false,
}: CircularProgressProps) => {
  const responsiveSize = useResponsiveValue(size);
  const radius = (responsiveSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <Box position="relative" width={responsiveSize} height={responsiveSize}>
      <svg width={responsiveSize} height={responsiveSize}>
        {/* Track circle */}
        <circle
          cx={responsiveSize / 2}
          cy={responsiveSize / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={responsiveSize / 2}
          cy={responsiveSize / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={\`rotate(-90 \${responsiveSize / 2} \${responsiveSize / 2})\`}
        />
      </svg>
      {/* Centered Label */}
      {showLabel && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" fontWeight={700} color={color}>
            {Math.round(value)}%
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export const ProgressbarCircularBasicPreview = () => {
  return (
    <Stack width={["100%", "80%"]} direction={"row"} spacing={2}>
      <CircularProgress size={[100, 125, 150]} value={40} />
      <CircularProgress size={[100, 125, 150]} value={60} showLabel />
      <CircularProgress size={[100, 125, 150]} value={100} showLabel />
    </Stack>
  );
};
`;
