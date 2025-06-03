import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const faqData = [
  {
    id: "faq1",
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions.",
  },
  {
    id: "faq2",
    question: "How can I contact support?",
    answer:
      "You can contact our support team by emailing support@example.com or by using the live chat option on our website.",
  },
  {
    id: "faq3",
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee on all our plans. If you're not satisfied, contact us within that period for a full refund.",
  },
  {
    id: "faq4",
    question: "Do you provide custom development?",
    answer:
      "Yes, we provide custom development tailored to your business needs. Contact us with your requirements to get a quote.",
  },
];

export const FaqTwoColPreview = () => {
  const [expanded, setExpanded] = React.useState<string | false>(faqData[0].id);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url("https://images.unsplash.com/photo-1497215728101-856f4ea42174")`,
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(256, 256, 256, 0.95)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          zIndex: 40,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            color: "#333",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{
            color: "#333",
            fontFamily: "serif",
            fontWeight: 500,
            fontSize: { xs: 32, md: 44, lg: 52 },
            lineHeight: 1,
          }}
        >
          Have a Question?
        </Typography>
        <Typography
          sx={{
            color: "#333333",
            fontWeight: 400,
            fontSize: { xs: 16, md: 16 },
            pr: { xs: 0, md: "35%" },
            lineHeight: 1.5,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
          maiores error aliquid ipsum!
        </Typography>

        <Divider
          sx={{
            borderColor: "#777777",
            width: "130px",
            borderBottom: "4px dotted black",
            my: 2,
          }}
        />

        <Grid container>
          <Grid size={{ xs: 12, md: 6 }} sx={{ pr: 2 }}>
            <Typography gutterBottom sx={{ color: "#333333" }}>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </Typography>
            <Typography gutterBottom sx={{ color: "#333333" }}>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </Typography>
            <Typography gutterBottom sx={{ color: "#333333" }}>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {faqData.map((item) => (
              <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                sx={{
                  background: "#dddddd",
                  color: "#333",
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === item.id ? (
                      <Remove style={{ color: "#333" }} />
                    ) : (
                      <Add style={{ color: "#333" }} />
                    )
                  }
                  aria-controls={item.id}
                  id={item.id}
                >
                  <Typography component="span">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
