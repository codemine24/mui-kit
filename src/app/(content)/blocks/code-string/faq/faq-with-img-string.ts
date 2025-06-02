export const faqWithImgString = `import { Add, Remove } from "@mui/icons-material";
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
  {
    id: "faq5",
    question: "How to get customer support?",
    answer:
      "You can get customer support by emailing support@example.com or by using the live chat option on our website.",
  },
];

export const FaqWithImgPreview = () => {
  const [expanded, setExpanded] = React.useState<string | false>(faqData[0].id);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Grid container>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          position: "relative",
          pr: 2,
          height: { xs: "300px", md: "400px", lg: "500px" },
          background: \`url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")\`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.70)",
            zIndex: 1,
          }}
        />

        <Box sx={{ zIndex: 40, position: "relative", p: 2 }}>
          <Typography
            sx={{
              color: "common.white",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Got a question?
          </Typography>
          <Typography
            sx={{
              color: "common.white",
              fontFamily: "serif",
              fontWeight: 500,
              fontSize: { xs: 32, md: 44, lg: 52 },
              lineHeight: 1,
            }}
          >
            FAQ
          </Typography>
          <Divider
            sx={{
              borderColor: "#cdcdcd",
              width: "130px",
              my: 2,
            }}
          />
          <Typography
            sx={{
              color: "#cdcdcd",
              fontWeight: 400,
              fontSize: { xs: 16, md: 16 },
              lineHeight: 1.5,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            laudantium cupiditate, dicta modi eum, reiciendis cumque deleniti
            maiores error aliquid ipsum!
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          px: { xs: 0, md: 2 },
          py: { xs: 2, md: 2 },
        }}
      >
        {faqData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            sx={{ background: "#333333", py: 1.5, mb: 1 }}
          >
            <AccordionSummary
              expandIcon={expanded === item.id ? <Remove /> : <Add />}
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
  );
};`;
