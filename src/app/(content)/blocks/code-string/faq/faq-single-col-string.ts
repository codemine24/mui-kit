export const faqSingleColString = `import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
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

export const FaqSingleColPreview = () => {
  const [expanded, setExpanded] = React.useState<string | false>(faqData[0].id);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: \`url("https://images.unsplash.com/photo-1497215728101-856f4ea42174")\`,
        py: { xs: 8, md: 12 },
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
          backgroundColor: "rgba(0, 0, 0, 0.94)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          zIndex: 40,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            color: "common.white",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{
            color: "common.white",
            fontFamily: "serif",
            textAlign: "center",
            fontWeight: 500,
            fontSize: { xs: 32, md: 44, lg: 52 },
            lineHeight: 1,
          }}
        >
          Have a Question?
        </Typography>
        <Typography
          sx={{
            color: "#cdcdcd",
            textAlign: "center",
            fontWeight: 400,
            fontSize: { xs: 16, md: 16 },
            px: { xs: 0, md: "15%" },
            lineHeight: 1.5,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
          maiores error aliquid ipsum!
        </Typography>

        <Divider
          sx={{
            borderColor: "common.white",
            width: "130px",
            borderBottomWidth: ".5px",
            my: 2,
          }}
        />

        <Box sx={{ maxWidth: 600, mx: "auto" }}>
          {faqData.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                background: "#333333",
                borderTop: ".5px solid #333333",
                color: "common.white",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === item.id ? (
                    <Remove style={{ color: "white" }} />
                  ) : (
                    <Add style={{ color: "white" }} />
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
        </Box>
      </Box>
    </Box>
  );
};`;
