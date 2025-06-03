import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";

const timelineData = [
  {
    date: "Mar 15, 2024",
    icon: "ep:warning-filled",
    title: "Project Kickoff",
    description:
      "Initial team meeting and project scope definition.\nEstablished key milestones and resource allocation.",
    active: true,
  },
  {
    date: "Mar 22, 2024",
    icon: "carbon:play-filled",
    title: "Design Phase",
    description:
      "Completed wireframes and user interface mockups.\nStakeholder review and feedback incorporated.",
    active: true,
  },
  {
    date: "Apr 5, 2024",
    icon: "teenyicons:shield-tick-solid",
    title: "Development Sprint",
    description:
      "Backend API implementation and frontend component development in progress.",
    active: true,
  },
  {
    date: "Apr 19, 2024",
    icon: "basil:envelope-solid",
    title: "Testing & Deployment",
    description:
      "Quality assurance testing, performance optimization, and production deployment preparation.",
    active: false,
  },
];

export function TimelineCustomIconPreview() {
  return (
    <Timeline position="right" sx={{ pl: 0 }}>
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ flex: 0 }} />
          <TimelineSeparator>
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                color: "#fff",
                backgroundColor: "#E91E63",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 0.6,
              }}
            >
              <Icon icon={item.icon} width="24" height="24" />
            </Box>
            {index !== timelineData.length - 1 && (
              <TimelineConnector sx={{ backgroundColor: "#E91E63" }} />
            )}
          </TimelineSeparator>

          <TimelineContent sx={{ pb: 4, pt: 0, px: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {item.date}
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              whiteSpace="pre-line"
            >
              {item.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
