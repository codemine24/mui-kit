import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Email from "@mui/icons-material/Email";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";

const timelineItems = [
  {
    icon: <Email fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    icon: <Home fontSize="large" />,
    description: "Life time accreditation from IAO (First Business Advisory Firm in India)"
  },
  {
    icon: <Settings fontSize="large" />,
    description:
      "This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!"
  },
  {
    icon: <Person fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  }
];

export function TimelineSocialPreview() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "100%" }}>
      <Timeline sx={{ p: 0 }} position={isMobile ? "right" : "alternate"}>
        {timelineItems.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ flex: isMobile ? 0.2 : 1, m: 0 }}>
              <Box
                height={45}
                width={45}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="#E91E63"
                sx={{
                  ml: { xs: 0, sm: index % 2 !== 0 ? 0 : "auto" },
                  fontSize: 25,
                  color: "#fff",
                  fontWeight: 700
                }}>
                {index + 1}
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#E91E63" }} />
              {index !== timelineItems.length - 1 && (
                <TimelineConnector sx={{ bgcolor: "divider" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 4 }}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  p: 2,
                  borderRadius: "8px"
                }}>
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="body2">{item.description}</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
