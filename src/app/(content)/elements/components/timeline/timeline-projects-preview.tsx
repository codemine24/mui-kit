import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineDotPropsColorOverrides,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Button, Typography } from "@mui/material";

import { Update } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import type { OverridableStringUnion } from "@mui/types";
import { JSX } from "react";

type TimelineStatus = "complete" | "pending" | "inProgress";
type MuiDotColor = OverridableStringUnion<
  | "inherit"
  | "primary"
  | "secondary"
  | "grey"
  | "info"
  | "success"
  | "warning"
  | "error",
  TimelineDotPropsColorOverrides
>;

const timelineData: {
  date?: string;
  title: string;
  link?: string;
  status: TimelineStatus;
}[] = [
  {
    date: "Mar 15, 2024",
    title: "Credit Assessment Approved",
    status: "complete",
  },
  {
    date: "Mar 22, 2024",
    title: "Proposal Sent",
    link: "View Proposal",
    status: "complete",
  },
  {
    title: "Manage Proposal",
    link: "View & Send Document",
    status: "inProgress",
  },
  {
    title: "Contact",
    link: "Contact Client",
    status: "pending",
  },
];

// Choose icon and dot color based on status
const getIconAndColor = (
  status: TimelineStatus
): { icon: JSX.Element; color: MuiDotColor } => {
  switch (status) {
    case "complete":
      return { icon: <CheckIcon fontSize="small" />, color: "success" };
    case "inProgress":
      return { icon: <Update fontSize="small" />, color: "warning" };
    case "pending":
    default:
      return {
        icon: <HourglassEmptyIcon fontSize="small" />,
        color: "error",
      };
  }
};

export function TimelineProjectsPreview() {
  return (
    <Timeline position="right">
      {timelineData.map((item, index) => {
        const { icon, color } = getIconAndColor(item.status);

        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ flex: 0 }} />
            <TimelineSeparator>
              <TimelineDot color={color}>{icon}</TimelineDot>
              {index !== timelineData.length - 1 && (
                <TimelineConnector sx={{ bgcolor: "divider" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 4 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 0.5, display: "block" }}
              >
                {item.date || ""}
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {item.title}
              </Typography>
              {item.link && (
                <Button
                  variant="text"
                  color="primary"
                  size="small"
                  sx={{ mt: 1 }}
                >
                  {item.link}
                </Button>
              )}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
