import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import ArrowRight from "@mui/icons-material/ArrowRight";

const timelineItems = [
  {
    date: "October 2020",
    title: "Journey Start",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    place: "New York"
  },
  {
    date: "September 2020",
    title: "Napa Valley",
    description: "Life time accreditation from IAO (First Business Advisory Firm in India)",
    place: "California"
  },
  {
    date: "August 2020",
    title: "San Francisco",
    description:
      "This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!",
    place: "Los Angeles"
  },
  {
    date: "July 2020",
    title: "New York",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    place: "Denver"
  }
];

export function TimelineTouristSpotPreview() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "100%" }}>
      <Timeline sx={{ p: 0 }} position={isMobile ? "right" : "alternate"}>
        {timelineItems.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ flex: 1, display: isMobile ? "none" : "block" }}>
              <Typography
                variant="body2"
                sx={{
                  bgcolor: "#E91E63",
                  color: "#fff",
                  px: 2,
                  py: 0.5,
                  borderRadius: "999px",
                  display: "inline-block"
                }}>
                {item.date}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#E91E63" }} />
              {index !== timelineItems.length - 1 && (
                <TimelineConnector sx={{ bgcolor: "divider" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 4 }}>
              <Typography
                variant="body2"
                sx={{
                  bgcolor: "#E91E63",
                  color: "#fff",
                  mb: 1,
                  px: 2,
                  py: 0,
                  borderRadius: 2,
                  display: isMobile ? "inline-block" : "none"
                }}>
                {item.date}
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {item.title}{" "}
                <Typography component="span" variant="body2" sx={{ mt: 1, fontSize: 11 }}>
                  ({item.place})
                </Typography>
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  p: 2,
                  borderRadius: "8px"
                }}>
                <Typography variant="body2">{item.description}</Typography>
                <Button
                  endIcon={<ArrowRight />}
                  size="small"
                  variant="text"
                  sx={{
                    mt: 1,
                    px: 2,
                    textTransform: "none",
                    color: "#E91E63",
                    "&:hover": {
                      backgroundColor: "#e6007721"
                    }
                  }}>
                  Visit
                </Button>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
