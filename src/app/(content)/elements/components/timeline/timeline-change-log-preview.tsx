import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const changelogData = [
  {
    version: "MUI Kit UI v2.0.0",
    date: "January 13th, 2022",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    isLatest: true,
    button: { label: "Download ZIP" },
    status: "complete"
  },
  {
    version: "MUI Kit v1.3.0",
    date: "December 7th, 2021",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    status: "incomplete"
  },
  {
    version: "MUI Kit v1.2.2",
    date: "December 2nd, 2021",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
    status: "incomplete"
  }
];

export function TimelineChangeLogPreview() {
  return (
    <Timeline position="right" sx={{ mt: 4, width: "100%" }}>
      {changelogData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ flex: 0 }} />
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" sx={{ bgcolor: "primary.light" }}>
              {item.status === "complete" ? (
                <CheckCircleIcon fontSize="small" sx={{ color: "common.white" }} />
              ) : (
                <InsertDriveFileIcon fontSize="small" sx={{ color: "common.white" }} />
              )}
            </TimelineDot>
            {index !== changelogData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>

          <TimelineContent sx={{ py: 1 }}>
            <Card variant="outlined" sx={{ borderRadius: 2 }}>
              <CardContent sx={{ py: 2, px: 2 }}>
                <Typography fontWeight={600}>
                  {item.version}
                  {item.isLatest && (
                    <Chip
                      component="span"
                      label="Latest"
                      size="small"
                      color="primary"
                      sx={{ ml: 1 }}
                    />
                  )}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mt: 0.5 }}>
                  Released on {item.date}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.description}
                </Typography>
                {item.button && (
                  <Button variant="outlined" size="small" sx={{ mt: 2, textTransform: "none" }}>
                    {item.button.label}
                  </Button>
                )}
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
