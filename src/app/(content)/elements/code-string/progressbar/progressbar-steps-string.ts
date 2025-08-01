export const progressbarStepsString = `import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type StepProgressBarProps = {
  totalSteps: number;
  completedSteps: number;
  color?: string;
  stepSize?: number | number[];
  gap?: number;
  rounded?: boolean;
  label?: string;
  showPercentEnd?: boolean;
  showCheckOnComplete?: boolean;
};

export const StepProgressBar = ({
  totalSteps,
  completedSteps,
  color = "#00BFA6",
  stepSize = 20, // number or number[] // Array for responsive step size
  gap = 4,
  rounded = false,
  label,
  showPercentEnd = false,
  showCheckOnComplete = false,
}: StepProgressBarProps) => {
  const percent = Math.round((completedSteps / totalSteps) * 100);

  return (
    <Box display="flex" alignItems="center" flexWrap="wrap" gap={1}>
      <Box display="flex" gap={\`\${gap}px\`}>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <Box
            key={i}
            sx={{
              width: stepSize,
              height: 8,
              backgroundColor: i < completedSteps ? color : \`\${color}33\`,
              borderRadius: rounded ? "4px" : "2px",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>

      {/* Label or Percentage/Check */}
      {label && (
        <Typography variant="caption" ml={1} sx={{ color }}>
          {label}
        </Typography>
      )}
      {showPercentEnd && !showCheckOnComplete && (
        <Typography variant="body2" ml={1}>
          {percent}%
        </Typography>
      )}
      {showCheckOnComplete && completedSteps === totalSteps && (
        <CheckCircleIcon sx={{ color }} />
      )}
    </Box>
  );
};

export const ProgressbarStepsPreview = () => {
  return (
    <Stack width={["100%", "80%"]} spacing={2}>
      <StepProgressBar totalSteps={5} completedSteps={2} label="Label" />
      <StepProgressBar
        stepSize={[50, 100]}
        totalSteps={5}
        completedSteps={2}
        showPercentEnd
      />
      <StepProgressBar
        stepSize={[60, 90]}
        totalSteps={5}
        completedSteps={3}
        showCheckOnComplete
        label="Label"
      />
      <StepProgressBar
        stepSize={[55, 95]}
        totalSteps={5}
        completedSteps={5}
        showPercentEnd
        showCheckOnComplete
      />
    </Stack>
  );
};`;
