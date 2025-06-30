import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

const timelineData = [
  {
    name: "Hannah Kandell",
    action: "opened a new issue",
    message: "I'm having trouble with the new component library. It's not rendering properly.",
    time: "15 minutes ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Chris Tomson",
    action: "commented on",
    message:
      "Hey Hannah, I'm having trouble with the new component library. It's not rendering properly.",
    time: "10 minutes ago",
    avatar: "/avatars/chris.png"
  },
  {
    name: "Emma Davis",
    action: "assigned you to",
    message: "The new component library is not rendering properly. Can you take a look?",
    time: "5 minutes ago",
    avatar: "/avatars/emma.png"
  },
  {
    name: "Alex Morgan",
    action: "closed the issue",
    message: "The issue has been fixed. Please review the changes.",
    time: "2 minutes ago",
    avatar: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f"
  }
];

export function TimelineAvatarPreview() {
  return (
    <Timeline position="right">
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ flex: 0 }} />
          <TimelineSeparator>
            <Avatar src={item.avatar} alt={item.name} sx={{ width: 40, height: 40 }} />
            {index !== timelineData.length - 1 && (
              <TimelineConnector sx={{ bgcolor: "divider.default" }} />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{ pb: 4 }}>
            <Typography variant="body2" fontWeight={600} component="span">
              {item.name}{" "}
              <Typography component="span" variant="body2" color="text.secondary" fontWeight={400}>
                {item.action}
              </Typography>
            </Typography>

            <Card
              variant="outlined"
              sx={{
                mt: 1,
                borderRadius: 2
              }}>
              <CardContent sx={{ py: 1.5, px: 2 }}>
                <Typography variant="body2">{item.message}</Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 0.5, display: "block" }}>
                  {item.time}
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
