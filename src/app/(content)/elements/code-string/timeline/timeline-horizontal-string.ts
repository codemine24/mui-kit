export const timelineHorizontalString = `import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const timelineData = [
  {
    date: "Mar 15, 2024",
    title: "Project Kickoff",
    description: "Initial team meeting.",
    color: "#E91E63",
  },
  {
    date: "Mar 22, 2024",
    title: "Design Phase",
    description: "Completed wire frames.",
    color: "#3F51B5",
  },
  {
    date: "Apr 5, 2024",
    title: "Development Sprint",
    description: "Backend development.",
    color: "#4CAF50",
  },
  {
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    description: "Performance optimization.",
    color: "#008659",
  },
];

export function TimelineHorizontalPreview() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box px={2} py={6} width="100%">
      {isMobile ? (
        <Box position="relative">
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              top: 6,
              left: 6,
              bottom: 0,
              width: 2,
              backgroundColor: "#E0E0E0",
              zIndex: 0,
            }}
          />
          <Stack spacing={4} position="relative" zIndex={1}>
            {timelineData.map((step, i) => (
              <Box key={i} display="flex" alignItems="flex-start" gap={2}>
                {/* Dot */}
                <Box
                  sx={{
                    width: 15,
                    height: 15,
                    mt: "6px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    backgroundColor: "background.default",
                    border: "2px solid",
                    borderColor: step.color,
                    zIndex: 2,
                  }}
                />
                {/* Text */}
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    {step.date}
                  </Typography>
                  <Typography fontWeight={600} fontSize={14}>
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={13}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      ) : (
        // Desktop: horizontal layout
        <Box position="relative">
          {/* Horizontal Line */}
          <Box
            sx={{
              position: "absolute",
              top: 16,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: "#E0E0E0",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {timelineData.map((step, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  width: "25%",
                  pr: 2,
                }}
              >
                {/* Dot */}
                <Box
                  sx={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    backgroundColor: "background.default",
                    border: "2px solid",
                    borderColor: step.color,
                    position: "absolute",
                    top: 10,
                    left: 0,
                    zIndex: 2,
                  }}
                />
                {/* Text */}
                <Box mt={5} ml={0}>
                  <Typography variant="caption" color="text.secondary">
                    {step.date}
                  </Typography>
                  <Typography fontWeight={600} fontSize={14}>
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={13}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}`;
