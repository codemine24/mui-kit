import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const timelineData = [
  {
    date: "Mar 15, 2024",
    color: "#E91E63",
    title: "Project Kickoff",
    description:
      "Initial team meeting and project scope definition.\nEstablished key milestones and resource allocation.",
    active: true
  },
  {
    date: "Mar 22, 2024",
    color: "#3F51B5",
    title: "Design Phase",
    description:
      "Completed wireframes and user interface mockups.\nStakeholder review and feedback incorporated.",
    active: true
  },
  {
    date: "Apr 5, 2024",
    color: "#2196F3",
    title: "Development Sprint",
    description: "Backend API implementation and frontend component development in progress.",
    active: true
  },
  {
    date: "Apr 19, 2024",
    color: "#4CAF50",
    title: "Testing & Deployment",
    description:
      "Quality assurance testing, performance optimization, and production deployment preparation.",
    active: false
  }
];

export function TimelineOneSidedPreview() {
  return (
    <Timeline position="right" sx={{ pl: 0 }}>
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ flex: 0 }} />
          <TimelineSeparator>
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: `2px solid ${item.color}`
              }}
            />
            {index !== timelineData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>

          <TimelineContent sx={{ pb: 4, pt: 0, px: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {item.date}
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" whiteSpace="pre-line">
              {item.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
